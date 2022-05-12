import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { IArticle } from '@types';
import { useImageOnLoad } from '@hooks';
import { beforeHandleContent, handleClickButton } from '@utils';

export const ComponentCardArticle = (props: IArticle) => {
  const { index, className, title, content = '', publishedAt, urlToImage, url } = props;

  const { handleImageOnLoad, css } = useImageOnLoad();
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <StyledCardArticle
      className={className}
      showOverlay={showOverlay}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <div className="wrap-img">
        <img style={{ ...css.thumbnail }} className="img" alt="Experience picture" />
        <img onLoad={handleImageOnLoad} style={{ ...css.fullSize }} className="img" src={urlToImage} />
      </div>

      {index && index % 5 !== 0 && index % 3 !== 0 ? (
        <>
          <h2 className="title">{title}</h2>
          <h4 className="time">{publishedAt}</h4>
          <h3 className="content">{beforeHandleContent(content)}</h3>
        </>
      ) : (
        <h2 className="title">{title}</h2>
      )}
      <div className="overlay" onClick={() => handleClickButton(url)}>
        See more
      </div>
    </StyledCardArticle>
  );
};

const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyledCardArticle = styled.div<{ showOverlay: boolean }>`
  width: 100%;
  position: relative;
  .wrap-img {
    width: 100%;
    .img {
      width: 100%;
      max-height: 80rem;
      cursor: pointer;
    }
  }
  .title {
    padding: 0.6rem 0;
    font-weight: bold;
    font-size: clamp(1.4rem, 2rem, 3rem);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
  .time {
    color: #888;
    font-weight: normal;
    font-size: 1.2rem;
  }
  .content {
    font-weight: 500;
    font-size: clamp(1.2rem, 1.6rem, 2.4rem);
    padding: 0.4rem 0;
    line-height: 3rem;
  }
  .btn-details {
    border: none;
    padding: 1rem 2rem;
    width: 10rem;
    margin-top: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
  }
  .overlay {
    position: absolute;
    z-index: 999;
    inset: 0;
    width: 100%;
    height: 100%;
    display: ${(props) => (props.showOverlay ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    background-color: rgba(100, 100, 100, 0.8);
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    animation: ${slideIn} 0.5s ease-in-out;
  }
`;
