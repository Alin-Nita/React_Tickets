import "./App.scss";
import team from "./data/data";
import EmployeeCard from "./components/Employee-Card/Employee-Card";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <EmployeeCard />
      </div>
    </>
  );
};

export default App;
