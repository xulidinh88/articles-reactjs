import styled, { keyframes } from 'styled-components';
import StackGrid, { transitions } from 'react-stack-grid';

import { IArticle } from '@types';
import { ComponentCardArticle } from '@components';

interface IPropsAllArticle {
  datas: IArticle[];
}

const { scaleDown } = transitions;

export const ComponentAllArticle = (props: IPropsAllArticle) => {
  const { datas } = props;
  return (
    <StyledAllArticle>
      <div className="wrap-heading">
        <div className="wrap">
          <h1 className="heading">News all around the world</h1>
          <div className="line" />
        </div>
      </div>
      <StackGrid
        columnWidth={'25%'}
        gutterWidth={30}
        gutterHeight={20}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
      >
        {datas &&
          datas.map((article: IArticle, index: number) => {
            return (
              <ComponentCardArticle
                className="card"
                key={index}
                author={article.author}
                content={article.content}
                description={article.description}
                publishedAt={article.publishedAt}
                source={article.source}
                title={article.title}
                url={article.url}
                urlToImage={article.urlToImage}
                index={index}
              />
            );
          })}
      </StackGrid>
    </StyledAllArticle>
  );
};

const slideIn = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const StyledAllArticle = styled.div`
  width: 100%;
  margin: 0 0 8rem;
  .wrap-heading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    .wrap {
      position: relative;
      .heading {
        max-width: 50rem;
        text-align: center;
        font-size: 3.4rem;
        font-weight: normal;
        font-family: 'Pacifico';
      }
      .line {
        height: 0.3rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #ff7b42;
        animation: ${slideIn} 3s ease-in;
      }
    }
  }
`;
