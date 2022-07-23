
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export default function Paginations({setPage, pageNumber}){
  
  const handleChange = (page) =>{
    setPage(page);
    window.scroll(0,0);
  }
  return(
    <Stack className="flex auto" style={{padding: "64px"}}>
      <Pagination
        onChange={(event) =>handleChange(event.target.textContent)}
        color="primary"
        size='large'
        sx={{ bgcolor:'#fafafa', borderRadius:'24px'}} 
        count={pageNumber} 
        shape="circular" 
        variant="outlined"/>
    </Stack>
  )
}