import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import "./singlePost.css"
import axios from "axios"
import { useEffect, useState } from "react"






export default function SinglePost() {
  const location = useLocation()
 const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

useEffect(()=>{
  const getPost = async ()=>{
  const res =  await axios.get("/posts/"+path);
  setPost(res.data)
};
getPost();
},[path]);



  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo&&(
        <img src={post.photo} alt="" className="singlePostImg" />)}
     <h1 className="singlePostTitle">{post.title}
     <div className="singlePostEdit">
     <i className="singlePostIcon fa-solid fa-file-pen"></i>
     <i className="singlePostIcon fa-solid fa-trash"></i>
     </div>
     </h1>
     <div className="singlePostInfo"> 
     <span className="singlePostAuthor">Author:<b>{post.username}</b></span>
     <span className="singlePostDate">{new Date(post.createdAt).toDateString}</span>
     </div>
     <p className="singlePostDesc">

{post.desc}
     </p>
      </div>
    </div>
  )
}
