import {Box, Typography} from "@mui/material";

import './QuestionsQuiz.css'

const QuestionsQuiz=({current,response})=>{
    return(
        <Box>
            <div color='question-quiz'>
                <p  className={`border-question animate__animated animate__bounceIn`}>{response[current]?.question}</p>
            </div>
        </Box>
    )
}
export default QuestionsQuiz
//