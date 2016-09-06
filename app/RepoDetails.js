import React, {Component} from 'react';
import 'whatwg-fetch';

class RepoDetails extends Component{
  constructor(){
    super(...arguments);
    this.state = {
      repository: {}
    };
  }

  fetchData(repo_name){
    fetch('https://api.github.com/repos/pro-react/'+ repo_name)
    .then((response) => response.json())
    .then((responseData) =>{
      this.setState({repository:responseData});
    });
  }

  componentDidMount(){

    console.log("componentDidMount of RepoDetails");

    let repo_name = this.props.params.repo_name;
    this.fetchData(repo_name);
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps of RepoDetails");

    let repo_name = nextProps.params.repo_name;
    this.fetchData(repo_name)
  }

  render() {
    let stars = [];
    for (var i = 0; i < this.state.repository.stargazers_count; i++) {
      stars.push('★');
    }
    return (
      <div>
        <h2>{this.state.repository.name}</h2>
        <p>{this.state.repository.description}</p>
        <span>{stars}</span>
      </div>
    );
  }
}

export default RepoDetails;
