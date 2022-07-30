import React from 'react'

import dbData from '../../data/db'

const imgUrl = require.context('../../../assets/img', true);



function Workingprocess(props) {

    return (
        <section className="working-process-section grey-bg">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 order-lg-1 order-2">
                        <div className="process-text">
                            {/* Section Title */}
                            <div className="section-title left-border mb-30">
                                <span className="title-tag">{dbData.dbFrases[4].frase}</span>
                                <h2 className="title">{dbData.dbFrases[1].frase}</h2>
                            </div>
                            <p>
                                {dbData.dbHome[1].paragraph}
                            </p>
                            {/* process-loop */}
                            <div className="process-loop">
                                {dbData.dbValues.map((item, i) => (
                                    <div key={i} className="single-process wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                        <div className="icon">
                                            <i className="fal fa-hard-hat"></i>
                                            <span>{i + 1}</span>
                                        </div>
                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 order-lg-2 order-1">
                        <div className="process-video bg-img-c" style={{ backgroundImage: `url('${imgUrl('./photos/photo-3.jpg')}')` }}>
                            <div className="video bg-img-c wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="400ms" style={{ backgroundImage: `url('${imgUrl('./photos/photo.jpg')}')` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="working-circle" />
        </section>
    );
}

export default Workingprocess;
