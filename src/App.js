import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom';
import CCLogin from './ClassComponents/CCLogin';
import CCMain from './ClassComponents/CCMain'
import CCRegister from './ClassComponents/CCRegister';
import React from 'react';
import FCNotes from './FunctionalComponent/FCNotes';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users:[],
      notes:[],
      currentUser:null,
      userMessage:""
    }
  }

addUser=(user)=>{
    let newArray = [...this.state.users,user]
    this.setState({users : newArray});
    this.props.history.push('/')
}

userLogIn=(user)=>{
    let userCheck = this.state.users.find(userToCheck => userToCheck.email === user.email&&userToCheck.password === user.password);
   if(userCheck){
      this.setState({currentUser:user,userMessage:`Welcome ${user.email},lets add some notes!`}  );
      setTimeout(() => {
       this.props.history.push('/main');
      }, 3000);
    }
  
  
}

addNote=(note)=>{
    let arr = this.state.notes;
    arr.push(note)
    this.setState({notes : arr} );
}
removeNote=(index)=>{
  let arr = this.state.notes.filter((n,i)=> i !== index );
  
    this.setState({notes : arr} );
}

  render(){
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/" render={()=><CCLogin users={this.state.users} userLogIn={this.userLogIn} userMessage={this.state.userMessage}/>}/>
          <Route path="/register" render={()=> <CCRegister addUser={this.addUser}  userMessage={this.state.userMessage}/>}/>
          <Route path='/main' render={()=><CCMain addNote={this.addNote} />}/>
          <Route path='/notes' render={()=><FCNotes notes={this.state.notes} removeNote={this.removeNote}/>}/>
        </Switch>
      </div>
    </div>
  );
}
}

export default withRouter(App);
