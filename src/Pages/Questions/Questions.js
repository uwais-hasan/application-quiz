import useAxios from "../../Hooks/Axios";
import {useSelector} from "react-redux";
import {Box, CircularProgress, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import ComponentAnswers from "../../Components/Answer/ComponentAnswers";
import ComponentButton from "../../Components/Button/ComponentButton";
import {useNavigate} from "react-router-dom";
import QuestionsQuiz from "../../Components/QuestionsQuiz/QuestionsQuiz";
import InformationPlayer from "../../Components/InformationPlayer/InformationPlayer";
import CountDown from "../../Components/CountDown/CountDown";
import TestCircular from "../../Components/TestCircular";
import BtnNextQuestion from "../../Components/Button/BtnNextQuestion";




const Question = () => {


    const history = useNavigate()
    const {amount, category, difficulty, type,timerCount} = useSelector(state => state)
    const {response, loading} = useAxios(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
    const [current, setCurrent] = useState(0);
    const [checker, setChecker] = useState('')

    if (loading) {
        return (
            <CircularProgress/>
        )
    }
    const handleClick = () => {
        if (current + 1 >= amount) {
            history('/result')
        }
        setCurrent(current + 1)
        setChecker('')
    }
if (timerCount===0){
    history('/result')
}
    return (
        <Box>
            <TestCircular />
            {/*<CountDown />*/}
                   <InformationPlayer current={current} />
                   <QuestionsQuiz  current={current} response={response} />
                    <ComponentAnswers current={current} response={response}  setChecker={setChecker} checker={checker} correct={response[current]?.correct_answer}  />
                    <BtnNextQuestion checker={checker} textButton='next question'   handleClick={handleClick} variant='contained' color='primary' />
        </Box>
    )
}
export default Question;