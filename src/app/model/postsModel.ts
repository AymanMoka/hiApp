export interface Posts {
    _id: string;
    userId: UserID;
    post: string;
    usernmae: string;
    totalLikes: number;
    createdAt: Date;
    comments: any[];
    likes: any[];
    __v: number;
}

export interface UserID {
    _id: string;
    username: string;
    email: string;
    posts: Post[];
    __v: number;
}

export interface Post {
    postId: string;
    _id: string;
}