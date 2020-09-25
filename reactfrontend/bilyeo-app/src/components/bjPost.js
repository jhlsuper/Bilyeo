import React from "react";

const bjPost = (bjPost) => {
  const { id, title, content } = bjPost;
  return (
    <div className="boardLayout">
      <div className="id">{id}</div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default bjPost;