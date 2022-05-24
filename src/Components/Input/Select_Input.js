import {Box, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {FormControl} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeType,changeCategory,changeDifficulty} from '../../Store/Action'

const Select_Input=({label,option})=>{
    const[value,setValue]=useState('');
    const dispatch=useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value)
        switch (label) {
            case 'Category':
                dispatch(changeCategory(e.target.value))
                break;
            case 'Difficulty':
                dispatch(changeDifficulty(e.target.value));
                break;
            case 'Type':
               dispatch(changeType(e.target.value))
                default :return;
        }
    }
    return(
        <Box mt={2}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select label={label} value={value}  onChange={handleChange}>
                    {option.map(item => {
                        return (
                            <MenuItem key={item.name||item.category} value={item.name||item.value}>{item.name||item.category}</MenuItem>
                        )
                    })};
                </Select>
            </FormControl>
        </Box>
    )
}

export default Select_Input;