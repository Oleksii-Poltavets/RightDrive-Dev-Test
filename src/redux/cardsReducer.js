import { cryptoApi } from "../api/api";

const SET_COINS = 'SET-COINS';
const TOGGLE_IS_FETCH = 'TOGGLE-IS-FETCH';
const SET_TOTAL_COINS_COUNT = 'SET-TOTAL-COINS-COUNT';
const SET_ICON_AND_DESCR_DATA = 'SET-ICON-AND-DESCR-DATA';

const initialState = {
    coinsData: {},
    iconAndDescriptionData: {},
    pageSize: 4,
    isFetch: true,
    // currency: 'USD',
    totalcardsCount: 100,
};

const cardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COINS: 
            return {
                ...state,
                coinsData: action.coins
            }
        case TOGGLE_IS_FETCH:
            return {
                ...state,
                isFetch: action.boolean
            }
        case SET_TOTAL_COINS_COUNT:
            return {
                ...state,
                totalcardsCount: action.amount
            }
        case SET_ICON_AND_DESCR_DATA: 
            return {
                ...state,
                iconAndDescriptionData: action.data
            }
        default:
            return state;
    }
}

//action Creators
const setCoins = (coins) => ({type: SET_COINS, coins});
const toggleIsFetch = (boolean) => ({type: TOGGLE_IS_FETCH, boolean});
const setTotalCardsCount = (amount) => ({type: SET_TOTAL_COINS_COUNT, amount});
const setIconAndDescriptionData = (data) => ({type: SET_ICON_AND_DESCR_DATA, data});
// const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

//thunk creators
export const getCoinsTC = () => {
    return (dispatch) => {
        dispatch(toggleIsFetch(true));
        cryptoApi.getAssetsData().then( data => {
            dispatch(setCoins(data.data));
            dispatch(setTotalCardsCount(data.data.status.total_count));
            dispatch(toggleIsFetch(false));
        });
    };
}

export const getCoinsInfoTC = () => {
    return (dispatch) => {
        dispatch(toggleIsFetch(true));
        cryptoApi.getLogoAndDescription().then( data => {
            dispatch(setIconAndDescriptionData(data.data));
            dispatch(toggleIsFetch(false));
        });
    };
}

export default cardsReducer;