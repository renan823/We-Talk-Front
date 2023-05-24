import React from 'react';
import {
    SafeAreaView,
    Text,
    View
} from 'react-native';

//Styles
import styles from './styles';

//Navigation
import { TabProps } from '../../configs/navigation.config';

const Home: React.FC<TabProps<'Home'>> = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;