import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Container, Icon, Fab, Card, Text, CardItem, Content, Left, Right, ListView } from 'native-base';
import axios from 'axios';



export default class Tasks extends Component {
	constructor(props) {
		super(props)
		this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xLjI5L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNTYzMDkxMDkxLCJleHAiOjE1NjMwOTQ2OTEsIm5iZiI6MTU2MzA5MTA5MSwianRpIjoiTlFXaXNzTENXZlVuMnJGaiIsInN1YiI6MiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.kUZa1neQrBx43JvxZpwBcbeHNHp1rKiBb5agWJua1mY';
		this.state = {
			data: [],
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

		axios.get('http://192.168.1.29:8008/api/todolist/tasks?offset=' + this.state.offset + '&limit=' + this.state.limit, config
		).then(response => {
			console.log(response)
			this.setState({
				data: [...this.state.data, ...response.data.results],
				offset: this.state.data.length

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
				<Card>
					<CardItem>
						<Text>
							{item.title}
						</Text>
					</CardItem>
				</Card>
			</View>
		)
	}
	render() {
		return (
			<Container>
				<View style={styles.container}>
					<Fab
						style={{ backgroundColor: '#5067FF', flex: 3 }}
						position="bottomRight">
						<Icon name="plus" />
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