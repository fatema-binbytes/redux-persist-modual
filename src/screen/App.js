import React, { Component } from 'react'
import { View,TouchableOpacity, Text, ImageBackground, Image } from 'react-native'
import { connect } from 'react-redux'
import { user } from '../store/action'
import styles from './app-style'
import TextInput from '../components/TextInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.name,
      password: this.props.user.password,
    }
  }

  render() {
    return (
      <ImageBackground style={styles.container}
        source={require('../../images/back.jpeg')}
        resizeMode={'cover'}>
        <View style={styles.iconContainer}>
          <Image
            style={{height: 200,width:200 }}
              source={require('../../images/logo.png')}
            />
        </View>
        <View style={{ flex:1 }}>
          <TextInput
            defaultValue={this.state.name}
            placeholder={"Enter userName"}
            onChangeText={(text) => this.setState({ name: text })}/>
          <TextInput
            defaultValue={this.state.password}
            placeholder={"Enter password"}
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry={true}/>
          <TouchableOpacity
            style={ styles.touchableOpacity }
            onPress={() => this.props.login(this.state.name, this.state.password)}>
              <Text style={styles.touchText}>{'Sign In'}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = ({
  login: user.checkUser
})

const AppWrapper = connect (
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppWrapper