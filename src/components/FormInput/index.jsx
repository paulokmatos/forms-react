import React from 'react';

import { Input } from './styles';

function FormInput(props) {
  const {id, label, onChange, ...InputProps } = props
  return (
  <Input>
    <label>{label}</label>
    <input {...InputProps} onChange={onChange}/>
  </Input>
  );
}

export default FormInput;