import React from "react";
const FormField = ({ formField, handleChange }) => {
  return (
    <div>
      <form>
        <div>
          <h3>particepent</h3>
          <input
            value={FormField.name}
            name={name}
            type="text"
            placeholder="your Name"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <h3> who would be the star of the tournument</h3>
          <input
            value={FormField.star}
            name={star}
            type="text"
            placeholder="star of the tournament"
            onChange={handleChange}
          ></input>
          <h3> who would be the top scorer</h3>
          <input
            value={FormField.goalKing}
            name={goalKing}
            type="text"
            placeholder="Goal King"
            onChange={handleChange}
          ></input>
          <h3> who would be the top assister </h3>
          <input
            value={FormField.assistDemon}
            name={assistDemon}
            type="text"
            placeholder="assits demon"
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </div>
  );
};
export default FormField;
