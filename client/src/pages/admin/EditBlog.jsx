import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";

const EditBlog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();

  const [currentPost, setCurrentPost] = useState({});
  const fetchBlogData = async () => {
    const { data } = await axios.get(`/api/blog/${id}`);
    const result = data.blog;
    setCurrentPost(result);
  };

    const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [isPublished, setIsPublished] = useState(false);



  useEffect(() => {
    fetchBlogData();
  }, [id]);
  console.log(currentPost);
  
  useEffect(() => {
    if (currentPost.title) {
      setTitle(currentPost.title);
      setSubTitle(currentPost.subtitle);
      setCategory(currentPost.category);
      setIsPublished(currentPost.isPublished);
      setImage(currentPost.image);
    }
  }, [currentPost]);
  return (
    <>
      <h1>Edit Blog</h1>
    </>
  );
};

export default EditBlog;
