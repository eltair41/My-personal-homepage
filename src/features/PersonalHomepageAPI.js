import axios from "axios";

export const downloadRepositories = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`)

  return await response.data;
};
  
 