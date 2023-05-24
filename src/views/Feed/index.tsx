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

const Feed: React.FC<TabProps<'Feed'>> = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Feed</Text>
            </View>
        </SafeAreaView>
    )
}

export default Feed;