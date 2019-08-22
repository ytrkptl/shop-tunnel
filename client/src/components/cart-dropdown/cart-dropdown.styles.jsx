import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  right: 0px;
  z-index: 5;
  margin-top: 58px;
  margin-right: 58px;

  @media screen and (max-width: 650px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 600px) {
    margin-right: 38px;
  }
  @media screen and (max-width: 350px) {
    margin-right: 18px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;