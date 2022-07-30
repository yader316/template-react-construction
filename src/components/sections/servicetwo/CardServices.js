import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import ModalServices from '../../modal/ModalServices';

import dbData from '../../data/db';

const imgUrl = require.context('../../../assets/img', true);

const CardServices = () => {
    const [modalContent, setModalContent] = useState(false);
    const [tempdata, setTempdata] = useState([]);

    const getData = (img, title, description, id) => {
        let temData = [img, title, description, id];
        console.log(temData);
        setTempdata(itme => [1, ...temData]);
        return setModalContent(true)
    }

    const getDescription = (item, index) => {
        const classes = index % 2 === 0 ? 'modalServicesColumna' : 'modalServicesColumnaReverse'
        return (
            <Row key={index} className={classes}>
                <Col md={12} lg={6} className='imgModalContent'>
                    <img src={imgUrl(`./photos/${item.imgText}`)} alt='services' style={{ width: '100%' }} />
                </Col>
                <Col md={12} lg={6} className='infoModalContent'>
                    <div>
                        <p>{item.paragraph}</p>
                        {
                            item.lists ?
                                <ul>
                                    {
                                        item.lists.map((items, index) => {
                                            return (
                                                <li key={index}>{items.list}</li>
                                            )
                                        })
                                    }
                                </ul>
                                : null
                        }
                    </div>
                </Col>
            </Row>
        )
    }
    return (
<Row className="team-members">
                    {
                        dbData.dbServices.map((item, index) => {
                            return (
                                <Col key={index} sm={12} md={6} lg={4}>
                                    <div className="team-member">
                                        <div className="member-picture-wrap">
                                            <div className="member-picture">
                                                <img src={
                                                    imgUrl(
                                                        item.description[0].imgText ?
                                                            `./photos/${item.description[0].imgText}` : './team/13.jpg'
                                                    )
                                                } alt="Services"
                                                    width={'100%'}
                                                    height={'320px'}
                                                />
                                                <div className="social-icons">
                                                    <Link to="/">
                                                        <i class="fas fa-arrow-right"></i>
                                                    </Link>
                                                    <Link
                                                        onClick={() =>
                                                            getData(
                                                                item.image,
                                                                item.name,
                                                                item.description.map((item, index) => getDescription(item, index)),
                                                                item.id,
                                                            )}
                                                    >
                                                        More Services
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="member-desc">
                                            <h3 className="name">
                                                <Link
                                                    onClick={() =>
                                                    getData(
                                                        item.image,
                                                        item.name,
                                                        item.description.map((item, index) => getDescription(item, index)),
                                                        item.id,
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            </h3>
                                            <Link
                                                className="pro"
                                                onClick={() =>
                                                    getData(
                                                        item.image,
                                                        item.name,
                                                        item.description.map((item, index) => getDescription(item, index)),
                                                        item.id,
                                                    )}
                                            >
                                                More Services
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    {
                        modalContent === true ? <ModalServices img={tempdata[1]} title={tempdata[2]} description={tempdata[3]} hide={() => setModalContent(false)} /> : ''
                    }
                </Row>
    )
}

export default CardServices;