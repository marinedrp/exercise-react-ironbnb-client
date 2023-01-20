import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export function ApartmentDetails({ apartmentsList }) {
  const { apartmentId } = useParams();

  const details = apartmentsList.find((apartmentDetails) => {
    return apartmentDetails._id == apartmentId;
  });

  return (
    <div>
      <h1>Apartment Details</h1>
      <Container>
        <img src={details.img}></img>
        <h2>{details.title}</h2>
        <h2>Price per day: {currencyFormatter.format(details.pricePerDay)}</h2>
      </Container>
    </div>
  );
}
