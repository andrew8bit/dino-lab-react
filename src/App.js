import './App.css';

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
    </div>
  );
}

export default App;
