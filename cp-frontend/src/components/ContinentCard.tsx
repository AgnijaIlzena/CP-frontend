import React from "react";

interface IContinent {
  name: string;
  code?: string;
  handleCardClick(): void;
}

const ContinentCard: React.FC<IContinent> = ({ name, handleCardClick }) => {
  return (
    <div
      className="continentCard"
      onClick={() => {
        handleCardClick();
      }}
    >
      {name}
    </div>
  );
};

export default ContinentCard;
