import axios from 'axios';
class UserSerivce{
    static serverUrl = 'https://jsonplaceholder.typicode.com/users';
    static getAllUsers(){
        return axios.get(this.serverUrl);
    }
}
export default UserSerivce;