import React from 'react';
import getData from '../Utils/getData.js';
import PeopleModal from './PeopleModal.js';


export default class People extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            people:{},
            peopleLoaded:false
        }
    }

    componentDidMount(){
        //get data
        getData('people/')
            .then((json) =>{
                this.setState({
                    people:json,
                    peopleLoaded:true
                })
            });
    }

    render(){
        const {people, peopleLoaded} = this.state;

        //first case
        if(!peopleLoaded) return (
            <div><h2>Faculty</h2><p>Loading...</p></div>
        );

        //when we have data!
        return(
            <div>
                {/* <h2>{people.title}</h2>
                <h6>{people.subTitle}</h6>
                <h3>Faculty</h3>
                {/* loop through all of the faculty 
                <div className="peopleList">
                    {people.faculty.map( (p) =>  
                        <div className="peopleListItem">
                            
                            <PeopleModal {...p}/>
                        </div>
                    )}
                </div>

                <h3>Staff</h3>
                {/* loop through all of the faculty 
                <div className="peopleList">
                    {people.staff.map( (p) =>  
                        <div className="peopleListItem">
                            <PeopleModal {...p}/>
                        </div>
                    )}
                </div> */}

            </div>
        );


    }
}