import axios from 'axios';
import parse from 'parse-link-header';

import { FETCH_REPOS_SUCCESS } from '../types';

axios.defaults.baseURL =
  'https://api.github.com/search/repositories?sort=stars&order=desc';

const date = new Date();
date.setDate(new Date().getDate() - 30);

const formattedDate = `${date.getFullYear()}-${date.getMonth() +
  1}-${date.getUTCDate()}`;

export async function fetchRepos(dispatch, page = 1) {
  try {
    const res = await axios.get(`&q=created:%3E${formattedDate}&page=${page}`);

    const parsed = parse(res.headers.link);

    dispatch({
      type: FETCH_REPOS_SUCCESS,
      payload: {
        items: res.data.items,
        hasMore: !!parsed.next,
      },
    });
  } catch (err) {
    console.error(err);
  }
}
