import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseUrl:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d13010db-d825-4b89-b5a1-3acdd313b6bb"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
   }
   export const getFollow = (currentPage, pageSize) => {
    return instance.get(`follow/page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}