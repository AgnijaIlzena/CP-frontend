import React from "react";
import { useQuery, gql } from "@apollo/client";
import ContinentCard from "./ContinentCard";
import { useNavigate } from "react-router-dom";

const CONTINENT_QUERY = gql`
  query {
    continents {
      code
      name
    }
  }
`;

const ContinentList: React.FC = () => {
  const { loading, error, data } = useQuery(CONTINENT_QUERY);
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/countries`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h2 className="title">Continents</h2>
      <div className="continentList">
        {data.continents.map((continent: { code: string; name: string }) => (
          <div key={continent.code}>
            <ContinentCard
              handleCardClick={handleCardClick}
              name={continent.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentList;
