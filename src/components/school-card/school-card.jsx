import React from "react";

const SchoolCard = ({ data }) => {
  return (
    <div className="card">
      {
        /*Object.entries(data).map(kv => (
        <p>
          {kv[0]} : {kv[1]}
        </p>
      ))*/
        data.name
      }
    </div>
  );
};

export default SchoolCard;
