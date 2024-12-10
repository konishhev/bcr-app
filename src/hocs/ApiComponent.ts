import axios, { AxiosResponse } from "axios";
import { HttpMethod } from "../types/HttpMethod.ts";
import env from "react-dotenv";


interface IApiConfig {
    method: HttpMethod,
    url: string,
    params?: any
}

// only one api url supported - need to rework

export const createMethod = async <IRequest = null, IResponse = AxiosResponse>(config: IApiConfig) => (
    request?: IRequest
) : Promise<IResponse> => axios({
    method: config.method,
    baseURL: env.API_URL,
    url: config.url,
    params: config.method === HttpMethod.get ? { ...request } : undefined,
    data: {
        ...request
    }
});