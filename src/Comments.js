
function Comments() {
    // name store variables before return statement 
    const post = [
      'First!',
      "Great post",
      "Hire this author now"
    ]
  
    return (
      <p> {post[0]} </p>
    );
  }
  
  export default Comments;