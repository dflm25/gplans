/**
 * Splash screen
 */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Helpers
import { restartApp } from '../../utils/helpers';
import * as storage from '../../utils/storage';

// Data
import data from './data';

// Styles
import styles from './styles';

function SplashScreen () {
  const [currentStep, setCurrentStep] = useState(0);
  const [ steps, setSteps] = useState(data);

  const nextStep = () => {
    setCurrentStep(currentStep >= 2 ? 2 : currentStep+1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep <= 0 ? 0 : currentStep-1)
  }

  // Restart App
  const restart = () => storage.setStorage('boarding', 'true').then(() => restartApp());

  return (
    <View style={styles.container}>
      <Image source={steps[currentStep].image} style={styles.stepImage} resizeMode="contain"/>
      <View style={styles.stepIndicatorView}>
        {steps.map((step, index) => {
          return (
            <View key={`image-${step.uuid}`} style={{...styles.stepIndicator, 
              width: currentStep === index ? 40 : 30,
              backgroundColor:  currentStep === index ? "#283593" : "gray"
            }}></View>
          )
        })}
      </View>
      <Text style={styles.title}>{steps[currentStep].title}</Text>
      <Text style={styles.description}>{steps[currentStep].description}</Text>
      <View style={styles.navigationView}>
        {
          currentStep > 0 ? 
            <TouchableOpacity 
              onPress={() => prevStep()}
              style={{...styles.navigationBtn, borderTopEndRadius: 20, borderBottomEndRadius:20,}}>
              <Text style={styles.navigationBtnTxt}>Back</Text>
            </TouchableOpacity>
            :
            <View></View>
        }
        {
          currentStep < 2 ? (
            <TouchableOpacity 
              onPress={() => nextStep()}
              style={{...styles.navigationBtn, borderTopStartRadius: 20, borderBottomStartRadius:20}}>
              <Text style={styles.navigationBtnTxt}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              onPress={() => restart()}
              style={{...styles.navigationBtn, borderTopStartRadius: 20, borderBottomStartRadius:20}}>
              <Text style={styles.navigationBtnTxt}>Start</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

export default SplashScreen;