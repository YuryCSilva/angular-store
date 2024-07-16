export interface ISanitizeData<T extends Record<string, any>> {
    mapData(data: T): void;
    sanitizeToSend(): any;
}