import './Header.css'
import {Box} from "@mui/material";


const Header = () => {
    return (
        <Box pt={2} className='flex'>
            <h1 className='title animate__animated animate__rubberBand '>Quiz Game</h1>
        </Box>
    )
}
export default Header;