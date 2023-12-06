import axios from "axios";

axios.defaults.baseURL = "http://localhost/hospitalApi";

export const request = async ({ route, method, body,isLogin=false }) => {
  const response = await axios.request({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': isLogin?'':JSON.parse(localStorage.getItem("logged_in")).token
    },
    url: route,
    method: method,
    data: body,
  });

  return response.data;
};




