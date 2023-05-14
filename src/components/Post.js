import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <li>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/posts${post.id}`}>Read More</Link>
      </li>
    );
  }
}

export default Post;
