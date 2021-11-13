import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 4px;
  align-items: center;
  width: 500px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 5px 6px 0;
`;


export const Button = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 4px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #E64A19;
  }
`;
