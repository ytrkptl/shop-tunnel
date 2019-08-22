import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  // @media screen and (max-width: 350px) {
  //   height: 22vh;
  // }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  max-width: 100px;
  min-width: 0px;
  padding: 0;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 40px;
  // display: flex;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: 10fr 2fr;
  font-size: 18px;
  margin-bottom: 6px;

  @media screen and (max-width: 550px) {
      grid-template-columns: 9fr 3fr;
      grid-template-rows: 1fr;
    }
`;

export const NameContainer = styled.span`
  // margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PriceContainer = styled.span`
  text-align: right;
`;