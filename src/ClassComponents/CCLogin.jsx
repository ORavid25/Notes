import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core/';
import { Link , withRouter} from 'react-router-dom';

class CCLogin extends Component {
constructor(props){
    super(props)
    this.state = {
        email:'',
        password:'',
    };

}
    changeEmail =(e) => {
        this.setState({ email: e.target.value })

    };

    changePass = (e) => {
        this.setState({ password: e.target.value })

    };

    loginButton=()=>{
    
        this.props.userLogIn({email:this.state.email,password:this.state.password});
    }


    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <div className="box">
                <TextField label="Email" onChange={this.changeEmail}></TextField> <br/><br/>
                <TextField label="Password" type="password" onChange={this.changePass}></TextField><br/><br/>
                <Button color="primary" variant="outlined" size="large" onClick={this.loginButton}>Sign in</Button> <br/><br/>
                {this.props.userMessage} 
                </div> <br/>
                <Link to="/register">Click here to register</Link>
            </div>
        )
    }
}

export default withRouter(CCLogin)

