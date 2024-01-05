import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap:1fr;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 720px) {
    font-size: 16px;
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 720px) {
    width: 22%;
    padding-right: 10px;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  padding-right: 1rem;
  break-word: break-all;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  `;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;

  min-width: fit-content;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
