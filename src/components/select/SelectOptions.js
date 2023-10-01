import React from "react";
import Select from "react-select";

function SelectOptions(props) {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Select {...props} onChange={onChange} options={props.options} isMulti />
    </>
  );
}

export default SelectOptions;
