import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  minHeight:'300px',
  minWidth:'500px',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(
    {username,name,tagline,title,interestArea,office,website,
        phone,email,twitter,facebook,imagePath}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <div className='modalTitle' onClick={handleOpen}>
        <Typography variant='h6'>
        {name} <br/>
        </Typography>
        <Typography variant='h6'>
        {title}
        </Typography>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  variant="h3" component="h2">
            {name}
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <img className='peopleImg' src={imagePath} alt="me"/>
          <Typography  variant="h5" component="h2"  style={{color:'#cc6600', margin:'1rem 1rem'}}>
            {tagline &&
              <Typography variant='h5'>
                {tagline}
                </Typography> 
            }
          </Typography>
          <Typography variant='body1' style={{fontWeight:550}}>
            {office}
          </Typography>
          <Typography variant='body1' style={{fontWeight:550}}>
            {phone}
          </Typography>
          <Typography variant='body1' style={{fontWeight:550}}>
            {email}
          </Typography >
          
          
          {/* how about if we are unsure if they have an area */}
          {website &&
            <Typography sx={{ mt: 2 }} style={{fontWeight:550}}>
                <a href={website} target="_blank">My site</a>
            </Typography>
          }
          {/* remember, I will be looking for ALL OF THE DATA! */}
        </Box>
      </Modal>
    </div>
  );
}