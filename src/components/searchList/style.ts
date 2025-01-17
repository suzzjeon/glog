import { styled } from 'styled-components';

export const LoginGuideButton = styled.button`
  position: absolute;
  right: 30px;
  top: 1340px;
  width: 340px;
  height: 50px;
  background-color: rgba(114, 128, 142, 0.6);
  border: none;
  border-radius: 20px;
  color: #f4f4f5;
  font-size: 15px;
  font-weight: 600;
  z-index: 1;
  cursor: pointer;
`;

export const ScrollDiv = styled.div`
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: fit-content;
  float: right;
  margin: 20px 0;
`;
