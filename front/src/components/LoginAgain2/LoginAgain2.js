import React, { Component } from 'react';
import './LoginAgain2.css';
import {Redirect} from 'react-router-dom';

class LoginAgain2 extends Component {

  constructor() {
    super();
    this.state = {
     username: '',
     password: '',
     user: '',
     redirect: false,
     redirect2: false,
     redirectToReferrer: false
     };

     this.login = this.login.bind(this);
     this.onChange = this.onChange.bind(this);

    }

    login(e){

      if(this.state.user === "admin"){
        if(this.state.username === "college" && this.state.password === "admin")
          this.setState({redirect: true});
      }
      if(this.state.user === "college"){
        if(this.state.username === "arun" && this.state.password === "account")
        this.setState({redirect2: true});
      }
      else(this.setState({redirectToReferrer: true}))
          //hide url content
          e.preventDefault();
          console.log(this.state);
          //clear form
          this.setState({
            username: '',
            password: '',
            user: ''
            });
        }
  
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
     }
    
  render() {

    if(this.state.redirect){
      return (<Redirect to={'/home'} />)
    }
    if(this.state.redirect2){
      return (<Redirect to={'/homeacc'} />)
    }
    if(this.state.redirectToReferrer){
      return (<Redirect to={'/loginagain'} />)
    }

    return (
            
      <div id="LoginAgain">
          <div className="App">
          <form className="form-signin">       
          <h2 className="form-signin-heading">Please login</h2>
          <input 
            type="text" 
            className="form-control" 
            name="username" 
            placeholder="Username" 
            required="" 
            autoFocus=""
            value={this.state.username}  
            onChange={this.onChange}
          />   
          <br />
          <input 
            type="password" 
            className="form-control" 
            name="password" 
            placeholder="Password" 
            required="" 
            value={this.state.password} 
            onChange={this.onChange} 
          /> 
          <p className="incorrect"><b>Invalid username or password<br />
            Please try again!</b></p>
            <label className="userlabel">User</label>
                <select className="userclass" name="user" onChange={this.onChange} >
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="accountant">Accountant</option>
                </select>
          <br/>
          <input 
            type="submit" 
            className="bttn" 
            value="Login" 
            onClick={this.login}
          />
          </form>
          </div>  

      </div>
    );
  }
}

export default LoginAgain2;