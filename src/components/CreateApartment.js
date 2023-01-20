import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function CreateApartment() {
  const [title, setTitle] = useState("");
  const [pricePerDay, setPricePerDay] = useState(0);
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { img, pricePerDay, title };

    axios
      .post(process.env.REACT_APP_API_URL, body)
      .then(() => {
        setTitle("");
        setPricePerDay(0);
        setImg("");
        navigate("/apartments");
      })
      .catch((error) => {
        console.log("Error while creating a new apartment: ", error);
      });
  };

  return (
    <div>
      <h1>Create new apartment</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <label>Price per day</label>
        <input
          type="number"
          name="pricePerDay"
          value={pricePerDay}
          onChange={(e) => setPricePerDay(e.target.value)}
        />

        <br />
        <br />

        <label>Image</label>
        <input
          type="text"
          name="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
