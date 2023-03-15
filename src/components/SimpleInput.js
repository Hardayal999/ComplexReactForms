import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const userInput = useRef("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // Validation with the state

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    } /*Here we're checking if the enteredName is empty if it is empty we just return  */
    setEnteredNameIsValid(true);
    const enteredValue = userInput.current.value;
    console.log(enteredValue);
    userInput.current.value = "";

    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control-invalid";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={userInput}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
