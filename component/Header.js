import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>                         Data Covid-19                       </Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#996633',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#996633',
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
export default Header;