import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a3ivIBiRMi9A_F9kjUm2cieN-XYnK12jrQ&usqp=CAU",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off the sizzles",
        price: "$19.20",
        image: "https://i0.wp.com/d1eha6vqc5cqta.cloudfront.net/2014/06/tandoori-chicken-2.jpg?fit=1366%2C911&ssl=1",
    },
    {
        title: "Chilaquiles",
        description: "Chilaguiles with cheese and sauce. A delicious mexican dish",
        price: "$14.50",
        image: "https://www.potatogoodness.com/wp-content/uploads/2019/10/cropped_potato_chilaquiles_verde.jpg",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a3ivIBiRMi9A_F9kjUm2cieN-XYnK12jrQ&usqp=CAU",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a3ivIBiRMi9A_F9kjUm2cieN-XYnK12jrQ&usqp=CAU",
    },   
];

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600',
    },
});

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index)=> (
                <View key={index}>
                    <View style ={styles.menuItemStyle}>
                        <FoodInfo food = {food}/>
                        <FoodImage food = {food}/>
                    </View>
                    <Divider width={0.5} orientation="vertical" style = {{marginHorizontal : 20}}/>
                </View>
            
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style = {{width:240, justifyContent: 'space-evenly'}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source ={{ uri: props.food.image}} style = {{width: 100, height: 100, borderRadius: 8}} />
    </View>
)