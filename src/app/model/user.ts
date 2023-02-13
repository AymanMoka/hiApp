export class User {
    _id!: string;
    username!: string;
    email!: string;
    password!: string;
    posts!: [
        {
            _id: string;
        }
    ]
}
