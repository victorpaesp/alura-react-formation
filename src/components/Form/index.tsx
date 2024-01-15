import React from "react";
import "./style.scss";
import Button from "../Button";

class Form extends React.Component {
  render() {
    return (
      <form className="newTask">
        <div className="inputContainer">
          <label>Add new study</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div className="inputContainer">
          <label>Time</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <div className="inputContainer">
          <Button />
        </div>
      </form>
    );
  }
}

export default Form;
