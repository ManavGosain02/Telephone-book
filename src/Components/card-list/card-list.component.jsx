import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component{
    render(){
        const { users } = this.props;
        

        return (
            <div className='card-list'>
                {users.map((user) => 
                (
                    <Card user={user}/>
                ))}
            </div>
        );
    }
}

export default CardList;