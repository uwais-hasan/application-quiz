import {Box, CircularProgress, Typography} from "@mui/material";
import Select_Input from "../../Components/Input/Select_Input";
import Text_filed from "../../Components/Input/Text_filed";
import {optionType,optionCategories,optionDifficulty} from "../../Data/Data";
import useAxios from "../../Hooks/Axios";
import ComponentButton from '../../Components/Button/ComponentButton'

import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";
import Error from "../../Components/Error/Error";
import SwiperImage from "../../Components/SwiperImage/SwiperImage";
import './Home.css'
import CountDown from "../../Components/CountDown/CountDown";


const Home=()=>{
    const history=useNavigate();
    const {amount, category, difficulty, name, type} = useSelector(state => state);
    const[error,setError]=useState(false);
const[detailsError,setDetailsError]=useState('')

    const handleClick=()=>{
        if (!amount&&!category&&!difficulty&&!name&&!type){
            setError(true)
            setDetailsError('please fill all field')
        }else if (amount>10){
            setError(true)
            setDetailsError('max question is 10')
        }
        else if (amount&&category&&difficulty&&name&&type){
            return  history('/question')
        }

    }
    return(
     <Box pt={3}  className='content-Home'>

         <Box sx={{display:'flex',flexDirection:'column'}}>
             <div>
                 <SwiperImage />
             </div>
             <div className='border-top'>
                 <form>
                     <Text_filed label='Name' type='text'/>
                     <Select_Input label='Category' option={optionCategories}/>
                     <Select_Input label='Difficulty' option={optionDifficulty}/>
                     <Select_Input label='Type' option={optionType}/>
                     <Text_filed label='Amount' type='number' />
                     <ComponentButton textButton='go to Quiz' handleClick={handleClick}  variant='contained' color='success'/>
                     {error&&<Error details={detailsError}/>}
                 </form>
             </div>
         </Box>

     </Box>
    )
}

export default Home;