import React from "react";

export const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};
