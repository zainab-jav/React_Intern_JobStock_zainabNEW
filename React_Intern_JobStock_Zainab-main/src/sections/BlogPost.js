import React from "react";
import SideBar from "./SideBar";
import Post from "../components/Post";
import BlogPostData from "../data/blog/BlogPost"
import bannerImg from "../img/banner-10.jpg";
import Banner from "../components/Banner"
const BlogPost = () => {
 
  return (
    <>
      <Banner bgImg={bannerImg} title="Blog Page"/>
      <section className="section">
        <div className="container">
          <div className="row .no-mrg">
            {/* Start Blogs */}
            <div className="col-md-8">
              {BlogPostData.map((data) => {
                const { date, author, img, detail, title, commentsCount,category } = data;
                return (
                  <Post
                    key={date}
                    date={date}
                    author={author}
                    img={img}
                    detail={detail}
                    header={title}
                    comments={commentsCount}
                    category={category}
                  />
                );
              })}
            </div>
            {/* End Blogs */}
            {/* Sidebar Start */}
            <SideBar />
            {/* End Sidebar Start */}
          </div>
          <div className="row">
            <ul className="pagination">
              <li>
                <a href="#">«</a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-ellipsis-h" />
                </a>
              </li>
              <li>
                <a href="#">»</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer />
    </>
  );
};
export default BlogPost;
