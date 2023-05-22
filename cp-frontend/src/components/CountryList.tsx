import React from "react";
import { useQuery, gql } from "@apollo/client";

const COUNTRY_QUERY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      countries {
        name
      }
    }
  }
`;

interface CountryListProps {
  continentCode: string;
}

const CountryList: React.FC<CountryListProps> = ({ continentCode }) => {
  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { code: continentCode },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="title">Country List</h2>
      <div className="countryContainer">
        {data.continent.countries.map((country: { name: string }) => (
          <div className="countryCard" key={country.name}>
            {country.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
