import styled from 'styled-components';
// import Logo2 from '../../assets/Shop10.png';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px 10px 40px;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 20px;
  border-top: 1px solid saddlebrown;
`;

export const FooterTitle = styled.h3`
  display: block;
  margin-top: 0px;
  margin-bottom: 30px;
`;

export const FooterGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px 20px;
  padding-top: 0px;
  padding-bottom: 10px;
  grid-gap: 12px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLink = styled(Link)`
  text-align: left;
  display: block;
  line-height: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterAuthor = styled.p`
  font-size: 14px;
  width: 100%;
  border-top: 1px solid saddlebrown;
  padding-top: 20px;
  text-align: center;
`;