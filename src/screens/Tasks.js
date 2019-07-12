import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text, Icon, Fab, Button } from 'native-base'; 
 


export default class Tasks extends Component {
  render() {
    return (
      <Container>
        <View style={styles.container}> 
          <Fab 
            style={{ backgroundColor: '#5067FF', flex: 3 }}
            position="bottomRight">
            <Icon name="plus"/>
          </Fab>
        </View>
      </Container>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  tasks_title: {
    color: 'red',
    textAlign: "center",
    marginTop: 20,
  },

}); 