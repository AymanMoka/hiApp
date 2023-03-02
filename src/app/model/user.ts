import { Posts } from './postsModel';
export interface User {
    _id: string
    username: string
    email: string
    password: string
    posts: Posts[]
    followers: Follower[]
    following: Following[]
    __v: number
}

export interface Follower {
    followerId: FollowerId
    _id: string
}

export interface FollowerId {
    _id: string
    username: string
    email: string
    password: string
    posts: Posts[]
    followers: Follower[]
    following: Following[]
    __v: number
}

export interface Following {
    followingId: FollowingId
    _id: string
}


export interface FollowingId {
    _id: string
    username: string
    email: string
    password: string
    posts: Posts[]
    followers: Follower[]
    following: Following[]
    __v: number
}

