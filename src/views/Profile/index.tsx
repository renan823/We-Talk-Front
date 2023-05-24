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

const Profile: React.FC<TabProps<'Profile'>> = () => {
  return(
    <SafeAreaView>
      <View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile;