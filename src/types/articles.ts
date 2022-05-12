import { StringifiableRecord } from "query-string";

export interface ISource {
    id: string;
    name: string;
}

export interface IArticle {
    index?: number;
    className?:string;
    author: string;
    content: string;
    description:string;
    publishedAt: string;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
}
export interface IArticles {
  data: IArticle[];
}