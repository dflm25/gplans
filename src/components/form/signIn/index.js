/**
 * Home view
 */

import React from 'react';
import { Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

// Styles
import styles from './styles';

function Home () {
  const { handleSubmit, control, errors } = useForm();

  // onSubmit method
  const onSubmit = (data) => {
    console.log(data, 'data');
  };

  const onHandleGoto = () => {
    console.log('data');
  };
  
  return (
    <View style={styles.content}>
      <Image 
        source={require('../../../assets/img/health.png')}
        style={styles.logo}
        resizeMode="contain" 
      />

      <Text style={styles.label}>Email</Text>
      <Controller
        id="email"
        name="email"
        defaultValue=""
        control={control}
        render={({ onChange, value }) => (
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholder="Email"
            />
        )}
      />

      <Text style={styles.label}>Password</Text>
      <Controller
        id="password"
        name="password"
        defaultValue=""
        control={control}
        render={({ onChange, value }) => (
          <TextInput
              style={styles.inputText}
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholder="Password"
              secureTextEntry={true}
          />
        )}
      />
      <TouchableWithoutFeedback onPress={onHandleGoto}>
        <Text style={styles.labelPassword}>Olvidaste tu contrasena</Text>
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <View style={styles.button}>
          <Text style={styles.textBtn}>Ingresar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Home;