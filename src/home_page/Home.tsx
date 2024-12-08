import InfoTiles from "./components/InfoTiles";

const Home = () => {
  return (
    <>
      <div className="container px-4 text-center my-5">
        <div className="row gx-5">
          <div className="col">
            <InfoTiles />
          </div>
          <div className="col">
            <InfoTiles />
          </div>
          <div className="col">
            <InfoTiles />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-dark table-striped align-middle caption-top">
            <caption>Todays Schedual</caption>
            <thead>
              <tr>
                <th className="col-md-2">Customer</th>
                <th className="col-md-6">Services</th>
                <th className="col-md-1">Time</th>
                <th className="col-md-1">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Zahra</th>
                <td>Hair cut</td>
                <td>8:14 PM</td>
                <td>Completed</td>
              </tr>
              <tr>
                <th scope="row">Zahra Hussain</th>
                <td>Hair cut</td>
                <td>8:14 PM</td>
                <td>Completed</td>
              </tr>
              <tr>
                <th scope="row">Fatimah Mohammed</th>
                <td>Hair style</td>
                <td>9:55 PM</td>
                <td>Coming</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
