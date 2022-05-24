import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {timeQuiz} from '../Store/Action'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useNavigate} from "react-router-dom";


const TestCircular=()=>{
    const history=useNavigate()
    const dispatch=useDispatch()
    const {amount,timerCount}=useSelector(state=>state);
    const min = parseInt( timerCount / 60)
    const second = parseInt( timerCount % 60)
    const percentage = timerCount;

    let timer
    //update timerCount
    useEffect(() => {
        dispatch(timeQuiz(amount * 30))

    }, [amount])



    //run if timerCountTimer !==0
    useEffect(() => {
        if (timerCount !== 0) {
            timer = setTimeout(() => {
                dispatch(timeQuiz(timerCount - 1))
            }, 1000)
        }
        return () => {
            clearTimeout(timer)

        }
    }, [timerCount])


    return(
        <div >
            <div style={{ width: 90, height: 90 }}>
                <CircularProgressbar
                    value={timerCount}
                    text={`${min}:${second}`} />;
            </div>
            {/*<p>mim{min}</p>*/}
            {/*<p>second{second}</p>*/}


        </div>
    )
}
export default TestCircular;


