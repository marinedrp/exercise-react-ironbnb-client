import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export function ApartmentsList({apartmentsList}) {

  return (
    <div>
        <h1>List of apartments</h1>
        {apartmentsList.map(apartment => {
            return (
                <div className="d-flex justify-content-center">
                <Card className="mb-3 mt-3" style={{ width: '18rem' }}>
                    <img src={apartment.img}></img>
                    <h2>{apartment.title}</h2>
                    <Link to={"/apartments/" + apartment._id}>More Details</Link>
                </Card>
                </div>
            )
        })}
    </div>
  )
}
