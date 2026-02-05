import React from 'react';
import './PostCard.css';

const PostCard = ({ title, summary }) => {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
};

export default PostCard;