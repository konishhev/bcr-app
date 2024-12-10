import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICard from "../types/ICard.ts";
import { RootState } from "./store.ts";

interface CardState {
    tableCard: Array<ICard>,
    historyTable: Array<ICard>
}

const initialState: CardState = {
    tableCard: [],
    historyTable: []
}

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        SET_TABLE_CARD: (state, action: PayloadAction<Array<ICard>>) => {
            state.tableCard = action.payload;
        },
        SET_HISTORY_TABLE: (state, action: PayloadAction<Array<ICard>>) => {
            state.historyTable = action.payload
        }
    }
})

export const {SET_TABLE_CARD} = cardSlice.actions;

export const getCardTable = (state: RootState) => state.cards.tableCard;
export const getHistoryTable = (state: RootState) => state.cards.historyTable;

export default cardSlice.reducer;