import { ICardState } from "./ICardState";

export default interface ICard {
    setKey: number,
    cardNumber: string,
    phoneNumber: string,
    email?: string,
    birthDate: string,
    name: string,
    surname: string,
    lastname: string,
    password?: string,
    appAccount: boolean,
    cardStates: Array<ICardState>
}