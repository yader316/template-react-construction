import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { GrClose } from 'react-icons/gr';

import dbData from '../../components/data/db';


export default class ModalServices extends Component {
    render() {
        let modalStyle = {
            display: 'block',
            background: 'rgba(0,0,0,0.8)',
        }
        return (
            <div className='modal show fade' style={modalStyle}>
                <div className='modal-dialog modal-xl modal-dialog-scrollable'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3 className='modal-title text-capitalize' style={{fontWeight:'bold'}}>{this.props.title}</h3>
                            <button type='button' className="close" onClick={this.props.hide} data-bs-dismiss="modal" aria-label="Close">
                                x
                            </button>
                        </div>
                        <div className='modal-body'>
                            <div className='pt-3'>{this.props.description}</div>
                        </div>
                        <div className="modal-footer flex justify-content-between footer-bottom">
                            <div className="footer-social">
                                {
                                    dbData.dbSocialMedia.redes.map((item, index) => {
                                        return (
                                            <a key={index} href={item.url} target='_blank' className='mx-2'>
                                                <i className={item.icon}></i>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            <Link to='/contact' className='main-btn main-btn-3 text-capitalize'>
                                free estimate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}