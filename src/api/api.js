import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d13010db-d825-4b89-b5a1-3acdd313b6bb"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return instance.delete(`follow${userId}`);
    },
    follow(userId) {
        return instance.post(`follow${userId}`);
    },
    getUserProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getAuth() {
        return instance.get(`auth/me`);

    }
}