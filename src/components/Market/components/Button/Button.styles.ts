import styled from 'styled-components';

export const Outcome = styled.button`
  color: #5e8cf4;
  border: none;
  padding: 0.5em;
  min-width: 80px;
  border-radius: 0.5em;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #5e8cf4;
    /* background: rgb(225, 132, 73);
    background: linear-gradient(
      32deg,
      rgba(225, 132, 73, 1) 0%,
      rgba(177, 36, 224, 1) 35%,
      rgba(94, 140, 244, 1) 100%
    ); */
  }
  transition: all 0.5s ease;
`;
