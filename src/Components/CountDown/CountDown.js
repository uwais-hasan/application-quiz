import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import useAxios from "../../Hooks/Axios";
import {timeQuiz} from "../../Store/Action";


const CountDown=()=>{
    const dispatch=useDispatch()
    const {amount,timerCount}=useSelector(state=>state);
    const min = parseInt( timerCount / 60)
    const second = parseInt( timerCount % 60)

    //update timerCount
    useEffect(() => {
        dispatch(timeQuiz(amount * 30))

    }, [amount])

    let timer

    //run if timerCountTimer !==0
    useEffect(() => {
        if (timerCount !== 0) {
            timer = setTimeout(item => {
                dispatch(timeQuiz (timerCount - 1))
            }, 1000)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [timerCount])
    return(
        <div>

                <p>mim{min}</p>
                <p>second{second}</p>


        </div>
    )
}
export default CountDown;