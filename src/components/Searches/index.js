import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useState} from "react";


function Searches(props){
    const [val,setVal]=useState("");
    
    return (
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                autoHighlight={true}
                value={val}
                options={props.list.map((item)=>{
                    return{label:item.name}
                })}
                // getOptionLabel={option => option.label}
                // defaultValue={Options.find(v => v.label[0])}
                sx={{ width: 300, background:"#f3e5f5",borderRadius:"8px", marginBottom:"16px"}}
                renderInput={(params) => <TextField {...params} label="Type Your Selection" variant='outlined' fullWidth/>}
                onChange={(event,value)=>{setVal(value);}}

            />           
    );
}


export default Searches;

