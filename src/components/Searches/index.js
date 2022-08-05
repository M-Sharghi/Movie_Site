import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {useState} from "react";

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    // stringify: (option: FilmOptionType) => option.name,
  });

function Filter(props){
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
                // getOptionLabel={(option) => option.name}
                filterOptions={filterOptions}
                // getOptionLabel={option => option.label}
                // defaultValue={Options.find(v => v.label[0])}
                sx={{ width: 300, background:"#f3e5f5",borderRadius:"8px", marginBottom:"16px"}}
                renderInput={(params) => <TextField {...params} label="Type Your Selection" variant='standard' fullWidth/>}
                onChange={(event,value)=>{setVal(value);}}

            />           
    );
}

// interface FilmOptionType {
//     name: string;
//     year: number;
//   }
  

export default Filter;

