import axios from 'axios';

const debtsApi = axios.create({
  baseURL: 'https://provadev.xlab.digital/api/v1',
});

export default debtsApi;
