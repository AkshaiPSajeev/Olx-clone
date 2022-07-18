import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom'
import './Signup.css';


export default function Signup() {
  const history=useHistory()
  const [Username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const {firebase}=useContext(FirebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result);
      result.user.updateProfile({displayName:Username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:Username,
          phone:phone

        }).then(()=>{
          console.log('*********');
            history.push('/login')
        })

      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt={'ghgh'}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={Username}
            onChange={(e)=>{setUsername(e.target.value)}}
            type="text"
            id="fname"
            name="name"
          
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            id="email"
            name="email"
           
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            type="number"
            id="phone"
            name="phone"
            
          />
          <br />
          <label htmlFor="phone">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            id="password"
            name="password"
           
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
