import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import './InformationPlayer.css'

const InformationPlayer=({current})=>{
    const {score,name}=useSelector(state=>state)
    return(
        <Box mb={'100px'} fullWidth={true} sx={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
            <p className='style-paragraph'>question:{current+1}</p>
            <p className='style-paragraph'>Score:{score}</p>
            <p className='style-paragraph'>name:{name}</p>
        </Box>
    )
}
export default InformationPlayer;