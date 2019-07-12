import React, { Component } from 'react';
import { StyleSheet, FlatList, View, ListView } from 'react-native';
import { Container, Body, Header, Title, Content, Left, Right, Tab, Tabs, Text } from 'native-base';
import Tasks from './src/screens/Tasks';
import Done from './src/screens/Done';

import axios from 'axios';

export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header hasTabs>
          <Body>
            <Title style={styles.title}>ToDoApp</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Tasks">
            <Tasks />
          </Tab>
          <Tab heading="Done">
            <Done />
          </Tab>

        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasks_title: {
    color: 'red',
    textAlign: "center",
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold'
  }
});
