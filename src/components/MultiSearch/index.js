import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useState} from "react";


function Multi_Search(props){
    // const [val,setVal]=useState("");
    // let navigate = useNavigate();
    
    return (
      <div style={{ marginLeft: '40%', marginTop: '60px' }}>
        {/* <h3>Welcome. Millions of movies, TV shows and people to discover</h3> */}
        <Autocomplete
          style={{ width: 500 }}
          freeSolo
          autoComplete
          autoHighlight
          options={props.data.map((item)=>{
            return{label:item.id}
          })}
          renderInput={(params) => (
            <TextField {...params}
              onChange={props.func}
              variant="outlined"
              label="Search Box"
            />
          )}
        />
      </div>
    );
  }
    
  export default Multi_Search;