import {useDispatch, useSelector} from "react-redux";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import './Result.css'
import {useEffect, useState} from "react";
import {Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ComponentButton from "../../Components/Button/ComponentButton";
const Result=()=>{

    const{timerCount}=useSelector(state=>state)
    const[outcome,setOutcome]=useState('')
    const[emoji,setEmoji]=useState()
    const{score,name,category,type,amount,difficulty}=useSelector(state=>state);
    const level=score/amount*100;
    const min=parseInt(timerCount/60)
    const second=parseInt(timerCount%60)
    const history=useNavigate()


 const levelScore=()=>{
     if (level<=50){
         setOutcome('we are sorry you fail')
         setEmoji(<SentimentVeryDissatisfiedIcon style={{fontSize:'150px'}} color="error"  />)
     }
     else if (level>=75) {
         setOutcome('you are smart you are successful')
         setEmoji(<InsertEmoticonIcon style={{fontSize:'150px'}} color="success"  />)
     }else{
         setOutcome('good you are Average')
         setEmoji(<SentimentSatisfiedRoundedIcon style={{fontSize:'150px'}} color="primary" />)
     }
 }
 const goToHome=()=>{
        history('/')
 }
 useEffect(()=>{
     levelScore();
 },[])
    return(
        <div className='content-result'>
         <Container>
             <div className='box'>
                 {emoji}
             </div>
             <div className='box'>
                 <p >Your name:<span> {name}</span></p>
                 <p>Your Score:<span> {score}</span></p>
                 <p>Your Outcome:<span> {outcome}</span></p>
                 <p>timer:<span> {min}:{second}</span></p>
                 <p>Type:<span> {type}</span></p>
                 <p>Amount:<span> {amount}</span></p>
                 <p>Difficulty:<span> {difficulty}</span></p>

                 <ComponentButton textButton='go to Home'  variant='contained' color='error' handleClick={goToHome}>asdsadas</ComponentButton>
             </div>
         </Container>
        </div>
    )
}
export default Result;