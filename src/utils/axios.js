import axios from "axios";

// if (process.env.NODE_ENV == "development") {
//   axios.defaults.baseURL = "http://39.100.6.76:8999";
// } else if (process.env.NODE_ENV == "production") {
//   axios.defaults.baseURL = "http://39.100.6.76:8999";
// }

// 请求超时时间
axios.defaults.timeout = 30000;

// post请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charse=UTF-8";

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 404:
          this.$message({
            showClose: true,
            message: "网络请求不存在",
            type: "error",
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          this.$message({
            showClose: true,
            message: "系统异常！",
            type: "error",
          });
      }
      return Promise.reject(error.response);
    }
  }
);
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
