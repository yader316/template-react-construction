import React from 'react'
import { Link } from 'react-router-dom'
import CardServicestwo from '../servicetwo/CardServicestwo'

import dbData from '../../data/db'

function Project(props) {
    return (
        <section className="project-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8">
                        {/* Section Title */}
                        <div className="section-title left-border">
                            <span className="title-tag">{dbData.dbFrases[0].frase}</span>
                            <h2 className="title text-capitalize">our services</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4">
                        <div className="view-moore-btn text-md-right mt-30 mt-md-0">
                            <Link to="/services" className="main-btn text-capitalize">View all services</Link>
                        </div>
                    </div>
                </div>
                {/* Project Boxes */}
                <CardServicestwo cntService='6' />
            </div>
        </section>
    );
}

export default Project;