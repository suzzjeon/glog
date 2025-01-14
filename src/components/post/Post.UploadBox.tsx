import React from 'react';
import * as Styled from './style';
import { BsFillImageFill } from 'react-icons/bs';
import Loader from '../common/loader/Loader';

interface UploadBoxTypes {
  imgFile: string | null;
  loading: boolean;
  handleImageSubmit: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  imgRef: React.RefObject<HTMLInputElement>;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => Promise<void>;
}

const UploadBox = ({ imgFile, loading, handleImageSubmit, imgRef, handleDrop }: UploadBoxTypes) => {
  return (
    <Styled.UploadBox onDragEnter={(event: any) => event.preventDefault()} onDragOver={(event: any) => event.preventDefault()} onDragLeave={(event: any) => event.preventDefault()} onDrop={handleDrop}>
      <label htmlFor="inputImg">
        {imgFile ? (
          <Styled.UploadImgFile src={imgFile} alt="이미지 업로드" />
        ) : (
          <Styled.ImgBox>
            {loading ? (
              <>
                <Loader />
                <p>
                  사진 업로드 중 ···
                  <br />
                  잠시만 기다려주세요!
                </p>
              </>
            ) : (
              <>
                <BsFillImageFill size={'25px'} className="image" />
                <p>
                  여기에 사진을
                  <br />
                  업로드 해주세요
                </p>
              </>
            )}
          </Styled.ImgBox>
        )}
      </label>
      <input id="inputImg" type="file" accept="image/png, image/jpeg, image/jpg, image/HEIC, image/heic " onChange={handleImageSubmit} ref={imgRef} />
    </Styled.UploadBox>
  );
};

export default UploadBox;
