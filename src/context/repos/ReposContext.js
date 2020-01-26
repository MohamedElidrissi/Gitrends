import React, { createContext, useContext, useReducer } from 'react';

import ReposReducer from './ReposReducer';

const ReposStateContext = createContext();
const ReposDispatchContext = createContext();

export default function ReposProvider({ children }) {
  const initialState = {
    repos: {
      items: [],
      hasMore: true,
    },
  };

  const [state, dispatch] = useReducer(ReposReducer, initialState);

  return (
    <ReposStateContext.Provider value={state}>
      <ReposDispatchContext.Provider value={dispatch}>
        {children}
      </ReposDispatchContext.Provider>
    </ReposStateContext.Provider>
  );
}

function useReposState() {
  const context = useContext(ReposStateContext);

  if (!context) {
    throw new Error(`useReposState must be used within a ReposProvider`);
  }

  return context;
}

function useReposDispatch() {
  const context = useContext(ReposDispatchContext);

  if (!context) {
    throw new Error(`useReposDispatch must be used within a ReposProvider`);
  }

  return context;
}

export function useRepos() {
  return [useReposState(), useReposDispatch()];
}
