import * as React from 'react'
import { FlatList, StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native'
import { SearchBar, ButtonGroup } from 'react-native-elements'
import ImageItem from './ImageItem'
import PropTypes from 'prop-types'

const Grid = () => <Text style={styles.Text}>Grid View</Text>
const Line = () => <Text style={styles.Text}>Line View</Text>

class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      images: [],
      search: '',
      grid: true,
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
    selectedIndex ? this.setState({ grid: false }) : this.setState({ grid: true })
  }

  handleChange(search) {
    this.setState({ search, isLoading: true })

    const url = `https://pixabay.com/api/?key=16117188-0cac74679fce9662d37cfae97&q=${search}&image_type=photo&pretty=true`
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ isLoading: false, images: json.hits })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    const buttons = [{ element: Grid }, { element: Line }]
    const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search"
          onChangeText={this.handleChange.bind(this)}
          value={this.state.search}
          lightTheme
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarInput}
        />
        <View style={styles.buttons}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.ButtonGroup}
          />
        </View>
        {this.state.isLoading && (
          <View style={styles.activityIndator}>
            <ActivityIndicator size="large" color="rgba(211,106,0,1)" />
          </View>
        )}
        {this.state.search === '' || this.state.images.length === 0 ? (
          <View style={styles.activityIndator}>
            <Text style={styles.message}>
              No{'\n'}Results{'\n'}Were{'\n'}Found
            </Text>
          </View>
        ) : this.state.grid ? (
          <FlatList
            key={1}
            data={this.state.images}
            numColumns={3}
            contentContainerStyle={styles.flatListStyle}
            renderItem={({ item }) => (
              <ImageItem ifGrid={this.state.grid} navigation={this.props.navigation} img={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            key={2}
            data={this.state.images}
            renderItem={({ item }) => (
              <ImageItem ifGrid={this.state.grid} navigation={this.props.navigation} img={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  message: {
    fontSize: 28,
    textAlign: 'center'
  },
  activityIndator: {
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  flatListStyle: {
    alignItems: 'center'
  },
  searchBar: {
    backgroundColor: 'rgba(228,228,228,1)'
  },
  searchBarInput: {
    backgroundColor: '#FFFFFF'
  },
  ButtonGroup: {
    height: 35,
    width: '99%',
    borderWidth: 2,
    borderColor: 'rgba(0,134,204,1)'
  },
  Text: {
    fontSize: 20
  }
})

export default HomeScreen
