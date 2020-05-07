import React from 'react';
import { View, Text, Image } from 'react-native';

const Greeting = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>                              Global                              </Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#663300',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        shadowColor: '#663300',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default Greeting;