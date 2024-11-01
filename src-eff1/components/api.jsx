import React, { useState, useEffect } from "ract";
import axios from "axios";

const Api = () => {
  const [salaries, setSlaries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/salaries")
      .then((response) => {
        setSlaries(response.data);
      })
      .catch((error) => error);
  },[]);
  return (
    <>
      {salaries}
    </>
  );
};

export default Api;
