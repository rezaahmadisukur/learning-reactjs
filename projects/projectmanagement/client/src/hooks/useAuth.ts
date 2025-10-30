import apiClient from "@/config/axios";

const isLoggedIn = async () => {
  try {
    const { data } = await apiClient.get("/auth/whoami");
    return data.user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default isLoggedIn;
