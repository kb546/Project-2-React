import React from 'react';
import getData from '../../Utils/getData';
import DegreeModal from './DegreeModal.js';
import CustomizedAccordions from './DegreeAccordion';


  
export default class Degrees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            degrees:{},
            degreesLoaded: false
        }
    }

    componentDidMount(){
        //Get Data
        getData('degrees/')
            .then((json) => {
                this.setState({
                    degrees:json,
                    degreesLoaded:true
                })
            });
    }

    render(){
        const {degrees, degreesLoaded} = this.state;

        //First Case
        if(!degreesLoaded) return (
            <div><h2>Degrees</h2><p>Loading...</p></div>
        );

        //When we have data
        return (
            <div className='degrees' id='degrees'>
                <div className='undergrad'>
                {/* Loop through Undergraduate Degrees*/} 
                <h2>Undergraduate Degrees</h2>
                <div className="degreeList">
                    {degrees.undergraduate.map( (d) => 
                        
                            <CustomizedAccordions {...d}/>
                        
                    )}
                </div>
                </div>
                {/* Loop through Graduate Degrees*/}
                <div className='grad'>
                <h2>Graduate Degrees</h2>
                <div className="degreeList">
                    {degrees.graduate.map( (d) => 
                        <CustomizedAccordions {...d}/>
                        
                    )}
                </div>
                </div>
            </div>
        );


    }
}