import { Posts } from './postsModel';
export interface User {
    _id: string
    username: string
    email: string
    password: string
    posts: Posts[]
    __v: number
}


