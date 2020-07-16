import React, { Fragment } from "react";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      id
      flight_number
      name
      date_local
      success
    }
  }
`;

export default function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {data.launches.map((launch) => {
        return (
          <LaunchItem key={launch.flight_number} launch={launch}></LaunchItem>
        );
      })}
    </Fragment>
  );
}
