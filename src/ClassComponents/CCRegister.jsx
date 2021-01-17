import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core/';
import { withRouter, Link } from 'react-router-dom/cjs/react-router-dom.min';


class CCRegister extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            confirmPassword:''    
        };
    }

    insertEmail=(e)=>{
        this.setState({email: e.target.value})
    }

    insertPassword=(e)=>{
        this.setState({password: e.target.value})
    }

    insertconfirmPassword=(e)=>{
       this.setState({confirmPassword:e.target.value})
    }

    userRegister = () =>{
       if(this.state.email !== ''){
           if(this.state.password === this.state.confirmPassword&&this.state.password!==''){
                this.props.addUser(
                    {email:this.state.email,
                    password:this.state.password})
           }
           else{
               alert(
                   "Invalid Password"
               )
           }
       }
       else{
           alert('Email is empty')
       }
    }



    render() {
        return (
            <div>
                <h2>Register Page</h2>
                <div className="box">
                    <TextField label="Email" onChange={this.insertEmail}/> <br/><br/>
                    <TextField label="Password" type="password" onChange={this.insertPassword}/><br/><br/>
                    <TextField label="Confirm Password" type="password" onChange={this.insertconfirmPassword}/><br/><br/>
                    <Button color="primary" variant="outlined" size="large" onClick={this.userRegister}>Sign up</Button> <br/><br/>
                    {this.props.userMessage}
                </div><br/>
                <Link to="/login">Already have account? Login here !</Link>
            </div>
        )
    }
}
export default withRouter(CCRegister)