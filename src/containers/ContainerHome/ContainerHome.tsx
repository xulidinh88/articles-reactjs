import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectArticles, fetchArticles } from '@store';
import { ComponentHeader, StyledContainerFluid, StyledContainer, ComponentAllArticle } from '@components';
import { IArticle } from '@types';

const ContainerHome = () => {
  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // const fetchData = async () => {
  //   try {
  //     let params = {
  //       domains: 'wsj.com',
  //       page: page + 1
  //     };
  //     const data: any = await newsApi.getAllNews(params);
  //     // const data = await axios({
  //     //   method: 'GET',
  //     //   url: `https://newsapi.org/v2/everything?domains=wsj.com&page=${page + 1}&apiKey=${API_NEWS_KEY}`
  //     //   cancelToken: new axios.CancelToken((c) => (cancel = c))
  //     // });
  //     setArticles((prevArticles: any) => {
  //       if (articles) {
  //         return [...prevArticles, ...data.articles];
  //       } else {
  //         return prevArticles;
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // Initial articles
  useEffect(() => {
    let initialParam = {
      domains: 'wsj.com',
      page: 1
    };
    dispatch(fetchArticles(initialParam));
  }, []);

  // Show hide button click to top
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  // Fetch data when scroll to end of page
  useEffect(() => {
    window.onscroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      if (window.innerHeight + document.documentElement.scrollTop === offsetHeight) {
        let params = {
          domains: 'wsj.com',
          page: page + 1
        };
        dispatch(fetchArticles(params));
      }
    };
  }, [page, articles]);

  return (
    <>
      <StyledContainerFluid>
        <StyledContainer>
          <ComponentHeader />
          <ComponentAllArticle datas={articles} />
        </StyledContainer>
        {visible && <Button onClick={scrollToTop}>&#8679;</Button>}
      </StyledContainerFluid>
    </>
  );
};

export default ContainerHome;
const slideIn = keyframes`
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateX(0);
  }
`;
const Button = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  color: #fff;
  background-color: #ff7b42;
  border: none;
  outline: none;
  cursor: pointer;
  animation: ${slideIn} 0.5s ease-in;
`;
