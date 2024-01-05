import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 720px) {
    width: 80vw;
  }
  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;
