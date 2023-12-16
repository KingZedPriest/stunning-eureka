import axios, { AxiosRequestConfig } from 'axios';

interface ApiRequestOptions extends AxiosRequestConfig {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export const  makeApiRequest = (
  endpoint: string,
  method: 'get' | 'post' | 'put' | 'delete',
  data?: any,
  options?: ApiRequestOptions
) => {
  const { onSuccess, onError, ...axiosOptions } = options || {};

  axios({
    url: `/api${endpoint}`,
    method,
    data,
    ...axiosOptions,
  })
    .then((response) => {
      if (onSuccess) {
        onSuccess();
      }
    })
    .catch((error) => {
      if (onError) {
        onError(error);
      }
    });
};


