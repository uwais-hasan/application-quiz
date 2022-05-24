

import {Box,Button} from "@mui/material";


const ComponentButton=({variant,color,handleClick,textButton,checker})=>{
    return(
        <Box pt={3}>

            <Button
                onClick={handleClick}
                variant={variant}
                color={color}
                fullWidth
                disabled={!checker}
            >{textButton}</Button>
        </Box>
    )
}
export default ComponentButton;