import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useState} from "react";
import { useNavigate } from "react-router-dom";



function Filter(props){
    const [val,setVal]=useState("");
    let navigate = useNavigate();
    return (
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                autoHighlight={true}
                value={val}
                options={props.list.map((item)=>{
                    return{label:item.name,id:item.id}
                })}
                sx={{ width: 300}}
                renderInput={(params) => <TextField {...params} label="Type Your Selection" variant='standard' />}
                onChange={(e,data)=>{
                    setVal(data);
                    navigate(`/tv/${data.id}`);
                }}
            />                       
         );
    }

  

export default Filter;

