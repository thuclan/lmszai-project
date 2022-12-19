import axios from "axios";
import CONFIG from "../config";

/**
 * @param {String} endpoint
 * @param {String} method
 * @param {Object} data
 * @param {Object} extraHeaders
 * @returns Object
 */
const apiCaller = async (endpoint, method, data, extraHeaders) => {
  try {
    let axiosConfig = {
      method: method || "get",
      url: "https://dummyjson.com" + endpoint,
      data: data || undefined,
      headers: { ...(extraHeaders || {}) },
    };
    const res = await axios(axiosConfig);
    return res.data;
  } catch (error) {
    let message = error.message;

    if (error.response?.data?.message) {
      message = error.response.data.message;
    }

    return {
      success: false,
      message: { message },
    };
  }
};

export default apiCaller;
