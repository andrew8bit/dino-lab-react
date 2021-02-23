import './App.css';
import Comments from './Comments';

function App() {
  // name store variables before return statement 
  const post = {
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurus',
    body: 'Check out this body property!'
  }

  return (
    <div className="App">
      {/* { can use variables with curley braces } */}
      <h1>{post.title}</h1>
      <p>by {post.author}</p>
      <p>{post.body}</p>
      <h2> Comments: </h2>
      <Comments />

    </div>
  );
}

export default App;
