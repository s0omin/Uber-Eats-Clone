import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';

const YELP_API_KEY = 'tmUInmtmJ1JMxPpcFP25RdFuhdEbHBdGiNHJahT7gbgLjwu1vp9cLfKfakgWMFrdiEMTRrgRoB_XR320YHdVOLCiBLn_uqAlAuNhlgie6IyM6E9mXIe15wTw1iZiYXYx';

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState('San Francisco')
    const [activeTab, setActiveTab] =useState('Delivery');



    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };  
        //get the yelp api
        return fetch(yelpUrl, apiOptions)
            //get the json format
            .then((res) => res.json()) 
            // pull the json format and set the RestaurantData to all the restaurants you just got
            .then((json) => 
                setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())))
            );
    
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    },[city, activeTab]);
 
    return (
        <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
            <View style={{backgroundColor:"white", padding: 15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation = {navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs/>
        </SafeAreaView>
    );

}
