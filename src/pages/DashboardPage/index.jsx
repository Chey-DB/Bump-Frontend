import React from "react";
import "./styles.css";
import MotivationalQuote from "../../components/MotivationalQuote";
import ProgressBar from "../../components/ProgressBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const user = {
    dueDate: new Date("2023-12-31"),
    currentWeek: 18,
  };

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/logout");
      if (response.status === 200) {
        navigate("/login");
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    } catch (err) {
      console.error("An error occurred while trying to log out:", err);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Dashboard Page</h1>
        <h2>This is something</h2>
        <br />
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste,
          fugiat neque quod ipsa error alias totam dolorum sapiente explicabo?
        </h3>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
          quaerat cumque et id sapiente accusantium commodi earum cupiditate
          exercitationem impedit veritatis natus pariatur repellendus odit
          nostrum at aut aspernatur. Perferendis!
        </p>
        <div className="button-div">
          <button>Press Me</button>
          <button onClick={logout}>logout</button>
        </div>
        <div>
          <MotivationalQuote />
        </div>
        <div>
          <ProgressBar dueDate={user.dueDate} currentWeek={user.currentWeek} />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
