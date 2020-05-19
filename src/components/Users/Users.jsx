import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import  userPhoto from '../../assets/avatar.jpg';
let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={userPhoto} className={classes.userPhoto}/>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>
                    : <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>}
            </div>
        </span>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
             <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
            </span>
        </span>


        </div>)};
    </div>
}


export default Users;
// {
//     id: 1,
//         photoUrl: 'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg',
//     followed: false,
//     name: 'Bob',
//     status: 'Hey',
//     location: {city: 'Minsk', country: 'Belarus'}
// },
// {
//     id: 2,
//         photoUrl: 'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg',
//     followed: false,
//     name: 'Nick',
//     status: 'Kalinka-malinka',
//     location: {city: 'Spb', country: 'Russia'}
// },
// {
//     id: 3,
//         photoUrl: 'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg',
//     followed: false,
//     name: 'Pit',
//     status: 'Hey',
//     location: {city: 'London', country: 'UK'}
// },
// {
//     id: 4,
//         photoUrl: 'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg',
//     followed: false,
//     name: 'Ele',
//     status: 'Hey',
//     location: {city: 'Spb', country: 'Russia'}
// },
// {
//     id: 5,
//         photoUrl: 'https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg',
//     followed: false,
//     name: 'Lili',
//     status: 'Hey',
//     location: {city: 'Spb', country: 'Russia'}
// }
