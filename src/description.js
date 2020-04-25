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
                <div className="description-container" id="about">
                    <div className="description-text">
                        <h1 className="description-text-t">about</h1>
                        <p className="description-text-p">hi! i am Edith. a fullstack developer based in berlin available worldwide. i speak javascript, html, css, vue.js, react.js, english, french and german `(noch ein spirtz bitte)`
                        i am a former online 
                        i enrolled in a 12-weeks bootcamp and i am now out on the other side, ready to take up the next challenge. 

                        Fresh fullstack developer just out of  Spiced Academy programming bootcamp, I am a quick learner eager to master the tangle of Javascript in a silk CSS wrap. Currently exploring in-depth vue.js and React frameworks, I aim to provide a solid technical support to the team together with a strong communicative mindset for the organization’s growth.
                        
                         </p>

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