import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";


let state = {
    posts: [
        {id: 1, message: 'Hey, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 3},
        {id: 3, message: 'Puzan!', likesCount: 1345}],
};

test('length post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("test")
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
});

test('message of new post should be correct ', () => {
    //1. test data
    let action = addPostActionCreator("test")
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[3].message).toBe("test");
});

test('after deleting length should be decrement', () => {
    //1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(2);
});

test('after deleting length should`t be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(1000)
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
});
