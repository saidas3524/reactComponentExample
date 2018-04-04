import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from "./UserComponent";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor(props){
    super(props);

    this.state={
        users : []
        
    };

}
   
  ;
  addUser = (name)=>{
    console.log(name);
    var user  = {
      "login": "saidas3524",
      "id": 10805016,
      "avatar_url": "https://avatars2.githubusercontent.com/u/10805016?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/saidas3524",
      "html_url": "https://github.com/saidas3524",
      "followers_url": "https://api.github.com/users/saidas3524/followers",
      "following_url": "https://api.github.com/users/saidas3524/following{/other_user}",
      "gists_url": "https://api.github.com/users/saidas3524/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/saidas3524/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/saidas3524/subscriptions",
      "organizations_url": "https://api.github.com/users/saidas3524/orgs",
      "repos_url": "https://api.github.com/users/saidas3524/repos",
      "events_url": "https://api.github.com/users/saidas3524/events{/privacy}",
      "received_events_url": "https://api.github.com/users/saidas3524/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Sai Krishna",
      "company": "Microsoft",
      "blog": "",
      "location": "Hyderabad",
      "email": null,
      "hireable": null,
      "bio": null,
      "public_repos": 15,
      "public_gists": 0,
      "followers": 0,
      "following": 0,
      "created_at": "2015-02-02T05:12:27Z",
      "updated_at": "2018-04-02T23:00:06Z"
    };
    let newUserlist = this.state.users;
    newUserlist.push(user);
    this.setState({
      users: newUserlist
    })
  }
  render() {
    var {users} = this.state;
    return (
      <div className="App">
        <FormComponent addUser = {this.addUser} users={users}/>
        {users.map((user)=>        <UserComponent {...user}/>)}
      </div>
    );
  }
}

export default App;
