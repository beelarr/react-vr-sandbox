import React, { Component } from 'react';
import GazeButton from 'react-vr-gaze-button';

import {
    Text
} from 'react-vr';

export default class Button extends Component {
    constructor() {
        super();

        this.state = {
            buttonIsClicked: false
    }
    }

    render() {
        return (

        <GazeButton onClick={() => {
            this.setState({buttonIsClicked: true})
            console.log('Yo Button');

        }} duration={1000}
        style={{
            flex: 1,
            backgroundColor: '1AC8F7',
            height: 0.3,
            layoutOrigin: [0.5, 0.5],
        }}>
        {time => (

            <Text>
                {this.state.buttonIsClicked ? 'You have clicked me' : `Gaze at me for ${time/1000} sec`}
            </Text>
        )}
        </GazeButton>
        )
    }
}
