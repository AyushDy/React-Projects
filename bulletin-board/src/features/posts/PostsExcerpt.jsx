import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";


let PostsExcerpt = ({ postId }) => {

  const post = useSelector(state=> selectPostById(state,postId));

  return (
    <article className="post">
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

PostsExcerpt = React.memo(PostsExcerpt);
export default PostsExcerpt;
