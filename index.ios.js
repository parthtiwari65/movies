'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

class movies extends Component {
    render() {
        return (
            <View style={ styles.global.mainContainer }>
                <View style={ styles.navBar.bar }>
                    <Text style={ styles.navBar.title }>iTunes Movies</Text>
                    <Text style={ styles.navBar.button }>Search</Text>
                </View>

                <View style={styles.global.body}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta commodi numquam, fugit accusantium
                        olores quasi molestiae, ea pariatur quis laboriosam vel earum minus, voluptatibus deserunt delectus
                        debitis! Dolorem, similique, maiores.
                    </Text>
                </View>
            </View>
        );
    }
}

var styles = require('./styles');

AppRegistry.registerComponent('movies', () => movies);
