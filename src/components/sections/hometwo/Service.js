import React from 'react'
import {Row, Col} from 'react-bootstrap'
import line1 from '../../../assets/img/lines/12.png'
import line2 from '../../../assets/img/lines/11.png'

import dbData from '../../data/db'

const serviceblock = [
    { icon: 'flaticon-chart', title: 'Creative Idea' },
    { icon: 'flaticon-graph-1', title: 'Marketing Strategy' },
    { icon: 'flaticon-diagram', title: 'UX/UI Strategy' },
    { icon: 'flaticon-money', title: 'Financial Plan' },
    { icon: 'flaticon-diamond', title: 'Design Strategy' },
    { icon: 'flaticon-teamwork-1', title: 'Relationship' },
    { icon: 'flaticon-setup', title: 'Market Analysis' },
    { icon: 'flaticon-pie-chart', title: 'Online Support' },
]

const imgUrl = require.context('../../../assets/img', true);

function Service(props) {
    return (
        <section className="service-section shape-style-two service-line-shape section-gap grey-bg">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-50">
                    <h2 className="title text-capitalize">follow us</h2>
                </div>
                {/* Services Boxes */}
                <Row className="service-boxes justify-content-center">
                    {dbData.dbSocialMedia.directorio.map((item, i) => (
                        <Col key={i} sm={12} md={4} lg={3} className="wow fadeInUp d-flex align-items-center">
                            <a href={item.url} target="_blank" className='py-3'>
                                <img src={imgUrl(`./directorios/${item.images}`)} alt="Icon" />
                            </a>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="line-one">
                <img src={line1} alt="line-shape" />
            </div>
            <div className="line-two">
                <img src={line2} alt="line-shape" />
            </div>
        </section>
    );
}

export default Service;