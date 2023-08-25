import React from 'react';
import * as Styled from './style';
import { Tables } from '../../types/supabase';
import { RiDeleteBin4Fill, RiEdit2Fill } from 'react-icons/ri';
import Like from '../like/Like';
import { useSessionStore } from '../../zustand/store';
import { deleteButton } from '../../api/supabaseDatabase';

type DetailProps = {
  data: Tables<'posts'>;
};

const Detail: React.FC<DetailProps> = ({ data }) => {
  const session = useSessionStore(state => state.session);

  return (
    <Styled.DetailLayout>
      <Styled.DetailImageContainer>
        <Styled.LocationParagraph>
          {data.countryId}, {data.regionId}
        </Styled.LocationParagraph>
        <Styled.PostItemLikeBox>
          <Like data={data} />
        </Styled.PostItemLikeBox>
        {session?.user.id === data.userId && (
          <Styled.EditButton>
            <RiEdit2Fill color="#ffffff80" />
            <RiDeleteBin4Fill color="#ffffff80" onClick={() => deleteButton(data.id)} />
          </Styled.EditButton>
        )}
        <Styled.DetailImage src={data.images!} alt={`Image for ${data.contents}`} />
      </Styled.DetailImageContainer>

      <Styled.DetailContainer>
        <Styled.NameParagraph>{(data as any).user.name}</Styled.NameParagraph>
        <Styled.ContentsParagraph>{data.contents}</Styled.ContentsParagraph>
        <Styled.TimeParagraph>
          {new Intl.DateTimeFormat('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }).format(new Date(data.createdAt))}
        </Styled.TimeParagraph>
      </Styled.DetailContainer>
    </Styled.DetailLayout>
  );
};

export default Detail;
