import React from 'react';
import { FlatList } from 'react-native';
import ThemeBySideShow from '../ThemeBySideShow/ThemeBySideShow';

const ThemeBySide = () => {
 const colors=[
     { 
       id:1,
       name:'Blue Yellow Mint Red',
       imgsrc:'https://i.ibb.co/3vzSvk0/Red-crayola-naples-yellow-mint-cream-and-oxford-blue-color-combination.jpg',
       textName:'Naples Yellow ',
       textColor:'#F9DC5C',
       buttonName:'Red Crayola',
       buttonColor:'#ED254e',
       drawerName:'Oxford Blue ',
       drawerColor:'#011936',
       themeColor:'#F4FFFD',
       themeName:'Mint Cream ', 
    },
    { 
        id:2,
        name:'Blue Sky Blue Coffee ',
        imgsrc:'https://i.ibb.co/tm4JZk3/color-Combination-68.jpg',
        textName:'Baby Blue ',
        textColor:'#B3C7D6',
        buttonName:'Coffee ',
        buttonColor:'#D9B48F',
        drawerName:'Deep Blue ',
        drawerColor:'#2460A7',
        themeName:'Northern Sky ', 
        themeColor:'#85B3D1',
     },
     { 
        id:3,
        name:'Gold Dijon Honey Chesnut ',
        imgsrc:'https://i.ibb.co/d4Yxdv8/color-Combination-69.jpg',
        textName:'Chestnut ',
        textColor:'#6E4C1E',
        buttonName:'Dijon ',
        buttonColor:'#DDB65D',
        drawerName:'Honey ',
        drawerColor:'#EEB238',
        themeColor:'#FFD653',
        themeName:'Habañero Gold ', 
     }
 ]  
     return (
        <>

		<FlatList
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				marginTop: 1,
				paddingBottom: 0,
				marginBottom:0
			}}
			keyExtractor={(item) => `${item.id}`}
			data={colors}
			renderItem={itemData =>
                <ThemeBySideShow color={itemData.item} id={itemData.item.id}></ThemeBySideShow>
			}
		>
		</FlatList>
</>
    );
};

export default ThemeBySide;