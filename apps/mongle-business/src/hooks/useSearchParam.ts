import React, { useEffect } from 'react';
import { NavigateOptions, useSearchParams } from 'react-router-dom';

const useSearchParam = (
  key: string,
  defaultValue?: string
): [string, (value: string, option?: NavigateOptions) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const param = searchParams.get(key);

  const setValue = (value: string, options?: NavigateOptions) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    }, options);
  };

  useEffect(() => {
    if (!param && defaultValue) {
      setValue(defaultValue);
    }
  }, []);

  return [param ?? '', setValue];
};

export default useSearchParam;
