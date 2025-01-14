import { ReactNode } from 'react';
import toast from 'react-simple-toasts';
import { QueryClient } from '@tanstack/react-query';
import { getPostByPostId, getPostByUserId } from '../../api/supabaseDatabase';
import { supabase } from '../../api/supabaseClient';
import Detail from '../detail/Detail';
import { usePostStore } from '../../zustand/usePostStore';

import type { Session } from '@supabase/supabase-js';
import type { LocationInfoTypes } from './Post';

type handleMutationFunctionProps = {
  type: string;
  session: Session | null;
  contents: string;
  imgUrl: string | undefined;
  locationInfo: LocationInfoTypes;
  location: {
    longitude: number;
    latitude: number;
  };
  switchChecked: any;
  data: any;
};

type handleMutationSuccessProps = {
  queryClient: QueryClient;
  type: string;
  mount: (name: string, element: ReactNode) => void;
  unmount: (name: string) => void;
  userId: string | undefined;
  postId: string | undefined;
};

export const handleMutationFunction = async ({ type, session, contents, imgUrl, locationInfo, location, switchChecked, data }: handleMutationFunctionProps) => {
  type === 'post'
    ? await supabase.from('posts').insert({
        userId: session?.user.id,
        contents: contents,
        images: imgUrl,
        countryId: locationInfo.countryId,
        regionId: locationInfo.regionId,
        latitude: location?.latitude,
        longitude: location?.longitude,
        address: locationInfo.address,
        private: switchChecked,
      })
    : await supabase
        .from('posts')
        .update({
          userId: session?.user.id,
          contents: contents,
          images: imgUrl,
          private: switchChecked,
        })
        .eq('id', data?.id);
};

export const handleMutationSuccess = async ({ queryClient, type, mount, unmount, userId, postId }: handleMutationSuccessProps) => {
  queryClient.invalidateQueries(['getPosts']);
  unmount('post');
  usePostStore.getState().setIsPosting(false);

  if (type === 'post') {
    toast('업로드 완료! 다른 게시물들도 확인해보세요 :)', { className: 'post-alert', position: 'top-center' });
    const post = userId ? await getPostByUserId(userId) : null;
    if (post) {
      mount('detail', <Detail data={post} />);
    }
  } else {
    toast('수정 완료!', { className: 'post-alert', position: 'top-center' });
    const post = postId ? await getPostByPostId(postId) : null;
    if (post) {
      mount('detail', <Detail data={post} />);
    }
  }
};
