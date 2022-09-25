import { Component } from "react";
import image from './profile.png';

import './card.styles.css';

class Card extends Component{
    render(){
        const {id, name, email, phone, address, website, username, company} = this.props.user;

        return(
            <div className='card-container' key={id}>
                <img src={image} alt={name} width='180px' />
                <h2>{ name }</h2>
                <h4>"{username}"</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Town: {address.city}</p>
                <p>website: {website}</p>
                <p>Company: {company.name}</p>
            </div>
        )
    }
}

export default Card;