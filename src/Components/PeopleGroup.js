import React from 'react';
import getData from '../Utils/getData.js';
import PeopleModal from './PeopleModal.js';


export default class PeopleGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pGroup: props.pepGroup,
            title: props.title
        }
    }

    render(){
        const {pGroup, title} = this.state;
        //when we have data!
        return(
            <div>
                <h3>{title}</h3>
                {/* loop through all of the faculty */}
                <div className="peopleList">
                    {pGroup.map( (p) =>  
                        <div className="peopleListItem">
                            
                            <PeopleModal {...p}/>
                        </div>
                    )}
                </div>
            </div>
        );


    }
}