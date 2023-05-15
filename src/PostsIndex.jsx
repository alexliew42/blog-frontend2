export function PostsIndex(props) {
  return(
    <div>
      {props.posts.map((post) => (
        <div key= {post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <img src={post.image} />
          <br/>
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))}
      <p>This is Index and should be part of content.</p>
    </div>
  )
}