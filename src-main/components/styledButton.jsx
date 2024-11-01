import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "purple" : "lightgray")};
  }
`;

function MyComponent() {
  return (
    <>
      <h1>Welcome to My App</h1>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Secondary Button</StyledButton>
    </>
  );
}

export default MyComponent;
