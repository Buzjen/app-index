import { makeRequest } from "./makeRequest";

export interface Item {
  about: string;
  createdAt: string;
  id: string;
  seen: boolean;
  price: number;
  title: string;
  address: string;
}

export interface GetItemsResponse {
  items: Item[];
  page: number;
  pages: number;
  size: number;
  total: number;
}

export const getItems = async (page: number): Promise<GetItemsResponse> => {
  const res = await makeRequest(`/items?page=${page}`);
  return res.data;
};

export const getItemsById = async (id: string): Promise<Item> => {
  const res = await makeRequest(`/items/${id}`);
  return res.data;
};
