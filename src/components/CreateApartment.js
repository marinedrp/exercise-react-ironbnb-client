import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        <Form.Label>Price per day</Form.Label>
        <Form.Control
          type="number"
          name="pricePerDay"
          value={pricePerDay}
          onChange={(e) => setPricePerDay(e.target.value)}
        />


        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />



        </Form.Group>
        <Button variant="secondary" type="submit">Create</Button>
      </Form>
    </div>
  );
}
