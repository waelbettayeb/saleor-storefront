import { media, styled } from "@styles";
import { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  min-height: 140px;
  max-height: min-content;
  width: 100%;
  grid-template-areas:
    "photo description unitPrice quantity totalPrice trash"
    ". description . . . .";
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 0.5fr;
  align-items: center;
  ${media.smallScreen`
    grid-template-columns: 1fr 2fr 2fr;
    grid-row-gap: 15px;
    grid-column-gap: 20px;
    grid-template-areas: "photo description description"
    "trash description description"
    ". unitPrice quantity"
    ". . totalPrice";
  `};
`;

export const QuantityButtons = styled.div<{ processing: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0 15px 0 0;
  width: 50px;

  > div {
    display: flex;
  }

  svg {
    cursor: ${props => (props.processing ? css`progress` : css`pointer`)};
    justify-self: center;
  }
`;

export const Photo = styled.div`
  grid-area: photo;
  display: flex;
  align-items: flex-start;
  align-self: top;
  width: 70px;
  height: 90px;

  background-color: #f1f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Description = styled.div`
  grid-area: description;
  height: 100%;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Sku = styled.p`
  margin: 6px 0;
  text-align: left;
  margin-bottom: 10px;
`;

export const Attributes = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fit, minmax(166px, 500px));
  margin-left: -15px;
  ${media.smallScreen`
    flex-flow: column;
  `};
`;

export const SingleAttribute = styled.p`
  margin: 0;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  background-color: white;
  padding: 0px 15px;
`;

export const Name = styled.p`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  font-size: ${props => props.theme.typography.h4FontSize};
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const LightFont = styled.span`
  font-size: ${props => props.theme.typography.smallFontSize};
  color: rgba(125, 125, 125, 0.6);
`;

export const Price = styled.div`
  font-size: ${props => props.theme.typography.h4FontSize};
  display: flex;
  justify-content: center;
  font-weight: bold;
  ${media.smallScreen`
    font-weight: normal;
    flex-direction: column;
  `}

  p {
    margin: 0;
  }
`;

export const PriceLabel = styled.p`
  display: none;
  ${media.smallScreen`
    display: block;
  `}
`;

export const TotalPrice = styled(Price)`
  grid-area: totalPrice;
`;

export const Trash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: trash;
`;

export const UnitPrice = styled(Price)`
  grid-area: unitPrice;
`;

export const Quantity = styled.div`
  grid-area: quantity;
  min-width: 120px;
  margin: 0 15px;
`;