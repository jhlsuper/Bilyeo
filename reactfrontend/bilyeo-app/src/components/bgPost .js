import React from "react";

const bgPost = (bgPost) => {
  const { id, title, content, image } = bgPost;
  return (
    <div className="boardLayout">
      <div className="id">{user_id}</div>
      <div className="published">{date}</div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="image">{image}</div>
    </div>
  );
};

export default bgPost;