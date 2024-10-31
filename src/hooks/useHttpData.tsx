import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useHttpData<T>(url: string) {
  const controller = new AbortController();
  const { signal } = controller;

  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    axios
      .get<{ meals: T[] }>(url, { signal })
      .then(({ data }) => {
        if (!ignore) setData(data.meals);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [url]);

  return { loading, data };
}
