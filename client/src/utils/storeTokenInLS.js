const storeTokenInLS = (access_token) => {
  localStorage.setItem("access_token", access_token);
};

export default storeTokenInLS;
