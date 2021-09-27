import React from 'react';
import { FlatList, View } from 'react-native';
import Subtitle from '../../../EmotionComponents/Subtitle';
import SettingsThemeDetailsShow from '../SettingsThemeDetailsShow/SettingsThemeDetailsShow';


const SettingsThemeDetails = (props) => {
	const{colors,state,type}=props;
	
	return (
		<View style={{height:158}}>
		<Subtitle text={type} textColor="lavenderblush" />
		<FlatList
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				marginTop: 1,
				paddingBottom: 0,
				marginBottom:0

			}}
			numColumns={10}
			keyExtractor={(item) => `${item.id}`}
			data={colors}
			renderItem={itemData =>
				<SettingsThemeDetailsShow color={itemData.item.color} id={itemData.item.id}  state={state}></SettingsThemeDetailsShow>
			}
		>
		</FlatList>
		</View>
	);
};

export default SettingsThemeDetails;