
export function PostsShow(props) {
  return(
    <div>
      {console.log(props)}
      <h1>title: {props.post.title}</h1>
      <p>id: {props.post.id}</p>
      <img src={props.post.image}/>
      <p>body: {props.post.body}</p>
      <button>Purchase Here</button>
    </div>
  
  )
}