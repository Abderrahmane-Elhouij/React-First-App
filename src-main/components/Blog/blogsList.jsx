import { Link } from "react-router-dom";
const BlogsList = ({ title, blogs }) => {
  // const title = props.title;
  // const blogs= props.blogs;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">{title}</h2>
          {blogs.map((blog) => (
            <div key={blog.id} className="card mb-3">
              <div className="card-body">
                <Link to={`/blogs/${blog.id}`}>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">Written by {blog.author}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
