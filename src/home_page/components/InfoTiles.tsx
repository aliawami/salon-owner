
import { Card } from 'react-bootstrap'

const InfoTiles = () => {
  return (
    <div>
      <Card>
        <div className="card-body">
          <h5 className="card-title">Reservation Count</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          <div className="d-inline-flex align-items-baseline">
            <span className="fw-bold fs-2">5</span>
            <span className="fs-2">/</span>
            <span className="fw-light fs-5">3</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default InfoTiles
