import React from "react";
const FormField = () => {
  return (
    <div>
      <form>
        <div>
          <h3>particepent</h3>
          <input type="text" placeholder="your Name"></input>
        </div>
        <div>
          <h3> who would be the star of the tournument</h3>
          <input type="text" placeholder="star of the tournament"></input>
          <h3> who would be the top scorer</h3>
          <input type="text" placeholder="Goal King"></input>
          <h3> who would be the top assister </h3>
          <input type="text" placeholder="assits demon"></input>
        </div>
      </form>
    </div>
  );
};
export default FormField;
