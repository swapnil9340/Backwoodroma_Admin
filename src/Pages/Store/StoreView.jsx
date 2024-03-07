import Button from '@mui/material/Button';
import { MdPreview } from 'react-icons/md';
export default function StoreView(){
    return(
        <div>
            <Button  color='success' sx={{
                              
                              fontSize:'14px',
                              textTransform:'capitalize',
                              gap:'3px',
                              textAlign:'start',
                           }}
                           >
               <MdPreview/> store view
            </Button>
        </div>
    )
}