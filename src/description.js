import React from 'react';

export default class Description extends React.Component {
    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            // name: 'Edith in intro',
        };

    }





    render() {

        return (

            <React.Fragment>
                <div className="description-container">
                    <div className="description-text">
                        <h1 className="description-text-t">who am i?</h1>
                        <p className="description-text-p">blblblblblblblblblblblblblblblghghghghghghblbblblblblblblblblbllblblb</p>
                    </div>

                    <div className="description-links">
                        <h1 className="description-links-t">find more</h1>
                        <div className="description-links-l">
                            <a className="description-links-l-l" href="https://www.linkedin.com/in/edith-chevallier/">linkedin</a>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <a className="description-links-l-g" href="https://github.com/Edith2019">github</a>
                        </div>

                    </div>
                </div >
            </React.Fragment >

        );


    }
}