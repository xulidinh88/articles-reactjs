import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { newsApi } from '@api'
import { IArticle, IArticles } from '@types';

export const fetchArticles: any = createAsyncThunk('articles/fetchArticles', async (params) => {
  const result = await newsApi.getAllNews(params);
  return result.articles;
});

const initialState: IArticles = {
  data: []
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state: IArticles, action: PayloadAction<IArticle[]>) => {
      state.data = [...state.data, ...action.payload];
    });
  }
});

export default articlesSlice.reducer