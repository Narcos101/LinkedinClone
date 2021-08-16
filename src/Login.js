import React, { useEffect, useState } from 'react'
import { auth } from './firebase';
import './Login.css'
import { useDispatch } from 'react-redux';
import { login,logout } from './features/userSlice';

function Login() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [name , setName] = useState("");
    const [profilePic , setprofilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,
            }))
        }).catch((error) => alert(error))
    }


    useEffect(() =>{
        auth.onAuthStateChanged((userAuth) =>{
            if(userAuth){
                dispatch(
                    login({
                    email:userAuth.email,
                    uid:userAuth.uid,
                    displayName:userAuth.displayName,
                    photoUrl:userAuth.photoURL,
                })
                )
            }
            else{
                dispatch(logout());
            }
        })
    },[])
  

    const register = () =>{
        if(!name){
            alert('Please Enter a full name');
        }
        auth.createUserWithEmailAndPassword(email,password).then(userAuth=>{
            userAuth.user.updateProfile({displayName:name,photoURL:profilePic}).then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
    
                }));
            })
        }).catch((error) => alert(error.message))
    }

    
    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt="" />
        

        <form>
            <input value={name} onChange={(e) => setName(e.target.value)}placeholder="Full name required (if registering!)" type="text" />
            <input value={profilePic} onChange={(e) => setprofilePic(e.target.value)}placeholder='Profile Pic URL (optional)' type="text" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" />

            <button type='submit' onClick={loginToApp}>Sign In</button>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register!</span>
            </p>
        </form>
        </div>
    )
}

export default Login
