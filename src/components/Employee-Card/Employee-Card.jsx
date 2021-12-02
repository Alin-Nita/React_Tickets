import React from "react";
import "./Employee-Card.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = (props) => {
  const { peopleArray } = props;
  console.log(peopleArray);

  const EmployeesCards = peopleArray.map((employee) => {
    return (
      <div className="name__and__role">
        <h4 className="name">Name: {employee.name}</h4>
        <h5 className="role">Role: {employee.role}</h5>
        <Counter />
      </div>
    );
  });
  return <>{EmployeesCards}</>;
};

export default EmployeeCard;
