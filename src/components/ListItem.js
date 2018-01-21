import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.28
import { CardSection } from './common';

class ListItem extends Component {
	onRowPress() {
		Actions.recipeView({ recipe: this.props.recipe });
	}

	render() {
		const { name, cook, prep, servings } = this.props.recipe;

		return (
			<TouchableHighlight onPress={this.onRowPress.bind(this)}>
      <View>
			<CardSection style={{ flexDirection: 'column', flex: 1 }}>
			<Text style={styles.titleStyle}>
				{name}
			</Text>
			<View >
				<Text style={styles.textStyle}>
					Prep Time: {prep}
				</Text>
				<Text style={styles.textStyle}>
					Cook Time: {cook}
				</Text>
				<Text style={styles.textStyle}>
					Servings: {servings}
				</Text>
			</View>
			</CardSection>
      </View>
			</TouchableHighlight>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
		fontFamily: 'Lobster'
	},
	textStyle: {
	  fontFamily: 'OpenSans'
	}
};

export default ListItem;
