import { useEffect, useState } from "react";

export const useFetchBlog = (url,path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(null);
  const [images, setImages] = useState({})

  useEffect(() => {
    

    const fetchBlog = async () => {
      setLoding(true);
      try {
        const data = await fetch(url+path);
        const res = await data.json();
        const id = await res.data[0].id
        const resImag = await fetch(`https://strapi-production-935c.up.railway.app/api/blogs/${id}?populate=*`);
        const images = await resImag.json()
  

        setImages(images)
        setData(res);
        setLoding(false);
      } catch (error) {
        setError(error);
        setLoding(false);
      }
    };
    fetchBlog();
  }, [url, path]);
  return { data, loading, error , images};
};
