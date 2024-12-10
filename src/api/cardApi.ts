import { createMethod } from "../hocs/ApiComponent.ts";
import { HttpMethod } from "../types/HttpMethod.ts";
import { SwitchEnum } from "../types/SwitchEnum.ts";

interface ICardFetchRequest {
    target: string
}

const cardApi = {
    fetchCard: await createMethod<ICardFetchRequest>({
        method: HttpMethod.get,
        url: '/api/bcr/getBonusCard'
    })
}

export default cardApi;