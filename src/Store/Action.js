import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_NAME,
    CHANGE_Type, CLEAT_TIMEOUT,
    TIMER_QUIZ,
    UPDATE_SCORE
} from "./Type";


const changeCategory=(data)=>{
    return{
        type:CHANGE_CATEGORY,
        data,
    }
}
const changeDifficulty=(data)=>{
    return{
        type:CHANGE_DIFFICULTY,
        data,
    }
}
const changeType=(data)=>{
    return{
        type:CHANGE_Type,
        data,
    }
}
const changeName=(data)=>{
    return{
        type:CHANGE_NAME,
        data,
    }
}
const changeAmount=(data)=>{
    return{
        type:CHANGE_AMOUNT,
        data,
    }
}
const updateScore=(data)=>{
    return{
        type:UPDATE_SCORE,
        data,
    }
}
const timeQuiz=(data)=>{
    return{
        type:TIMER_QUIZ,
        data,
    }
}



export  {changeName,changeType,changeCategory,changeDifficulty,changeAmount,updateScore,timeQuiz}