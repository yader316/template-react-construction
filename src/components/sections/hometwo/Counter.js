import React, { useState } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import dbData from '../../data/db';

const counterblock = [
    { icon: 'fal fa-hard-hat', count: `${dbData.dbPrincipal.exprYears}`, title: 'Of Experience',plusIcon:'Years' },
    { icon: 'fal fa-history', count: '100', title: 'On Time',plusIcon:'%' },
    { icon: 'fal fa-user-hard-hat', count: '100', title: 'Professionals',plusIcon:'%' },
    { icon: 'fal fa-map-marked-alt', count: `${dbData.dbPrincipal.miles}`, title: `Around ${dbData.dbPrincipal.addresses[0].address}`,plusIcon:'Miles' },
]

function Counter(props) {
    const [focus, setFocus] = useState(false)

    return (
        <section className="fact-section-two">
            <div className="container">
                <div className="fact-two-inner">
                    <div className="fact-boxes row justify-content-between align-items-center">
                        {counterblock.map((item, i) => (
                            <div key={i} className="col-lg-3 col-6">
                                <div className="fact-box fact-box-two text-center mb-40">
                                    <div className="icon">
                                        <i className={item.icon} />
                                    </div>
                                    <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span className="counter" ref={countUpRef} />
                                                <VisibilitySensor
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setFocus(true);
                                                        }
                                                    }}
                                                >
                                                    <span className="plus-icon">+</span>
                                                </VisibilitySensor>
                                            </div>
                                        )}
                                    </CountUp>
                                    <p className="title">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counter;