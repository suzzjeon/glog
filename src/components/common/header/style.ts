import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 30px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 50px;
  background: transparent;
  z-index: 100;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: fit-content;
  height: 40px;
  cursor: pointer;
`;

export const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(53, 60, 73, 0.6);
  border: 1px solid rgba(53, 60, 73, 1);
  border-radius: 50%;
  color: #cccfd3;
  margin-left: 10px;
  cursor: pointer;
`;

export const OpenPostButton = styled(CircleButton)`
  background-color: rgba(221, 82, 1, 0.4);
  border: 1px solid rgba(221, 82, 1, 0.2);
  border-radius: 50%;
  color: #d5cbc7;
  cursor: pointer;

  &:hover {
    background-color: rgba(221, 82, 1, 0.7);
  }
`;

export const ClosePostButton = styled(OpenPostButton)`
  background-color: rgba(221, 82, 1, 0.7);
`;

export const AuthSpan = styled.span`
  margin-left: 10px;
  color: #72808e;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export const SwitchBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchBox = styled.div`
  display: flex;
  width: 300px;
  height: fit-content;
  margin-left: 10px;
  background-color: rgba(53, 60, 73, 0.9);
  border-radius: 20px;
  border: 1px solid rgba(77, 87, 101, 1);
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SearchInput = styled.input`
  width: 260px;
  height: 40px;
  padding: 0 15px;
  background: none;
  border: none;
  color: #cccfd3;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #72808e;
  }
`;

export const SearchButton = styled.button`
  align-items: center;
  height: 40px;
  width: 40px;
  background: none;
  border: none;
  color: rgba(204, 207, 211, 0.8);
  font-size: 12px;
  cursor: pointer;
`;
