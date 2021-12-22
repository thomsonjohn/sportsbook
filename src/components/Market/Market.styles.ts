import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  padding: 1em;
  margin: 1em;
  position: relative;
  left: 1em;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TeamName = styled.p`
  font-size: 1em;
  color: #333;
  font-weight: 500;
  margin: 0.6em 0;
`;

export const Versus = styled.span`
  font-size: 1em;
  color: #a8a8a8;
  font-weight: 400;
  margin: 0 0.6em;
`;

export const Outcomes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
