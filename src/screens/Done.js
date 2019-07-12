import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text } from 'native-base';
import axios from 'axios';

export default class Done extends Component {
  constructor(props) {
    super(props);
    this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xLjI5OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1NjI5MTgzMjEsImV4cCI6MTU2MjkyMTkyMSwibmJmIjoxNTYyOTE4MzIxLCJqdGkiOiJUTHExWVBhVlZRRGRXNTJJIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.LnDvPHWJUH55_WWTMH5T0GHKGpd4B5yK8IZW2CaxswY';
    this.state = {
      dataSource: [],
      offset: 0,
      limit: 5
    }
  }
  getData = () => {
    const config = {
      headers: {
        'Authorization': "bearer " + this.token,
        'Accept': 'application/json'
      }
    }
     
    const response = axios.get('http://192.168.1.29:8000/api/todolist?offset=' + this.state.offset + '&limit=' +
      this.state.limit, config
    ).then(response => {
      console.log(response)
      this.setState({
        data: { ...this.state.data, ...response.data.results }
      });
      console.log(this.state)
    }).catch(error => {
      console.log(error)
    })
  }
  componentDidMount() {
    this.getData(0, 10)
  }
  renderItem = ({ item }) => {
    return (
      <View>
        <Text>
          {item.title}
        </Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    textAlign: "center"
  }
}); 