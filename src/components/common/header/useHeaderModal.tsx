import { useState } from 'react';
import { usePostStore } from '../../../zustand/usePostStore';
import { useModal } from '../overlay/modal/Modal.hooks';
import useInput from '../../../hooks/useInput';
import LikesList from '../../likesList/LikesList';
import SearchList from '../../searchList/SearchList';
import Post from '../../post/Post';
import { useMarkerInvisible } from '../../../zustand/useMarkerInvisible';

export const useHeaderModal = () => {
  const { leftMount, rightMount, unmount } = useModal();
  const [isLikeListOpened, setIsLikeListOpened] = useState(false);
  const [isSearchListOpened, setIsSearchListOpened] = useState(false);
  const [keyword, handleChangeKeyword] = useInput();

  const closePost = () => {
    usePostStore.getState().setIsPosting(false);
    unmount('post');
  };

  const closeSearchList = () => {
    unmount('searchList');
    setIsSearchListOpened(false);
    useMarkerInvisible.getState().setIsMarkerInvisible(false);
  };

  const closeLikesList = () => {
    unmount('likesList');
    setIsLikeListOpened(false);
    useMarkerInvisible.getState().setIsMarkerInvisible(false);
  };

  const openPost = () => {
    usePostStore.getState().setIsPosting(true);
    leftMount('post', <Post type={'post'} unmount={unmount} />);
    closeLikesList();
    closeSearchList();
    unmount('detail');
  };

  const handleToSearch = () => {
    rightMount(
      'searchList',
      <>
        <SearchList keyword={keyword} isSearchListOpened={isSearchListOpened} />
      </>,
    );
  };

  const handleOnEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleToSearch();
    }
  };

  const openSearchList = () => {
    closeLikesList();
    setIsSearchListOpened(true);
    handleToSearch();
    useMarkerInvisible.getState().setIsMarkerInvisible(true);
  };

  const openLikesList = () => {
    closeSearchList();
    setIsLikeListOpened(true);
    rightMount('likesList', <LikesList />);
    useMarkerInvisible.getState().setIsMarkerInvisible(true);
  };

  return {
    isSearchListOpened,
    isLikeListOpened,
    handleChangeKeyword,
    closePost,
    closeSearchList,
    closeLikesList,
    openPost,
    handleToSearch,
    handleOnEnterPress,
    openSearchList,
    openLikesList,
  };
};
