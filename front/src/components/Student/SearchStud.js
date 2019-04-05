import React, { Component } from 'react';
import './SearchStud.css';
import {Redirect} from 'react-router-dom';

class SearchStud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false,
            users: []
        }

        this.back = this.back.bind(this);
    }

    back(){
        this.setState({back: true});
        console.log(this.state);
      }

    componentDidMount() {
        let self =this;
        fetch('http://localhost:4001/Students', {
        method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({users: data});
            console.log(data);
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

    render() {

    
    if(this.state.back){
        return (<Redirect to={'/student'} />)
    }


        return (
        <div>  
            <button className="logout" onClick={this.back}>Back</button>

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
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}
export default SearchStud;