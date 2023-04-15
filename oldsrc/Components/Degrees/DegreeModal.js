import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicModal(
    {title, description, concentrations, degreeName, availableCertificates}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <Typography variant="h6" component="h5">
            {title}
            {degreeName}
      </Typography>
      </Button>
      <Typography variant="subtitle1" component="h5" paragraph={true}>
            {description}
          </Typography>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  variant="h3" component="h2">
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {description}
          </Typography>
          <Typography variant="h5" component="h2">
            Concentrations
            <br></br>
            {concentrations}
          </Typography>

          <Typography variant="h5" component="h2">
            Our Graduate Certificates
            <br></br>
            {availableCertificates}
          </Typography>

          
         
          {/* remember, I will be looking for ALL OF THE DATA! */}
        </Box>
      </Modal>
    </div>
  );
}