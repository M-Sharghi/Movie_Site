import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      secondary: {
        main: "#fafafa",
      },
    },
  });

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
                    return{label:item.title,id:item.id}
                })}
                sx={{ width: 400}}
                renderInput={(params) => <ThemeProvider theme={theme}>
                    <TextField {...params} 
                    sx={{"& .MuiInputLabel-root": { color: "white" }, borderBottom: "1px solid white", "& .MuiInput-input":{color: "white"}}}
                    type="search"
                    color="secondary"
                    label="Search ..." 
                    variant='standard'/>
                    </ThemeProvider>}
                onChange={(e,data)=>{
                    setVal(data);
                    navigate(`/movie/${data.id}`);
                }}
            />                       
         );
    }
export default Filter;

