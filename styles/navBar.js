'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default const global = StyleSheet.create ({
    bar: {
        backgroundColor: '#2a3744',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'column'
    },
    title: {
        color: '#fefefe',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        color: '#fefefe',
        textAlign: 'right'
    }
});
