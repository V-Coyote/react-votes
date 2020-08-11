import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  p:first-child {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
  }

  img {
    width: 104px;
    height: 104px;
    margin-right: 12px;
    align-self: center;

    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
