import { axiosClient } from '@api'
import { API_NEWS_KEY } from '@constants';
import { IArticle, IArticles } from '@types';

export const newsApi = {
  getAllNews: (params: any): Promise<any> => {
    const url = `/everything?apiKey=${API_NEWS_KEY}`;
    return axiosClient.get(url, { params });
  }
};