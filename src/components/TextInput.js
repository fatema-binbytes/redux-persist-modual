import React, { Component } from 'react'
import { TextInput } from 'react-native'
import styles from './textInput-style'
 
class TextInputComponent extends Component {
    render() {
        const { placeholder, onChangeText, defaultValue } = this.props
        return (
            <TextInput 
                style = {styles.txt}
                placeholder = {placeholder} 
                {...this.props}
                placeholderTextColor = '#ffffff99'
                onChangeText = { onChangeText }
            />  
        )
    }
}

export default TextInputComponent