import React, { Component } from 'react';


class FormComponent extends Component{

    constructor(props){
        super(props);
        console.log("this is contructor");
        this.state={
            userNameInput : "",
            test:""
        };

    }
    componentWillMount(){
        console.log("componentWillMount");
      }
      componentDidMount(){
        console.log("componentDidMount");
    
      }
      componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
    
      }
      shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        return false;
    
      }
      componentWillUpdate(){
        console.log("componentWillUpdate");
    
      }
      componentDidUpdate(){
        console.log("componentDidUpdate");
    
      }
      componentWillUnmount(){
        console.log("componentWillUnmount");
    
      }
    handleChange = (event)=>{
        this.setState({
            userNameInput: event.target.value,
            test: event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.addUser(this.state.userNameInput);

    }
    render(){
        var {userNameInput} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={userNameInput} onChange={this.handleChange} placeholder="enter username"/>
                <input type="submit" value ="Add to list" />
            </form>
        )
    }
}


export default FormComponent;