import { useReducer, useEffect } from "react";
import axios from "axios";

const API_URL = "https://cors-fetc.herokuapp.com/https://jobs.github.com/positions.json";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {loading: true, jobs: []};
    case "retrieved":
      return {...state, loading: false, jobs: action.payload.jobs};
    case "error":
      return {...state, error: action.payload.error, loading: false, jobs: []};
    case "checkNextPage":
      return {...state, hasNextPage: action.payload.hasNextPage};
    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    axios.get(API_URL, {
      cancelToken: cancelToken1.token,
      params: {...params, page: page, markdown: true}
    }).then(res => {
      dispatch({type: "retrieved", payload: {jobs: res.data}});
    }).catch(e => {
      if (axios.isCancel(e)) return;
      dispatch({type: "error", payload: {error: e}});
    });

    // check if there is next page
    const cancelToken2 = axios.CancelToken.source();
    axios.get(API_URL, {
      cancelToken: cancelToken2.token,
      params: { ...params, page: page + 1, markdown: true }
    }).then(res => {
      dispatch({ type: "checkNextPage", payload: { hasNextPage: res.data.length !== 0} });
    }).catch(e => {
      if (axios.isCancel(e)) return;
      dispatch({ type: "error", payload: { error: e } });
    });

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    };
  }, [params, page]);

  return state;
}