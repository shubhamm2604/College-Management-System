import React, {Component} from 'react';
import './SearchStud.css';
import Modal from 'react-modal';
import {Redirect} from 'react-router-dom';

class UpdateStud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            modalIsOpen: false,
            delid: '',
            back: false,
            Id: '',
            Name: '',
            Fathername: '',
            Email: '',
            Address: '',
            Pincode: '',
            Course: '',
            Dob: '',
            Gender: '',
            Contact: ''
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logChange = this.logChange.bind(this); // We capture the value and change state as user changes the value here.
        this.handleEdit = this.handleEdit.bind(this); // Function where we submit data
      this.back = this.back.bind(this); 
    }
      

    openModal(student_details) {
        this.setState({
            modalIsOpen: true,
            
            Id: student_details.Id,
            Name: student_details.Name,
            Fathername: student_details.Fathername,
            Email: student_details.Email,
            Address: student_details.Address,
            Pincode: student_details.Pincode,
            Course: student_details.Course,
            Dob: student_details.Dob,
            Gender: student_details.Gender,
            Contact: student_details.Contact, 
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }
    back(){
        this.setState({back: true});
        console.log(this.state);
      }
    logChange(e) {
        this.setState({
            [e.target.name]: e.target.value //setting value edited by the admin in state.
        });
    }
    
    handleEdit(event) {
        //Edit functionality
        event.preventDefault();
        alert('Record Updated.');
        var data = {
            Id: this.state.Id,
            Name: this.state.Name,
            Fathername: this.state.Fathername,
            Email: this.state.Email,
            Address: this.state.Address,
            Pincode: this.state.Pincode,
            Course: this.state.Course,
            Dob: this.state.Dob,
            Gender: this.state.Gender,
            Contact: this.state.Contact, 
        }
        var param = this.state.Id;
        fetch('http://localhost:4001/Students/'+param, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)
            if (data === "success") {
                this.setState({
                    msg: "User has been edited."
                });
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    componentDidMount() {
        let self = this;
        fetch('http://localhost:4001/Students', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({users:data });
        }).catch(err => {
            console.log('caught it!', err);
        })
    }

    deleteMember(student_details){
        var data = {
            Id : this.state.Id
        }
        var param = student_details.Id;
        fetch('http://localhost:4001/Students/'+param, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            if(data === "success"){
               this.setState({msg: "User has been deleted."});  
            }
        }).catch(function(err) {
            console.log(err)
        });
        alert('Record Deleted.');
    }

    render() {if(this.state.back){
        return (<Redirect to={'/student'} />)
    }

        if(this.state.close){
            return (<Redirect to={'/updatestud'} />)
          }
        return ( 
            
        <div>  <button className="logout" onClick={this.back}>Back</button>
            <div>
            <table>
                <caption><h1><u>Student Details</u></h1></caption>
                    <thead>
                        <tr>
                        <th>Enrollment No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Pin Code</th>
                            <th>Course</th>
                            <th>D.O.B.</th>
                            <th>Gender</th>
                            <th>Contact No.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(student_details =>
                      <tr key={student_details.Id}>
                      <td>{student_details.Id} </td>
                      <td>{student_details.Name} </td>
                      <td>{student_details.Fathername} </td>
                      <td>{student_details.Email}</td>
                      <td>{student_details.Address}</td>
                      <td>{student_details.Pincode}</td>
                      <td>{student_details.Course}</td>
                      <td>{student_details.Dob}</td>
                      <td>{student_details.Gender}</td>
                      <td>{student_details.Contact}</td>
                      <td className="td_action"><button className="edtbtn" onClick={() => this.openModal(student_details)}>Edit</button> / <button className="delbtn" onClick={() => this.deleteMember(student_details)}>Delete</button></td>
                        </tr>
                        )}
                        
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal" >
    <div id="Student">
    <div  className="form">
      <form id="contactform" method='PUT' action='/' onSubmit={this.handleEdit}>
        <legend className="legend"> Student Details </legend>
        <p className="contact"><label>Enrollment No</label></p>
        <input id="phone" name="Id" placeholder="Enrollment no" required="" type="text" onChange={this.logChange} value={this.state.Id} /> <br/>
        <p className="contact"><label>Name</label></p>
        <input id="name" name="Name" placeholder="First and last name" required="" type="text" onChange={this.logChange} value={this.state.Name} />
        <p className="contact"><label>Father Name</label></p>
        <input id="username" name="Fathername" placeholder="Father name" required="" type="text" onChange={this.logChange} value={this.state.Fathername} />
        <p className="contact"><label>Email</label></p>
        <input id="email" name="Email" placeholder="example@domain.com" required="" type="email" onChange={this.logChange} value={this.state.Email} />
        <p className="contact"><label>Address</label></p>
        <input id="password" name="Address" placeholder="Address" required="" type="text" onChange={this.logChange} value={this.state.Address} />
        <p className="contact"><label>Pin Code</label></p>
        <input id="phone" name="Pincode" placeholder="Pin code" required="" type="text" onChange={this.logChange} value={this.state.Pincode} /> <br/>
        <fieldset>           
        <label>Course</label>
        <label className="month">
                <select className="select-style" name="Course" onChange={this.logChange} value={this.state.Course} >
                  <option value="">Select</option>
                  <option  value="B.E.">B.E.</option>
                  <option value="B.Tech.">B.Tech.</option>
                  <option value="B.pharma">B.pharma</option>
                  <option value="Diploma">Diploma</option>
                  <option value="MBA">MBA</option>
                </select>
        </label>   
        </fieldset>
        <br/>
        <fieldset>           
        <p className="contact"><label>D.O.B.</label></p>
        <input id="phone" name="Dob" placeholder="dd/mm/yyyy" required="" type="text" onChange={this.logChange} value={this.state.Dob} /> <br/>
        </fieldset>
        <fieldset>           
        <label>Gender</label>
        <label className="month">
                <select className="select-style" name="Gender" onChange={this.logChange} value={this.state.Gender} >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
        </label>   
        </fieldset>
        <br/>
        <p className="contact"><label>Contact No</label></p>
        <input id="phone" name="Contact" placeholder="Contact no." required="" type="text" onChange={this.logChange} value={this.state.Contact} /> <br/>
        <input className="button" name="submit" id="submit" value="Submit" type="submit"/>  
       
      </form>
    </div>
    <button className="close" id="close"onClick={this.closeModal}>X</button>
</div>

                        </Modal>
                    
                    </tbody>
            </table>
  
            </div>
        </div>
        );
    }
}

export default UpdateStud;