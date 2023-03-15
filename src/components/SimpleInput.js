import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const userInput = useRef("");
  // const [enteredName, setEnteredName] = useState("");

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const enteredValue = userInput.current.value;
    console.log(enteredValue);
    // console.log(enteredName);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={userInput}
          type="text"
          id="name"
          // value={enteredName}
          // onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
