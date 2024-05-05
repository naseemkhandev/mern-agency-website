import { setUser } from "../store/slices/authSlice";

const authenticateUser = async (dispatch) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/users/verify`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data.user));
    }
  } catch (error) {
    console.log(error);
  }
};

export default authenticateUser;
