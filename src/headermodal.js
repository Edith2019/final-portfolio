import React from 'react';

export default class HeaderModal extends React.Component {

    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            menumodalvisible: false,
        };

    }
    // toggleMenuModal() {
    //     console.log("toggle modal is running");

    //     this.setState({
    //         MenuModalVisible: !this.state.MenuModalVisible


    //     });

    // }

    // handleChange(e) {

    //     // this[target.name] = target.value;
    //     this.setState({
    //         [e.MenuModalVisible]: true
    //     });
    // }

    render() {

        return (

            <React.Fragment>
                <div className="header-modal" menumodalvisible={this.state.menumodalvisible} >
                </div>
                {/* onChange={e => this.handleChange(e)} */}
            </React.Fragment >

        );

    }

}