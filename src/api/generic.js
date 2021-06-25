import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://itunes.apple.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const onSuccess = response => ({
  ...response.data,
  status: response.status,
});
export const onError = error =>
  error.response.status >= 500
    ? Promise.reject(error.response || error.message)
    : Promise.resolve(error.response || error.message);

export const formatApiRequest = options =>
  axiosClient(options).then(onSuccess).catch(onError);

export const handleGetMethod = reqURL =>
  formatApiRequest({
    url: reqURL,
    method: 'GET',
  });

export const handlePostMethod = (reqURL, params) =>
  formatApiRequest({
    url: reqURL,
    method: 'POST',
    data: params,
  });
