import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_NAME,
    CHANGE_Type, CLEAT_TIMEOUT,
    TIMER_QUIZ,
    UPDATE_SCORE
} from "./Type";


const initialState={
    category:null,
    difficulty:'',
    type:'',
    name:'',
    amount:'',
    score:0,
    timerCount:null,

}

const reducers=(state=initialState,action)=>{
switch (action.type){
    case CHANGE_CATEGORY:
        return{
            ...state,
            category: action.data
        }
    case CHANGE_DIFFICULTY:
        return{
            ...state,
            difficulty: action.data
        }
    case CHANGE_Type:
        return{
            ...state,
            type: action.data
        }
    case CHANGE_NAME:
        return{
            ...state,
            name: action.data
        }
    case CHANGE_AMOUNT:
        return{
            ...state,
            amount: action.data
        }
    case UPDATE_SCORE:
        return {
            ...state,
            score:state.score + action.data
        }
    case TIMER_QUIZ:
        return {
            ...state,
            timerCount: action.data
        }

    default:
        return state;
}

}
export default reducers;