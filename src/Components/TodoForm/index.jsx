import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};
function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    //   prevent reloading browser
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);

    // reset form value
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleValueChange} type="text" value={value} />
    </form>
  );
}

export default TodoForm;
