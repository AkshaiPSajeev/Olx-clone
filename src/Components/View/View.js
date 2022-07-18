import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
const [userDetails,setUserDetails]=useState('');
const {postDetails}=useContext(PostContext);
const {firebase}=useContext(FirebaseContext)
console.log(postDetails)
useEffect(()=>{
  const {userId}=postDetails;
  firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
    res.array.forEach(doc => {
      setUserDetails(doc.data())
    });
  })

})
return (
  <div className="viewParentDiv">
    <div className="imageShowDiv">
      <img
        src={postDetails.url}
        alt="No URL"
      />
    </div>
    <div className="rightSection">
      <div className="productDetails">
        <p>&#x20B9; {postDetails.price} </p>
        <span>{postDetails.name}</span>
        <p>{postDetails.category}</p>
        <span>{postDetails.createdAt}</span>
      </div>
     { userDetails&&<div className="contactDetails">
        <p>Seller details</p>
        <p>{userDetails.username}</p>
        <p>{userDetails.mobile}</p>
      </div>} 
    </div>
  </div>
);
}
export default View;