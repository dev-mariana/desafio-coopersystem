export class Repository {
    id: number;
    name: string;
    url: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    owner: {
      login: string;
    }
}