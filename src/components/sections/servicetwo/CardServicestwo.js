import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import dbData from '../../data/db';

const imgUrl = require.context('../../../assets/img', true);

const CardServicestwo = ({cntService}) => {
    return (
        <Row className="feature-boxes justify-content-center">
            {
                dbData.dbServices.slice(0,cntService).map((item, index) => {
                    return (
                        <Col key={index} sm={12} md={6} lg={4}>
                            <div className="feature-box">
                                <div
                                    className="feature-bg bg-img-c"
                                    style={{ backgroundImage: `url('${imgUrl(`./photos/${item.description[0].imgText}`)}')` }}
                                >
                                </div>
                                <div className="feature-desc">
                                    <Link to="/services" className="feature-link">
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                    <div>
                                        <Link to="/services">

                                            <h4>{item.name}</h4>
                                            <p className='text-capitalize'>more services</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default CardServicestwo;