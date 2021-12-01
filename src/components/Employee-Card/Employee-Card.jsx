import React from "react";
import "./Employee-Card.scss";
import team from "../../data/data";

const EmployeeCard = () => {
  return team.map((props) => (
    <div className="name__and__role">
      <h4 className="name">Name: {props.name}</h4>
      <h5 className="role">Role: {props.role}</h5>
      <div class="counter">
        <p class="counter__score">0</p>
        <div id="buttons">
          <button class="button__minus">-</button>
          <button class="button__plus">+</button>
        </div>
      </div>
    </div>
  ));
};

export default EmployeeCard;
