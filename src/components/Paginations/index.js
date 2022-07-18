import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Paginations(props) {
  return (
    <Stack spacing={2} className="flex auto">
      <Pagination
        count={500}
        sx={{ bgcolor:'#fafafa' }}
        renderItem={(page) => (
          <PaginationItem
          
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...page}
          />
        )}
      />
    </Stack>
  );
}

// {props.list.map((item) => {
//   let img_url="https://www.themoviedb.org/t/p/w235_and_h235_face/";
//   let img_people=`${img_url}${item.profile_path}`;
// return (
//       <Pic_flex key={item.id}>
//           <Link to="#"><Image src={img_people}></Image></Link>
//           <Link to="#"><People_name>{item.name}</People_name></Link>
//       </Pic_flex>
//   );
// })}