import {FormInputLabel,Input,Group} from "./form-input.styles";

//this is a generalised form input component

const FormInput = ({ label, inputOptions }) => {
  // console.log(inputOptions);
  //   inputOptions contains the data related to input fields
  return (
    <Group>
      <Input {...inputOptions} />

      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
