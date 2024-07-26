import { HttpReponse } from "../models/http-response-module";

export const ok = async (data: any): Promise<HttpReponse> => {
    return {
        statusCode: 200,
        body: data,
    };
};

export const noContent = async (): Promise<HttpReponse> => {
    return {
        statusCode: 204,
        body: null,
    };
};
export const badRequest = async (): Promise<HttpReponse> => {
    return {
        statusCode: 400,
        body: null,
    };
};
export const created = async (): Promise<HttpReponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Success",
        },
    };
};
