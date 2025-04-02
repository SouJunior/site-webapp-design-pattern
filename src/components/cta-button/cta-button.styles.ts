import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.75rem 1.5rem;
  background-color: #0c2f87;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 999px;

  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #09256b;
  }
`;

export const ArrowIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
