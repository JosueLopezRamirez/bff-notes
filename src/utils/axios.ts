import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});

axiosInstance.interceptors.response.use((response) => {
  return response.data;
});

export default axiosInstance;
