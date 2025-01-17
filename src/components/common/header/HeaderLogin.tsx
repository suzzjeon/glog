import { BsPlusCircle, BsXCircle } from 'react-icons/bs';
import { usePostStore } from '../../../zustand/usePostStore';
import { useSessionStore } from '../../../zustand/useSessionStore';
import * as Styled from './style';

type HeaderLoginTypes = {
  openPost: () => void;
  signinHandler: () => Promise<void>;
  signoutHandler: () => Promise<void>;
  closePost: () => void;
};
const HeaderLogin = (props: HeaderLoginTypes) => {
  const { openPost, signinHandler, signoutHandler, closePost } = props;
  const session = useSessionStore(state => state.session);
  const isPostModalOpened = usePostStore(state => state.isPosting);

  return (
    <>
      {isPostModalOpened ? (
        <Styled.ClosePostButton onClick={closePost}>
          <BsXCircle size={'22px'} />
        </Styled.ClosePostButton>
      ) : (
        <Styled.OpenPostButton onClick={session ? openPost : signinHandler}>
          <BsPlusCircle size={'22px'} className="plus" />
        </Styled.OpenPostButton>
      )}

      {session ? <Styled.AuthSpan onClick={signoutHandler}>로그아웃</Styled.AuthSpan> : <Styled.AuthSpan onClick={signinHandler}>로그인</Styled.AuthSpan>}
    </>
  );
};

export default HeaderLogin;
