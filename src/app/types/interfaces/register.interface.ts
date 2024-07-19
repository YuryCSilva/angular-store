export interface IRegisterRequest {
    name: string;
    email: string;
    password: string;
    avatar?: string;
}

export interface IRegisterResponse {
    email: string;
	password: string;
	name: string;
	avatar: string;
	role: string;
	id: number;
}