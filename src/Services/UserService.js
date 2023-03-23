import axios from "axios";

const UserService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// class UserSerivce{
//     static serverUrl = 'https://jsonplaceholder.typicode.com/users';
//     static getAllUsers(){
//         return axios.get(this.serverUrl);
//     }
// }
export default UserService;
