import React from 'react';
import getData from '../../Utils/getData';
import Typography from '@mui/material/Typography';

export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            about:{},
            aboutLoaded: false
        }
    }

    componentDidMount(){
        //Get Data
        getData('about/')
            .then((json) => {
                this.setState({
                    about:json,
                    aboutLoaded:true
                })
            });
    }


    render(){
        const {about, aboutLoaded} = this.state;

        //First Case
        if(!aboutLoaded) return (
            <div><h2>Employment</h2><p>Loading...</p></div>
        );

        //When we have data
        return(
            <div className='about' id='about'>
                 <Typography variant='h3' component='h1' gutterBottom>
                     {about.title}
                 </Typography>
            
                <div>
                    <Typography variant='body1' paragraph='true'>
                    {about.description}
                    </Typography>
                    <p></p>
                    <div className="quoteBubble">
                    <p>{about.quote}</p>
                    <p>--{about.quoteAuthor}</p>
                    </div>
                </div>
            </div>  
        );
    }
}