import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Global extends React.Component {
    constructor() {
        super();
        this.state = {
            api: [],
            positive: '',
            meninggal: '',
            sembuh: '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({ positive: json.confirmed.value })
        this.setState({ sembuh: json.recovered.value })
        this.setState({ meninggal: json.deaths.value })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text style={styles.text}> Positif {this.state.positive}</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.text}> Sembuh {this.state.sembuh}</Text>
                </View>
                <View style={styles.box3}>
                    <Text style={styles.text}> Meninggal {this.state.meninggal}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative'
    },
    box1: {
        width: 120,
        height: 150,
        backgroundColor: 'yellow'
    },
    box2: {
        width: 120,
        height: 150,
        backgroundColor: 'lime'
    },
    box3: {
        width: 120,
        height: 150,
        backgroundColor: 'red'
    },
    text: {
        color: '#663300',
        fontSize: 20,
        fontWeight: 'bold'
    }
})


export default Global;