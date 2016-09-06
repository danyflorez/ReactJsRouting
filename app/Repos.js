import React, { Component } from 'react';
import {Link,hashHistory} from 'react-router'

class Repos extends Component {

  constructor(){
    super(...arguments);
    this.state = {
      repositories: []
    };
  }

  componentDidMount(){

    console.log('componentDidMount from Repos')

    fetch('https://api.github.com/users/pro-react/repos')
    .then((response) => {
      if(reponse.ok){
        return response.json();
      }else{
        throw new Error('Server error wasnt ok');
      }
    })
    .then((responseData) => {
      this.setState({repositories:responseData});
    })
    .catch((error) => {
      this.props.history.push(null, '/Error');
    });
  }


  render() {
    let repos = this.state.repositories.map((repo) => (
      <li key={repo.id}>
        <Link to={"/repo/"+repo.name}>{repo.name}</Link>
      </li>
    ));

    let child = this.props.children && React.cloneElement(this.props.children, {repositories: this.state.repositories});

    return (
      <div>
        <h1>Github Repos</h1>
        <ul>
          {repos}
        </ul>
        {child}
      </div>
    );
  }
}

export default Repos;
