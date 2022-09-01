import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Button = styled.button`
  background: #ffffff;
  border: 1px solid #ff4742;
  border-radius: 10px;
  color: #ff4742;
  cursor: pointer;
  font: inherit;
  max-width: 480px;
  overflow: hidden;
  padding: 4px 14px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  /* touch-action: manipulation; */
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: #ff4742;
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
