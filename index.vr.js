import React from 'react';
import GazeButton from 'react-vr-gaze-button'

import {
  AppRegistry,
  asset,
  Pano,
  VrButton,
  View, Text
} from 'react-vr';

export default class Skyboxes extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonIsClicked: false
        }
    }

  render() {
      const {buttonIsClicked} = this.state;

      return (
      <View>
          <Pano source={asset('chess-world.jpg')} />
          <View
              style={{
                  height: 0.2,
                  backgroundColor: '#1AC8F7',
                  transform: [{translate: [ 0, 0, -3]}],
              }}
          >
        <GazeButton onClick={() => this.setState({buttonIsClicked: true})} duration={2000}
            style={{
                flex: 1,
                backgroundColor: '1AC8F7',
                height: 0.3,
                layoutOrigin: [0.5, 0.5],
            }}>
            {time => (

                <Text>
                    {buttonIsClicked ? 'You have clicked me' : `Gaze me for ${time} milliseconds`}
                </Text>
            )}
        </GazeButton>

          </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('Skyboxes', () => Skyboxes);
