import useInputForm from "../hooks/use-input-form";

const BasicForm = (props) => {
  const {
    value: enteredName,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
    reset: nameReset,
  } = useInputForm((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    reset: lastNameReset,
  } = useInputForm((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: emailReset,
  } = useInputForm((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("submitted");
    console.log(enteredName, enteredLastName, enteredEmail);
    nameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && <p>Must not be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p>Must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p>Must not be empty and it should include "@" symbol in it</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
