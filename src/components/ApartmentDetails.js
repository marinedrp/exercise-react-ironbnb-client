import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export function ApartmentDetails({ apartmentsList }) {
  const { apartmentId } = useParams();
  const navigate = useNavigate();

  const details = apartmentsList.find((apartmentDetails) => {
    return apartmentDetails._id == apartmentId;
  });

  console.log("Details from this apartment: ", details);

  return (
    <div>
      <h1>Apartment Details</h1>
      <Container>
        <img src={details.img}></img>
        <h2>{details.title}</h2>
        <h2>Price per day: {details.pricePerDay}</h2>
      </Container>
    </div>
  );
}
