
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export default function Paginations({setPage, pageNumber}){
   
  return(
    <Stack className="flex auto" style={{padding: "64px"}}>
      <Pagination
        onChange={(event,pageNum) =>{
          setPage(pageNum);
        }}
        color="primary"
        size='large'
        sx={{ bgcolor:'#fafafa', borderRadius:'24px'}} 
        count={pageNumber} 
        shape="circular" 
        variant="outlined"/>
    </Stack>
  )
}