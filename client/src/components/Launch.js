import React, { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($id: String!) {
    launch(id: $id) {
      flight_number
      name
      success
      date_local
      rocket
    }
  }
`;

export default function Launch(props) {
  let { id } = props.match.params;
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id },
  });

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  const { name, flight_number, success, rocket, date_local } = data.launch;

  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission:</span>
        {data.launch.name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Flight Number: {flight_number}</li>
        <li className="list-group-item">
          Launch Successful:{" "}
          <span
            className={classNames({
              "text-success": success,
              "text-danger": !success,
            })}
          >
            {success ? "Yes" : "No"}
          </span>
        </li>
      </ul>
      <hr />
      <Link to="/" className="btn btn-secondary">
        Back
      </Link>
    </div>
  );
}
