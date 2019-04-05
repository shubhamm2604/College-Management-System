import React, { Component } from 'react';
import './SearchStud.css';
import {Redirect} from 'react-router-dom';

class Searchfacult extends Component {
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
        fetch('http://localhost:4001/Faculties', {
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
        return (<Redirect to={'/faculty'} />)
    }
        return (
        <div>  
            <button className="logout" onClick={this.back}>Back</button>

            <div>
            <table>
                <caption><h1><u>Faculty Details</u></h1></caption>
                    <thead>
                        <tr>
                            <th>Id No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Pin Code</th>
                            <th>Department</th>
                            <th>D.O.B.</th>
                            <th>Gender</th>
                            <th>Contact No.</th>
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
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}
export default Searchfacult;