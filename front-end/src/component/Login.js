import React, { Component } from 'react';
import '../styles/login.scss';
import pplDancing from '../assets/ppl-dancing.svg';
export default class Login extends Component{

  login = () => {
    const my_client_id = 'df1b151174ac40db981ad60c6f4e5c3c';
    const redirect_uri = 'https://muze-musicapp.netlify.app/result';

    var scopes = 'user-read-private user-read-email user-top-read user-read-recently-played';
    window.location.href = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&show_dialog=true' + 
      '&redirect_uri=' + encodeURIComponent(redirect_uri);
  }

  render(){
    return(
      <div className='login'>
        <h1>Welcome to Muze</h1>
        <img src={pplDancing} alt='ppl-dancing'/>
        <p>Login to your Spotify and we will let you know which music type you are!</p>
        <button onClick={this.login}>Login to Spotify</button>
      </div>
    )
  }
}