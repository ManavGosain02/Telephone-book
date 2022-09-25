import { Component } from 'react';
import './heading.styles.css';

class Heading extends Component{
    render(){
        const headingText = 'Phone book';
        return (
            <div className='heading-title'>
                <h1>{ headingText }</h1>
            </div>
        )
    }
}

export default Heading