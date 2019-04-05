import React, { Component } from 'react';
import './Faculty.css';
import Searchfacult from './Searchfacult';
import SearchFId from './SearchFId';
import Updatefacult from './Updatefacult';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';

class Faculty extends Component {

  constructor(props) {
    super(props)
    this.state = {
        logout: false,
        Searchfacult:false,
        SearchFId:false,
        Updatefacult:false,
        Id: '',
        Name: '',
        Fathername: '',
        Email: '',
        Address: '',
        Pincode: '',
        Department: '',
        Dob: '',
        Gender: '',
        Contact: '',
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logout = this.logout.bind(this)
    this.SearchFId = this.SearchFId.bind(this)
    this.Searchfacult = this.Searchfacult.bind(this)
    this.Updatefacult = this.Updatefacult.bind(this)
  }

logout(){
  this.setState({logout: true});
  console.log(this.state);
}


SearchFId(){
  this.setState({SearchFId: true});
  console.log(this.state);
}


Searchfacult(){
  this.setState({Searchfacult: true});
  console.log(this.state);
}

Updatefacult(){
  this.setState({Updatefacult: true});
  console.log(this.state);
}
onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

handleSubmit(event) {
  event.preventDefault();
  event.target.reset();
  alert('Record Added.');
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
    //clear form
    this.setState({
      Id: '',
      Name: '',
      Fathername: '',
      Email: '',
      Address: '',
      Pincode: '',
      Department: '',
      Dob: '',
      Gender: '',
      Contact: ''
    });
    console.log(data);
    fetch("http://localhost:4001/Faculties", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data)  
        if(data === "success"){
           this.refs.msg.show('Some text or component', {
              time: 2000,
              type: 'success',
              icon: <img src="path/to/some/img/32x32.png" alt="img" />
            })
        }
    }).catch(function(err) {
        console.log(err)
    });
}

  render() {

    if(this.state.logout){
      return (<Redirect to={'/'} />)
    }
    if(this.state.SearchFId){
      return (<Redirect to={'/searchFId'} />)
    }
    
    if(this.state.Searchfacult){
      return (<Redirect to={'/searchfacult'} />)
    }

   
    if(this.state.Updatefacult){
      return (<Redirect to={'/updatefacult'} />)
    }

    
    return (
    <div id="Faculty">
    <button className="logout" onClick={this.logout}>Logout</button>
    <div  className="form">
      <form id="contactform" method='POST' action='/' onSubmit={this.handleSubmit}>
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
        <input className="button" name="submit" id="submit" value="Submit" type="submit" />   
      </form>
    </div><br/>
    <input className="stdbtn1" name="search" id="submit1" value="Search All" type="submit" onClick={this.Searchfacult}  />  <br/> 
        <input className="stdbtn2" name="update" id="submit2" value="Update/Delete" type="submit" onClick={this.Updatefacult} />  <br/>
        <input className="stdbtn3" name="delete" id="submit3" value="Search" type="submit" onClick={this.SearchFId} />  <br/>

    </div>
    );
  }
}

export default Faculty;