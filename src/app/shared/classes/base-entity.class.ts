import { ISanitizeData } from "src/app/types/interfaces/sanitize-data.interface";

export abstract class BaseEntity<T extends Record<string, any>> implements ISanitizeData<T> {
    protected id!: Partial<T>['id'];

    mapData(data: any): void {
        (Object.keys(this) as Array<keyof T>).forEach((key) => {
            if(!!data[key] == true) (this as any)[key] = data[key];
        })
    };

    abstract sanitizeToSend(): any;

    protected abstract initializeAtributes(): void;
}