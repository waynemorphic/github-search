//properties as declared in the github API

export class Users {
    constructor(
        public login: string,
        public name: string,
        public followers: number,
        public following: number,
        public public_repos: number,
        public created_at: Date,
        public updated_at: Date,
        public avatar_url: string
    ){}
}
