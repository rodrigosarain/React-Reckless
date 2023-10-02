import { useEffect } from "react";
import { useState } from "react";

const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const tarea = fetch("https://jsonplaceholder.typicode.com/albums");
    tarea
      .then((res) => res.json())
      .then((res) => setAlbums(res))
      .catch((err) => console.log(err));
  }, []);

  console.log({ albums });

  return <div>FetchingData</div>;
};

export default FetchingData;
