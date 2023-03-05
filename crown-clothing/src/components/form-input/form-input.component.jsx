import "./form-input.styles.scss";

//this is a generalised form input component

const FormInput = ({ label, inputOptions }) => {
  console.log(inputOptions);
  //   inputOptions contains the data related to input fields
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />

      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
