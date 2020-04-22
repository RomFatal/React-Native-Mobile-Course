import * as React from 'react'
import { StyleSheet, View, Image, AsyncStorage } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

class BigImg extends React.Component {
  constructor() {
    super()
    this.state = {
      ifInFavorite: false
    }
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem(this.props.route.params.img.id.toString())
    if (value !== null) {
      this.setState({ ifInFavorite: true })
    }
  }

  async storeData() {
    await AsyncStorage.setItem(
      this.props.route.params.img.id.toString(),
      JSON.stringify(this.props.route.params.img)
    )
    this.setState({ ifInFavorite: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: this.props.route.params.img.largeImageURL }} />
        {!this.state.ifInFavorite && (
          <Icon
            name="md-heart-empty"
            type="ionicon"
            size={80}
            color="red"
            containerStyle={styles.icon}
            onPress={() => {
              this.storeData()
            }}
          />
        )}
      </View>
    )
  }
}

BigImg.propTypes = {
  route: PropTypes.object
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  icon: {
    alignItems: 'center',
    paddingBottom: 90
  }
})

export default BigImg
