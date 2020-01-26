import { FETCH_REPOS_SUCCESS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_REPOS_SUCCESS:
      return {
        repos: {
          items: state.repos.items.concat(action.payload.items),
          hasMore: action.payload.hasMore,
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
