import React from "react";
import "./learning.css";
function learning() {
  return (
    <div>
  
      <div className="learning_journey">
        <h1 className="learning_journey_heading">My Learning Journey</h1>
        <div className="learning_journey_main_card">
          <div className="learning_journey_discription_div">
          <p className="learning_journey_discription">
            <label>2024 :</label>
            <br />
            Started learning programming and web development fundamentals.
          </p>
          </div>
          <div className="learning_journey_discription_div">
          <p className="learning_journey_discription">
            <label>2025 :</label> <br />
            Focused on JavaScript and built multiple frontend projects.
          </p>
          </div>
          <div className="learning_journey_discription_div">
          <p className="learning_journey_discription">
            <label>2026 :</label> <br />
            Learning React and exploring full-stack development.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default learning;
