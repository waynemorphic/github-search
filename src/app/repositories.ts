//properties of repositories as declared in the github API

export class Repositories {
    constructor(
        public  total_count: number,
        public login: string,
        public name: string,
        public description: string,
        public forks_count: number,
        public stargazers_count: number,
        public pushed_at: Date,
        public updated_at: Date
    ){}
}
