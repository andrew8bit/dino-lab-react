
function Comments() {
    // name store variables before return statement 
    const post = {
  
    }
  
    return (
      <div className="App">
        {/* { can use variables with curley braces } */}
        <h1>{post.title}</h1>
        <p>by {post.author}</p>
        <p>{post.body}</p>
      </div>
    );
  }
  
  export default App;