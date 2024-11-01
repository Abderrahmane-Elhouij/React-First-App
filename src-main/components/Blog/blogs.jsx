// npx json-server --watch data/db.json --port 8000
import useFetch from "./useFetch";
import BlogsList from "./blogsList";

const Blogs = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(" http://localhost:8000/blogs ");

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogsList blogs={blogs} title={"All Blogs"} />}
      <br />
    </>
  );
};

export default Blogs;
