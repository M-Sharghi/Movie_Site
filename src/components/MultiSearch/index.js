// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import {useState} from "react";


// function Multi_Search(props){
//     // const [val,setVal]=useState("");
//     // let navigate = useNavigate();
    
//     return (
//       <div style={{ marginLeft: '40%', marginTop: '60px' }}>
//         {/* <h3>Welcome. Millions of movies, TV shows and people to discover</h3> */}
//         <Autocomplete
//           style={{ width: 500 }}
//           freeSolo
//           autoComplete
//           autoHighlight
//           options={props.data.map((item)=>{
//             return{label:item.id}
//           })}
//           renderInput={(params) => (
//             <TextField {...params}
//               onChange={props.func}
//               variant="outlined"
//               label="Search Box"
//             />
//           )}
//         />
//       </div>
//     );
//   }
    
//   export default Multi_Search;

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
                    return{label:item.name,id:item.id}
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
                    navigate(`/people/${data.id}`);
                }}
            />                       
         );
    }
export default Filter;

