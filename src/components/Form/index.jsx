import React, { useState } from 'react';

import { Container, Button } from './styles';
import Input from '../FormInput';


function Form() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username'
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email'
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password'
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Repeat Password',
      label: 'Repeat Password'
    }
  ]

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);
  return (
    <Container action="">
      <h1>Register</h1>
      {inputs.map((input) => (
        <Input 
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={handleChange}/>
      ))}
      <Button >Submit</Button>
    </Container>
    
  );
}

export default Form;