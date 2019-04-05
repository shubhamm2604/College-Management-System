import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import student from './student.png';
import faculty from './faculty.png';
import './Home.css';

class Home extends Component {

  constructor() {
    super();
    this.state = {
     stud: false,
     facult: false,
     logout: false
     };

     this.student = this.student.bind(this);
     this.faculty = this.faculty.bind(this);
     this.logout = this.logout.bind(this);

    }

  student(){
      this.setState({stud: true});
      console.log(this.state);
    }

  faculty(){
      this.setState({facult: true});
      console.log(this.state);
    }

  logout(){
      this.setState({logout: true});
      console.log(this.state);
    }

  render() {

    if(this.state.logout){
      return (<Redirect to={'/'} />)
    }

    if(this.state.stud){
      return (<Redirect to={'/student'} />)
    }
    if(this.state.facult){
      return (<Redirect to={'/faculty'} />)
    }

    return (
    <div>
      <button className="logout" onClick={this.logout}>Logout</button>
        
        <input type="image" src={student}
        alt="Student_img" className="studbtn" value="Student" onClick={this.student}
        />
        
        <input type="image" src={faculty}
        alt="Faculty_img"  className="facultbtn" value="faculty" onClick={this.faculty}   
        />
        
    </div>
    );
  }
}

export default Home;