import React from 'react';
import getData from '../../Utils/getData';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DataGridForCoop from './coopTable.js';


export default class Employment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employment:{},
            employmentLoaded: false
        }
    }

    componentDidMount(){
        //Get Data
        getData('employment/')
            .then((json) => {
                this.setState({
                    employment:json,
                    employmentLoaded:true
                })
            });
    }

    render(){
        const {employment, employmentLoaded} = this.state;

        //First Case
        if(!employmentLoaded) return (
            <div><h2>Employment</h2><p>Loading...</p></div>
        );

        //When we have data
        return (
            <div id='employment'>
                <div className='employmentIntro'>
                    <Typography variant = "h3">
                        {employment.introduction.title}
                    </Typography>
                    <br/>
                    <div className="employmentContent">
                        {employment.introduction.content.map( (e) =>
                        <div className='employmentContentItem'>
                        <Typography variant="h4">
                            {e.title}
                        </Typography>
                        <br/>
                        <Typography variant="body1">
                                {e.description}
                        </Typography>
                        </div>
                        )}
                    </div>
                    
                </div>
                <br/>

                 <div className='degreeStats'>
                    <Typography variant="h4">
                        {employment.degreeStatistics.title} 
                    </Typography>
                    <br/>
                    <div className="degreeStatsContent">
                        {employment.degreeStatistics.statistics.map( (d) =>
                        <div className='degreeStatsItem'>
                            <Box 
                            sx={{
                                width: '300px',
                                marginTop:'50%',
                                marginBottom:'50%',
                              }}
                              >
                              <Typography variant="h4" style={{color:'whitesmoke'}}>
                                {d.value}
                            </Typography>
                            <br/>
                            <Typography variant="body1" style={{fontWeight:'550'}}>
                                    {d.description}
                            </Typography>
                            </Box>
                            
                            
                        </div>
                        )}
                    </div>

                 </div>
                
                <br/>
                 <div className='employers' style={{margin:'2rem'}}>
                 <Typography variant='h4'>
                    {employment.employers.title} 
                </Typography>
                <br/>
                <div className="employersContent">
                 <div className='employerItem'>
                       <Typography variant="body1" style={{fontSize:'1.3rem', margin:'1rem', display:'flex', justifyContent:'center'}}>
                            {employment.employers.employerNames.map( (em) =>
                                <ul style={{listStyle:'none', color:'#cc6600'}}>
                                    <li>{em}</li>
                                </ul>
                            )}
                       </Typography>
                    </div>
                    
                 </div>

                 </div>
                
                <br/>
                 <div className='careers' style={{margin:'2rem'}}>
                 <Typography variant='h4'>
                    {employment.careers.title} 
                </Typography>
                <div className="careersContent">
                    <div className='careersItem'>
                       <Typography variant="body1" style={{fontSize:'1.3rem', margin:'1rem', display:'flex', justifyContent:'center'}}>
                            {employment.careers.careerNames.map( (cn) =>
                                <ul style={{listStyle:'none', color:'#cc6600'}}>
                                    <li>{cn}</li>
                                </ul>
                            )}
                       </Typography>
                    </div>
                    
                 </div>
                        
                 </div>

                 <div className='coopTable' style={{margin:'2rem'}}>
                 <Typography variant='h4' style={{margin:'2rem'}}>
                    {employment.coopTable.title} 
                </Typography>
                <div className="coopTableContent">
               {/* <DataGridForCoop/> */}
                    <DataGridForCoop/>
                    
                 </div>

                 </div>





                 


            </div>
            
        );


    }
}