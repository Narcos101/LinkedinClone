import React, { useState,useEffect }from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move'

function Feed() {
    const user=useSelector(selectUser);
    const [input,setInput] = useState('');
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) =>({
                id:doc.id,
                data:doc.data(),
            }))
            )
          );
        }, []);

    const sendPost = (e) =>{
        e.preventDefault();

        db.collection("posts").add({
            name:user.displayName,
            description:user.email,
            message: input,
            photoUrl:user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    };


    return (
    <div className="feed">
        <div className="Feed__inputContainer">
            <div className="Feed__input">
            <CreateIcon />
            <form>
                <input value={ input } onChange={e =>{setInput(e.target.value)}} type="text" />
                <button onClick={sendPost} type="submit">Send</button>
            </form>
            </div>
            <div className="Feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video"/>
                <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event"/>
                <InputOption Icon={CalendarViewDayIcon} color="#7FC15E" title="Write article"/>
            </div>
        </div>
        <FlipMove>
        {posts.map(({ id,data:{ name ,description,message,photoUrl }}) =>{
            return (<Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />)    
        })}</FlipMove>
    </div>
    )
}

export default Feed
