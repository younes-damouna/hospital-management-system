import axios from "axios";

axios.defaults.baseURL = "http://localhost/hospitalApi";

export const request = async ({ route, method, body }) => {
  const response = await axios.request({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' 
    },
    url: route,
    method: method,
    data: body,
  });

  return response.data;
};




