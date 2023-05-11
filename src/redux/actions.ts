export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type: 'CHANGE-CURRENCY-FIELD'
    amountOfBYN: string
    amountOfCurrency: string

};

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: 'CHANGE-CURRENCY-FIELD',
        amountOfBYN,
        amountOfCurrency
    }
};

export type ChangeAction = {
    type: 'CHANGE-ACTION'
    isBuying: boolean
};

export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return {
        type: 'CHANGE-ACTION',
        isBuying
    }
};

export type ChangeCurrentCurrencyType = {
    type: 'CHANGE-CURRENCY-CURRENCY'
    currentCurrency: string
};

export const СhangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        type: 'CHANGE-CURRENCY-CURRENCY',
        currentCurrency
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;