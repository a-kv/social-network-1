const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USRES = 'SET_USRES';

let initialState = {
    users: [
        // {id: 1, photoUrl:'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg', followed: false, name: 'Bob', status: 'Hey', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoUrl:'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg', followed: false, name: 'Nick', status: 'Kalinka-malinka', location: {city: 'Spb', country: 'Russia'}},
        // {id: 3, photoUrl:'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg', followed: false, name: 'Pit', status: 'Hey', location: {city: 'London', country: 'UK'}},
        // {id: 5, photoUrl:'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg', followed: false, name: 'Lili', status: 'Hey', location: {city: 'Spb', country: 'Russia'}},
        // {id: 4, photoUrl:'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg', followed: false, name: 'Ele', status: 'Hey', location: {city: 'Spb', country: 'Russia'}},
    ]

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USRES:{
            return { ...state, users: [...state.users, action.users]}
        }
        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USRES, users})


export default usersReducer;