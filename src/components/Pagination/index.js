
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export default function Paginations({setPage, pageNumber}){
  return(
    <Stack className="flex auto pagination" >
      <Pagination
        onChange={(event,pageNum) =>{
          setPage(pageNum);
        }}
        color="primary"
        sx={{ bgcolor:'#fafafa', borderRadius:'24px'}} 
        count={pageNumber} 
        shape="circular" 
        variant="standard"
        />
    </Stack>
  )
}