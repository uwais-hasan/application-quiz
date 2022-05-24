import {Box,Button} from "@mui/material";


const ComponentButton=({variant,color,handleClick,textButton})=>{
    return(
        <Box pt={3}>

            <Button
                onClick={handleClick}
                variant={variant}
                color={color}
                fullWidth
            >{textButton}</Button>
        </Box>
    )
}
export default ComponentButton;