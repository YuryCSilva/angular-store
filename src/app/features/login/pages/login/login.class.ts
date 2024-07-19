import { BaseEntity } from "src/app/shared/classes/base-entity.class";
import { ISanitizeData } from "src/app/types/interfaces/sanitize-data.interface";

export class Login extends BaseEntity<ILogin> {
    protected email!: string;
    protected password!: string;

    constructor(
        data?: any,
    ) {
        super()
        this.initializeAtributes();
        if (data) this.mapData(data);
    }

    sanitizeToSend() {
        let output: any = {};
        const keysToSend = {email: 'email', password: 'password'};

        (Object.keys(this) as Array<keyof typeof keysToSend>).forEach((key) => {
            if(!!keysToSend[key] == true) output[keysToSend[key]] = this[key];
        })

        return output;
    }

    initializeAtributes() {
        this.email = '';
        this.password = '';
    }
}

interface ILogin {
    email: string;
    password: string;
}