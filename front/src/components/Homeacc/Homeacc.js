import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Homeacc.css';
import student from './student.png';

class Homeacc extends Component {

  constructor() {
    super();
    this.state = {
     stud: false
     };

     this.student = this.student.bind(this);

    }

  student(){
      this.setState({stud: true});
      console.log(this.state);
    }

  render() {

    if(this.state.stud){
      return (<Redirect to={'/student'} />)
    }

    return (
    <div>
        
        <input type="image" src={student}
        alt="Student_img" className="stdimg" value="Student" onClick={this.student}
        />
        
    </div>
    );
  }
}

export default Homeacc;