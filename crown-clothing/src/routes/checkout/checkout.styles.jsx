import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 720px) {
    font-size: 12px;

  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 720px) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media screen and (max-width: 720px) {
    margin:auto;
    font-size: 24px;
  }
`;
