import {IGlobalState} from "../redux/state";

interface IRootState extends IGlobalState {};

export const selectCurrencies = (state: IRootState) => state.currency.currencies;
export const selectCurrentCurrency = (state: IRootState) => state.currency.currentCurrency;
export const selectIsBuying = (state: IRootState) => state.currency.isBuying;
export const selectAmountOfBYN = (state: IRootState) => state.currency.amountOfBYN
export const selectAmountOfCurrency = (state: IRootState) => state.currency.amountOfCurrency;


export const selectAll = (state: IRootState) => state.currency