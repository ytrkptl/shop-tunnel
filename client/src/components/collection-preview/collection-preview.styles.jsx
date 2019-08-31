import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }

  @media screen and (max-width: 550px) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-gap: 10px;

  @media screen and (max-width: 550px) {
    grid-template-columns: 6fr 6fr;
    grid-template-rows: 6fr 6fr;
  }
`;