import { ITexts } from "src/app/types/interfaces/texts.interface";

export const LoginTexts: ITexts = {
    form: {
        labels: {
            name: 'Nome',
            email: 'E-mail',
            password: 'Senha',
            confirmPassword: 'Confirmar senha'
        },
        types: {
            name: 'text',
            email: 'email',
            password: 'password',
            confirmPassword: 'password'
        },
        names: {
            name: 'name',
            email: 'email',
            password: 'password',
            confirmPassword: 'confirmPassword'
        },
        placeholders: {
            name: 'Digite seu nome',
            email: 'Digite seu e-mail',
            password: '********',
            confirmPassword: '********'
        },
        errors: {
            name: {
                required: 'Nome obrigatório'
            },
            email: {
                required: 'E-mail obrigatório',
                invalid: 'E-mail inválido',
            },
            password: {
                required: 'Senha obrigatória',
                invalid: 'Senha inválida'
            },
            confirmPassword: {
                required: 'Confirmar senha obrigatória',
                invalid: 'Confirmar senha inválida',
                passwordHaveMatch: 'As senhas devem ser iguais'
            }
        }
    }
}