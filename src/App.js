import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleCreateNewPost = () => {
    // Create a new blog post.
    const newPost = {
      title: this.state.title,
      body: this.state.body,
    };
    this.setState({ posts: [...this.state.posts, newPost] });
  };

  handleDeletePost = (id) => {
    // Get the post object.
    const posts = this.state.posts.filter((post) => post.id !== id);
    this.setState({ posts });
  };

  handleSortPosts = (sortType) => {
    const sortedPosts = [...this.state.posts];
    if (sortType === "date") {
      sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortType === "title") {
      sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
    }
    this.setState({ posts: sortedPosts });
  };

  render() {
    return (
      <div>
        <h1>Auctopus Intern Assignment Posts</h1>
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-outline-primary mr-3"
            onClick={() => this.handleSortPosts("date")}
          >
            Sort by Date
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => this.handleSortPosts("title")}
          >
            Sort by Title
          </button>
        </div>

        <div className="container">
          <div className="row">
            {this.state.posts.map((post) => (
              <div className="col-md-4 mb-4">
                <div className="card card-sm">
                  <div className="card-body">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => this.handleDeletePost(post.id)}>
                      Delete Post
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Create New Blog Post</h2>
              <div class="form-group">
                <label for="title">Title</label>

                <textarea
                  type="textarea"
                  class="form-control"
                  id="title"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                  placeholder="Title"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="body">Body</label>
                <textarea
                  class="form-control"
                  id="body"
                  rows="10"
                  placeholder="Body"
                  onChange={(e) => this.setState({ body: e.target.value })}
                ></textarea>
              </div>
              <button onClick={this.handleCreateNewPost}>
                Create New Blog Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
