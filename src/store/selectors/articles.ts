import { RootState } from '@store' 

export const selectArticles = (store: RootState) => store.articles.data;