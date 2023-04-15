//this is going to be our tabs!
//App > PeopleTabs > PeopleGroup > PeopleModal

import React from 'react'
import { Tab } from 'semantic-ui-react'
import getData from '../Utils/getData.js';
import PeopleGroup from './PeopleGroup.js';



//build this as a class
export default class PeopleTab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            people:{},
            peopleLoaded:false
        }
    }
    componentDidMount(){
        getData('people/')
            .then((json) =>{
                this.setState({
                    people:json,
                    peopleLoaded:true
                });
            });
    }

    render(){
        const {people, peopleLoaded} = this.state;

        const panes = [
            { 
                /*the 2 key="" below are VERY IMPORTANT, if the interaction
                doesn't change the state, then React will NOT redraw, so you can force it 
                to redraw if there is a key change.
                */
                menuItem: 'Faculty', 
                render: () => <Tab.Pane><PeopleGroup pepGroup={people.faculty} 
                title="Faculty" key="1"/></Tab.Pane> },
            { 
                menuItem: 'Staff', 
                render: () => <Tab.Pane><PeopleGroup pepGroup={people.staff}
                title="Staff" key="2"/></Tab.Pane> 
            }
          ]
        const color = 'green';

        //this return is ONLY for display before data is loaded
        if(!peopleLoaded) return <div><h1>Loading...</h1></div>;

        //this return is for after the data is loaded!
        return(
            <div>
                <h1>{people.title}</h1>
                <h3>{people.subTitle}</h3>
                <Tab panes={panes} />
            </div>
        );

    }
}


/*
const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic
*/