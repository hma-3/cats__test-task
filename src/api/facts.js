import { client } from "../utils/httpClient";

export const getFacts = async () => {
  const response = await client.get("/facts");

  return response.data;
};

export const getNextPage = async (page) => {
  const response = await client.get(`/facts?page=${page}`);

  return response.data;
};
