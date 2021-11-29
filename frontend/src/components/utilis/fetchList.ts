import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL!;

export const fetchData = async ({ pageParam = 1, limit = 12 }) => {
  const { data } = await axios.get(
    `${baseUrl}/api/flyers?page=${pageParam}&limit=${limit}`
  );

  return { data, nextPage: pageParam + 1 };
};
