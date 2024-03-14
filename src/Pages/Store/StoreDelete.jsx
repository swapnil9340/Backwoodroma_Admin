import  React ,{useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { RiDeleteBin6Line } from "react-icons/ri";
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from "axios"
import Cookies from 'universal-cookie';
import Createcontext from "../../Hooks/Context/Context"
import { useSnackbar } from 'notistack';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlineWarning } from 'react-icons/ai';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StoreDelete (props) {
  const { enqueueSnackbar } = useSnackbar();
  const { dispatch} = useContext(Createcontext)
    const cookies = new Cookies();
  const [open, setOpen] = React.useState(false);
  const token_data = cookies.get('Token_access')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Delete = () => {
    const id = props.data.id
       axios.delete(`https://api.cannabaze.com/AdminPanel/delete-Stores/${id}`, {

           headers: {
               'Authorization': `Bearer ${token_data}`
           }
       }).then(response => {
        setOpen(false);
        dispatch({type:'api',api: true})
        enqueueSnackbar('Delete State success !', { variant: 'success' });
       })
   };

  return (
    <div>
      <span color='success' onClick={handleClickOpen}>
       <RiDeleteBin6Line size={22} color='#31B655'/>

      </span>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Store Delete ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='delete_popup text-center'>
              <div className='text-center'><AiOutlineWarning size={48} color='#f4c430'/></div>
                <h2 className='delete_popup_title'>Are you Sure ?</h2>
                 <p className='deletepopup_description'>Are you sure you want to delete this Store?</p>
            </div>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Delete}>yes</Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}