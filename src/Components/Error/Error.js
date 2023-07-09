import {Box, Typography} from "@mui/material";
import './Error.css'
const Error=({details})=>{
    return(
        <Box>
            <Typography mt={2} className='error'>{details}</Typography>
        </Box>
    )
}
export default Error;