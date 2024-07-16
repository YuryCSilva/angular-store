import { ISanitizeData } from "src/app/types/interfaces/sanitize-data.interface";

export class Register implements ISanitizeData<IRegister> {
    private name!: string;
    private email!: string;
    private password!: string;

    constructor(
        data?: any,
    ) {
        this.initializeAtributes();
        if (data) this.mapData(data);
    }

    mapData(data: IRegister): void {
        (Object.keys(this) as Array<keyof IRegister>).forEach((key) => {
            if(!!data[key] == true) this[key] = data[key];
        })
    };

    sanitizeToSend(): any {
        let output: any = {};
        const keysToSend = {name: 'name', email: 'email', password: 'password'};

        (Object.keys(this) as Array<keyof typeof keysToSend>).forEach((key) => {
            if(!!keysToSend[key] == true) output[keysToSend[key]] = this[key];
        })

        return output;
    }

    private initializeAtributes() {
        this.name = '';
        this.email = '';
        this.password = '';
    }
}

interface IRegister {
    name: string;
    email: string;
    password: string;
}