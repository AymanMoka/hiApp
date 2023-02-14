export interface Posts {
    _id: string;
    userId: UserID;
    post: string;
    usernmae: string;
    totalLikes: number;
    createdAt: Date;
    comments: Comment[];
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

export interface Comment {
    userId: string
    comment: string
    username: string
    createdAt: string
    _id: string
}