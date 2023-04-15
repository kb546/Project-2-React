import React from 'react';
import getData from '../../Utils/getData';
import MinorModal from './MinorModal.js';
import MinorGridLayout from './MinorGridLayout.js';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class Minors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            minors:{},
            minorsLoaded: false
        }
    }

    componentDidMount(){
        //Get Data
        getData('minors/')
            .then((json) => {
                this.setState({
                    minors:json,
                    minorsLoaded:true
                })
            });
    }

    render(){
        const {minors, minorsLoaded} = this.state;

        //First Case
        if(!minorsLoaded) return (
            <div><h2>minors</h2><p>Loading...</p></div>
        );

        //When we have data
        return (
            <div id='minors'><h2>Minors</h2>
            
            
            <div className='minorList'>
            {minors.UgMinors.map( (m) =>
            <div className='minorListItem'>
                <MinorModal {...m}/>
            </div>
            )}
            </div>
            
            </div>
            
        );


    }
}