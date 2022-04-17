export class Users {
    constructor(
        public name: string,
        public followers: number,
        public following: number,
        public Repositories: number,
        public createdAt: Date,
        public updatedAt: Date
    ){}
}
