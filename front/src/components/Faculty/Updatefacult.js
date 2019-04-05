import React, {Component} from 'react';
import './SearchStud.css';
import Modal from 'react-modal';
import {Redirect} from 'react-router-dom';

class Updatefacult extends Component {
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
            Deparment: '',
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
      

    openModal(faculty) {
        this.setState({
            modalIsOpen: true,
            Id:faculty.Id,
            Name:faculty.Name,
            Fathername:faculty.Fathername,
            Email:faculty.Email,
            Address:faculty.Address,
            Pincode:faculty.Pincode,
            Department:faculty.Department,
            Dob:faculty.Dob,
            Gender:faculty.Gender,
            Contact:faculty.Contact, 
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
            Department: this.state.Department,
            Dob: this.state.Dob,
            Gender: this.state.Gender,
            Contact: this.state.Contact, 
        }
        var param = this.state.Id;
        console.log(this.state.Id);
        fetch('http://localhost:4001/Faculties/'+param, {
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
        fetch('http://localhost:4001/Faculties', {
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

    deleteMember(faculty){
        var data = {
            Id : this.state.Id
        }
        var param = faculty.Id;
        fetch('http://localhost:4001/Faculties/'+param, {
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

    render() {
        if(this.state.back){
            return (<Redirect to={'/faculty'} />)
        }

        if(this.state.close){
            return (<Redirect to={'/updatefacult'} />)
          }
        return ( 
            
        <div> <button className="logout" onClick={this.back}>Back</button>
            <div>
            <table>
                <caption><h1><u>Faculty Details</u></h1></caption>
                    <thead>
                        <tr>
                        <th>ID No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Pin Code</th>
                            <th>Department</th>
                            <th>D.O.B.</th>
                            <th>Gender</th>
                            <th>Contact No.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(faculty =>
                      <tr key={faculty.Id}>
                      <td>{faculty.Id} </td>
                      <td>{faculty.Name} </td>
                      <td>{faculty.Fathername} </td>
                      <td>{faculty.Email}</td>
                      <td>{faculty.Address}</td>
                      <td>{faculty.Pincode}</td>
                      <td>{faculty.Department}</td>
                      <td>{faculty.Dob}</td>
                      <td>{faculty.Gender}</td>
                      <td>{faculty.Contact}</td>
                      <td className="td_action"><button className="edtbtn" onClick={() => this.openModal(faculty)}>Edit</button> / <button className="delbtn" onClick={() => this.deleteMember(faculty)}>Delete</button></td>
                        </tr>
                        )}
                        
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal" >
    <div id="Faculty">
    <div  className="form">
      <form id="contactform" method='PUT' action='/' onSubmit={this.handleEdit}>
      <legend className="legend"> Faculty Details </legend>
        <p className="contact"><label>ID</label></p>
        <input id="phone" name="Id" placeholder="Id no" required="" type="text"  onChange={this.onChange} /> <br/>
        <p className="contact"><label>Name</label></p>
        <input id="name" name="Name" placeholder="First and last name" required="" type="text" onChange={this.onChange} />
        <p className="contact"><label>Father Name</label></p>
        <input id="username" name="Fathername" placeholder="Father name" required="" type="text" onChange={this.onChange} />
        <p className="contact"><label>Email</label></p>
        <input id="email" name="Email" placeholder="example@domain.com" required="" type="email" onChange={this.onChange} />
        <p className="contact"><label>Address</label></p>
        <input id="password" name="Address" placeholder="Address" required="" type="text" onChange={this.onChange} />
        <p className="contact"><label>Pin Code</label></p>
        <input id="phone" name="Pincode" placeholder="Pin code" required="" type="text" onChange={this.onChange} /> <br/>
        <p className="contact"><label>Department</label></p>
        <input id="name" name="Department" placeholder="department" required="" type="text"  onChange={this.onChange} /> <br/>
        <br/>
        <fieldset>           
        <p className="contact"><label>D.O.B.</label></p>
        <input id="phone" name="Dob" placeholder="dd/mm/yyyy" required="" type="text" onChange={this.onChange} /> <br/>
        </fieldset>
        <fieldset>           
        <label>Gender</label>
        <label className="month">
                <select className="select-style" name="Gender" onChange={this.onChange} >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
        </label>   
        </fieldset>
        <br/>
        <p className="contact"><label>Contact No</label></p>
        <input id="phone" name="Contact" placeholder="Contact no." required="" type="text" onChange={this.onChange} /> <br/>
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

export default Updatefacult;