import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(
    {title, description, concentrations, degreeName, availableCertificates}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='degreeListItem'>
      <Accordion onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>{title}</Typography>
          {availableCertificates &&
                   
                <Typography variant="h5" component="h2">
                        {degreeName}
                        <br></br>
                </Typography>
            }
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" align='left' component="h2">
            {description}
          </Typography>
          {concentrations &&
             <Typography variant="h6" align='left' component="h2">
            Concentrations
            <br/>
            </Typography>
          }
          {concentrations &&
          <Typography variant="body1" align='left' component="h2">
            {concentrations.map((c) =>
            
              <ul style={{float:'left', color:'#cc6600', fontWeight:550}}>
                <li>{c}</li>
              </ul>
            )}
            <br/>
          </Typography>
         }
          {availableCertificates &&
                   
                   <Typography variant="h5" align='left' component="h2">
                            Available Certificates
                           <br></br>
                           
                   </Typography>
                   
            }
          {availableCertificates &&
                   
                   <Typography variant="body1" align='left' component="h2">
                         {availableCertificates.map((c) =>
            
                          <ul style={{float:'left', color:'#cc6600', fontWeight:550}}>
                            <li>{c}</li>
                          </ul>
                        )}
                           <br></br>
                   </Typography>
                   
            }
          
            
          
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}