import { createMethod } from "../hocs/ApiComponent.ts";
import { HttpMethod } from "../types/HttpMethod.ts";

interface ILoginReqiest {
    username: string,
    password: string
}

const authApi = {
    login: await createMethod<ILoginReqiest>({
        method: HttpMethod.post,
        url: '/auth/login'
    }),
    verify: await createMethod({
        method: HttpMethod.get,
        url: '/auth/verify'
    })
}

export default authApi;