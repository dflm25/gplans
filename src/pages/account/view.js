/**
 * Home view
 */

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Components
import SignForm from '../../components/form/signIn';

// Styles
import styles from './styles';

function Home () {
  const handleOpenModal = () => {

  }

  return (
    <View style={styles.view}>
      <SignForm />
    </View>
  );
}

export default Home;