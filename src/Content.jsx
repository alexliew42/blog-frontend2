import {PostsIndex} from "./PostsIndex.jsx"
import axios from "axios"
import {useState, useEffect} from "react"
import {Modal} from "./Modal.jsx"
import {PostsShow} from "./PostsShow.jsx"

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
 
  const handleIndexPosts = () => {
    console.log("handleIndexPosts")
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data)
      setPosts(response.data)
    })
  }
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post)
  }


  const handleClose = () => {
    setIsPostsShowVisible(false);
  }

  useEffect(handleIndexPosts, [])
  return (
    <div>
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost}/>
      </Modal>
    </div>
  )
}