import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import dbData from '../data/db';


class Navmenu extends Component {
    render() {

        return (
            <ul>
                {
                    dbData.dbMenu.map((item, index) => {
                        return(
                            <li key={index} className=''>
                                <Link to={`${item.link}`}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default Navmenu;