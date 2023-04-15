import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid  rgb(235, 135, 5)',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(
    {title,description, courses}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='modalItem'>
      <div className='modalTitle' onClick={handleOpen}>
        <Typography variant="h5" component="h2">
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
          <Typography  variant="h4" component="h2">
            {title}
          </Typography>
          <Typography  variant="subtitle1" component="h2">
            {description}
          </Typography>
          <Typography variant="h5" component="h2">
            Courses: <br/>
            {courses.map( (c) =>
              <ul style={{float:'left', color:'#cc6600', fontWeight:550}}>
                <li>{c}</li>
              </ul>
            )}
          </Typography>
          </Box>
      </Modal>
    </div>
  );
}