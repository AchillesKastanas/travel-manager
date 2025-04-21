import { useState, useEffect } from "react";

interface IFetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetchData = <T>(url: string): IFetchState<T> => {
  const [state, setState] = useState<IFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Failed to fetch: ${response.statusText}`);
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error as Error });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetchData;
