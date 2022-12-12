import React from "react";
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View>
            <Text> Home </Text>
            <Button
                title="Search"
                onPress={()=>{
                    navigation.navigate('Search');
                }}
            />
        </View>
    )
}

export default Home;