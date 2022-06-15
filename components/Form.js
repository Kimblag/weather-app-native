import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const Form = ({onSubmit}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Enter a city name and press the button</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: '#fed',
    },
    heading: {
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    }
})


export default Form
