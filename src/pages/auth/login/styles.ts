import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex: 1;
  background: #f1f1f1;

  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  height: 500px;
  width: 70vw;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 6px;
  word-wrap: break-word;
`;

export const InfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 6px 0 0 6px;
  background: #052152;

  transform: translateX(+100%);
  z-index: 1000;
  transition: 1s;

  > img {
    width: 50%;
    height: 20%;
  }

  > div > p {
    color: #ffffff;
    text-align: center;
  }

  .welcome {
    font-size: 2.2rem;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
  }

  .satisfaction {
    font-size: 1rem;
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 100;

    margin-top: 8px;
  }

  .registerNow {
    font-size: 1rem;
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 100;

    margin-top: 8px;
  }

  button {
    padding: 16px;
    width: 100%;

    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #ddd;

    cursor: pointer;
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0 6px 6px 0;
  background: #fff;
  padding: 20px;

  transform: translateX(-100%);
  z-index: 900;
  transition: 1s;

  .title {
    font-size: 1rem;
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
  }

  .ant-form {
    width: 100%;
  }

  .ant-row {
    width: 100%;
    margin-top: 8px;

    > button {
      float: right;
    }
  }

  button {
    padding: 8px;
    width: 100%;
    background: #052152;
    color: #ffffff;
    border-radius: 6px;
    border: 1px solid #ddd;
    margin-top: 16px;
    cursor: pointer;

    &:hover {
      background: ${lighten(0.05, '#052152')};
    }
  }
`;
