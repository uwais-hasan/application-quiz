import {Box} from "@mui/material";

import './ComponentAnswers.css'
import {useDispatch} from "react-redux";
import {updateScore} from "../../Store/Action";
import {useEffect, useState} from "react";
const ComponentAnswers=({current,checker,setChecker,correct,response})=>{
    const dispatch=useDispatch()
    const[options,setOption]=useState([]);

    const shuffleAnswers = (shuffle) => {
        return  shuffle.sort(() => Math.random() - 0.5)
    }




    const checkerAnswers=(item)=>{
        setChecker(item)
     item===correct&&dispatch(updateScore(1))
    }
    const checkerClass = (item) => {

        if (item === correct) {
            return 'trueAnswers'
        } else {
            return 'falseAnswers'
        }
    }
    useEffect(()=>{
        setOption(shuffleAnswers([response[current]?.correct_answer,...response[current]?.incorrect_answers]))
    },[current])
    console.log(correct)

    return (
        <Box  pt={'50px'} className='flex animate__animated animate__bounceIn'>
            {response&&options.map(item => {
                return (
                    <p key={Math.random() * 10}
                       className={`style-p  ${checker && checkerClass(item)}`}
                       onClick={() => checkerAnswers(item)}
                    >{item}</p>
                )
            })}
        </Box>
    )
}

export default ComponentAnswers;



