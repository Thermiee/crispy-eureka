
import axiosInstance from "../../Utils/Https";


const apiGetRequest = async (endpoint: string) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  }


  export const getTeamDetails = async (title: string) => {
    return apiGetRequest(`${title}`);
  }