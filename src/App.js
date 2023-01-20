import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { CreateApartment } from "./components/CreateApartment";
import { ApartmentsList } from "./components/ApartmentsList";
import { ApartmentDetails } from "./components/ApartmentDetails";
import { Route, Routes } from "react-router-dom";

function App() {

  const [apartmentsList, setApartmentsList] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL)
    .then(response => {
      console.log("Response from the API: ", response.data)
      setApartmentsList(response.data)
    })
    .catch((error) => {
      console.log("Error getting the data from the API: ", error)
    })
  }, []);


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/apartments" element={<ApartmentsList apartmentsList={apartmentsList} />}></Route>
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails apartmentsList={apartmentsList} />}></Route>
        <Route path="/apartments/create" element={<CreateApartment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
