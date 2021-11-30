import React from "react";
import "./Employee-Card.scss";

const EmployeeCard = (props) => {
  return (
    <div class="name_and_role">
      <h4 className="name">Name:</h4>
      <h5 className="role">Role:</h5>
      <div class="counter">
        <p class="counter__score">0</p>
        <div id="buttons">
          <button class="button__minus">-</button>
          <button class="button__plus">+</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
