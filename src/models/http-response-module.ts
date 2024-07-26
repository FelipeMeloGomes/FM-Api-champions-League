export interface HttpReponse {
    status(statusCode: number): unknown;
    statusCode: number;
    body: any;
}
