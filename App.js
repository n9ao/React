import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';


export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottle, setBottle] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [promille, setPromille] = useState(0);

  

  const bottles = Array();
  bottles.push({
    label: '1 bottle',
    value: 1
  });
  bottles.push({
    label: '2 bottles',
    value: 2
  });
  bottles.push({
    label: '3 bottles',
    value: 3
  });
  bottles.push({
    label: '4 bottles',
    value: 4
  });
  bottles.push({
    label: '5 bottles',
    value: 5
  });
  bottles.push({
    label: '6 bottles',
    value: 6
  });
  bottles.push({
    label: '7 bottles',
    value: 7
  });
  bottles.push({
    label: '8 bottles',
    value: 8
  });
  bottles.push({
    label: '9 bottles',
    value: 9
  });
  bottles.push({
    label: '10 bottles',
    value: 10
  });


  const hours = Array ();
  hours.push({
    label: '1 hour',
    value: 1
  });
  hours.push({
    label: '2 hours',
    value: 2
  });
  hours.push({
    label: '3 hours',
    value: 3
  });
  hours.push({
    label: '4 hours',
    value: 4
  });
  hours.push({
    label: '5 hours',
    value: 5
  });
  hours.push({
    label: '6 hours',
    value: 6
  });
  hours.push({
    label: '7 hours',
    value: 7
  });
  hours.push({
    label: '8 hours',
    value: 8
  });
  hours.push({
    label: '9 hours',
    value: 9
  });
  hours.push({
    label: '10 hours',
    value: 10
  });

   

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

 

  function calculate() {
    let result = 0;
    let litres = bottle * 0.33;
    let gram = litres * 8 * 4.5;
    let burning = weight / 10;
    let grams = gram  - burning * time;
    if (gender === 'male') {
      result = (grams / (weight * 0.7));
    }
    else {
      result = (grams / (weight * 0.6));
    }

    if (result < 0) {
      result = 0;
    }
    

    setPromille(result);
  }


  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput style={styles.input}
          onChangeText={text => setWeight(text)}
          placeholder="in kilograms"
          keyboardType='numeric'>

        </TextInput>
      </View>

      <View style={styles.field}>
        <Text>Bottles</Text>
        <Picker onValueChange={(itemValue) => setBottle(itemValue)}
          selectedValue={bottle}
          >
          {bottles.map((bottle, index) => (
            <Picker.Item key={index} label={bottle.label}
              value={bottle.value} />
          ))}



        </Picker>
        



      </View>

      <View style={styles.field}>
        <Text>Time</Text>
        <Picker onValueChange={(itemValue) => setTime(itemValue)}
          selectedValue={time}>

          {hours.map((time, index) => (
            <Picker.Item key={index} label={time.label}
              value={time.value} />
          ))}



        </Picker>
        



      </View>
    
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm 
        style={styles.radio}
        buttonSize={10}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}>

        </RadioForm>
        <Text>Promilles</Text>
        <Text>{promille.toFixed(2)}</Text>
        

      </View>
      
      <Button onPress={calculate} title="Calculate"></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,

  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft: 10,
  },
  radio: {
    marginTop: 10,
    marginBottom: 10
  }
});
