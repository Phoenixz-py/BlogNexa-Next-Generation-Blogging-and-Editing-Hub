import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "./actions";
import Post from "./components/Post";

class Posts extends Component {
  state = {
    posts: [],
    isLoading: true,
  };

  componentDidMount() {
    this.props.getPosts().then(() => {
      this.setState({
        posts: this.props.posts,
        isLoading: false,
      });
    });
  }

  render() {
    const { posts, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);