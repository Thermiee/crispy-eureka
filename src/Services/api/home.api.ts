import axiosInstance from "../../Utils/Https";

const apiGetRequest = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};

// Fetch Competition Data (e.g., Premier League)
export const getCompetition = (competitionSlug: string) => {
  return apiGetRequest(`/video-api/v3/competition/${competitionSlug}/`);
};

// Fetch Team Data (e.g., Real Madrid)
export const getTeam = (teamSlug: string) => {
  return apiGetRequest(`/video-api/v3/team/${teamSlug}/`);
};