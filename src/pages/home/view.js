/**
 * Home view
 */

import React from 'react';
import { View, FlatList } from 'react-native';
import ItemFeed from '../../components/items/feed';

// Styles
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      randomUserData: [],
      loadingExtraData: false,
      page:1
    }
  }

  componentDidMount() {
    this.LoadRandomData()
  }

  LoadRandomData = () => {
    fetch(`https://randomuser.me/api/?results=10&page=${this.state.page}`)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({ randomUserData: this.state.page === 1 ? responseJson.results : [...this.state.randomUserData, ...responseJson.results] })
    }).catch(error => {
      console.log('Error selecting random data: ' + error)
    })
  }

  LoadMoreRandomData = () =>{
    this.setState({ page: this.state.page + 1 },()=>this.LoadRandomData())
  }

  keyExtractor = (item, index) => item.email;

  render() {
    return (
      <View style={styles.view}>
        <FlatList
          data={this.state.randomUserData}
          renderItem={ItemFeed}
          style={styles.list}
          keyExtractor={this.keyExtractor}
          onEndReachedThreshold={0.5}
          onEndReached={this.LoadMoreRandomData}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default Home;