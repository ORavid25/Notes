import React, { Component } from "react";
import { withRouter , Link } from "react-router-dom/cjs/react-router-dom.min";
import { TextField , Button } from "@material-ui/core"

class CCMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:"",
    description:""    
    };
  }


changeTitle=(e)=>{
    this.setState({title: e.target.value})
}

changeDesc=(e)=>{
    this.setState({description: e.target.value})
}


 onClick=()=>{
  this.props.addNote({description:this.state.description,title:this.state.title})
 }

  render() {
    return (
      <div>
        <h2>Add Notes Page</h2>
        <div className="box">
            <TextField label="Title" onChange={this.changeTitle}/> <br/><br/>
            <TextField label="Description" placeholder="Enter your description" style={{width: '25ch'}} onChange={this.changeDesc}/> <br/><br/>
            <Button color="primary" variant="outlined" size="large" onClick={this.onClick}>Add Note</Button> <br/><br/>
            <Link to="/notes">Go to notes page</Link>
        </div>
      </div>
    );
  }
}
export default withRouter(CCMain);
