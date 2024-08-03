import axios from "./api"; // Ваш кастомный модуль axios

const AuthServer = {
  async userRegister(user) {
    const {data} = await axios.post("/users", { user });
    return data;
  },
  async userLogin(user) {
    const {data} = await axios.post("/users/login", {user});
    return data;
  },
  async getUser() {
    // const response = await axios.get("/users");
  },
};

export default AuthServer;
