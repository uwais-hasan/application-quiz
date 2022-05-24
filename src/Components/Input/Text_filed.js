import {Box, TextField} from "@mui/material";
import {useState} from "react";
import {changeAmount, changeName} from "../../Store/Action";
import {useDispatch} from "react-redux";

const Text_filed=({label,type})=>{
    const dispatch=useDispatch()
    const [value,setValue]=useState('');
    const handleChange=(e)=>{
        setValue(e.target.value)
        switch (label){
            case 'Name':
                dispatch(changeName(e.target.value))
                break;
            case 'Amount':
                dispatch(changeAmount(e.target.value))
        }
    }
    return(
        <Box mt={2}>
            <TextField value={value} fullWidth label={label} variant='outlined' onChange={handleChange} type={type} />
        </Box>
    )
}
export default Text_filed;