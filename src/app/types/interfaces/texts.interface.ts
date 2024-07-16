export interface ITexts {
    form: {
        labels: ObjectText
        types: ObjectText
        names: ObjectText
        placeholders: ObjectText
        errors: {
            [key: string]: ObjectText
        }
    }
}

interface ObjectText {
    [key: string]: string
}