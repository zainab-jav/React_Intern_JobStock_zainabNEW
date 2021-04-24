import React from "react";

function Post({ date, author, img, detail, header, comments,category }) {
  return (
    <article className="blog-news">
      <div className="short-blog">
        <figure className="img-holder">
          <a href="blog-detail.html">
            <img src={img} className="img-responsive" alt="News" />
          </a>
          <div className="blog-post-date">{date}</div>
        </figure>
        <div className="blog-content">
          <div className="post-meta">
            By: <span className="author">{author}</span> | {comments}{" "}
          </div>
          <a href="blog-detail.html">
            <h2>{header}</h2>
          </a>
          <div className="blog-text">
            <p>{detail}</p>
            <div className="post-meta">
              Filed Under:{" "}
              <span className="category">
                <a href="#">{category}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Post;
