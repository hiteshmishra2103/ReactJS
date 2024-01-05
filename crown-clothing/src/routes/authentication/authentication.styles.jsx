import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
