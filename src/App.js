import { Routes, Route } from "react-router-dom";
// import './App.css';
import { Home } from "./pages/Home";
// import { useEffect } from "react";
// import axios from "axios";
import { Details } from "./pages/Details";

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const App = () => {
  // const fetchData = () => {
  //   axios
  //     .get("/posts")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  );
};

export default App;
