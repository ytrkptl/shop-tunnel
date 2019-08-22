import styled from 'styled-components';
// import Logo2 from '../../assets/Shop10.png';
// import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  background-color: beige;
  position: absolute;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-template-rows: 200px;
  margin-top: 20px;
  border-top: 1px solid saddlebrown;

  @media screen and (max-width: 550px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;

export const FooterColumn = styled.div`
  padding: 10%;
  overflow: hidden;

  @media screen and (max-width: 550px) {
    padding: 2%;
  }
  
`;
// replace with Link later
// export const FooterLink = styled(Link)`
export const FooterLink = styled.span`
  cursor: pointer;
  display: block;
  padding-left: 10%;
  padding-right: 10%;
`;