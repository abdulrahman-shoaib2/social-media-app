import axios from "axios";

class APIServices {
  static tokenInfo = JSON.parse(localStorage.getItem("token"));
  #BASE_URL;
  #PATH;

  constructor(path) {
    this.#BASE_URL = import.meta.env.VITE_BASE_URL;
    this.#PATH = path;
  }
  set token(tokenInfo) {
    if(!tokenInfo) {
      APIServices.tokenInfo = null;
      return;
    }
    APIServices.tokenInfo = tokenInfo;
  }

  async fetchData(config) {
    const {
      endPoint = "",
      method = "get",
      data = null,
      tokenRequired = true,
    } = config;
    // let headers=undefined;
    const options = {};
    if (data) {
      options.data = data;
    }
    if (tokenRequired) {
      options.headers = {
        token: APIServices.tokenInfo.token,
      };
    }
    return await axios({
      method,
      url: `${this.#BASE_URL}${this.#PATH ? `/${this.#PATH}` : ""}${endPoint ? `/${endPoint}` : ""}`,
      ...options,
    });
  }
}

export const systemAPI = new APIServices("");
export const usersAPI = new APIServices("users");
export const postsAPI = new APIServices("posts");
export const notificationsAPI = new APIServices("notifications");
