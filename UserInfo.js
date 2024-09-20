import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const UserInfo = () => {
  const [fullName, setFullName] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const handleMonthChange = (text) => {
    const numValue = parseInt(text);
    if (text === '' || (numValue >= 1 && numValue <= 12)) {
      setMonth(text);
    }
  };

  const handleDayChange = (text) => {
    const numValue = parseInt(text);
    if (text === '' || (numValue >= 1 && numValue <= 31)) {
      setDay(text);
    }
  };

  const handleContinue = () => {
    // Handle form submission here
    console.log('Full Name:', fullName);
    console.log('Date of Birth:', `${month}/${day}/${year}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter personal details</Text>
        
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
        />

        <Text style={styles.label}>Date of Birth:</Text>
        <View style={styles.dateContainer}>
          <TextInput
            style={[styles.dateInput, styles.monthInput]}
            value={month}
            onChangeText={handleMonthChange}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
          />
          <TextInput
            style={[styles.dateInput, styles.dayInput]}
            value={day}
            onChangeText={handleDayChange}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
          />
          <TextInput
            style={[styles.dateInput, styles.yearInput]}
            value={year}
            onChangeText={setYear}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 110,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  monthInput: {
    width: '30%',
  },
  dayInput: {
    width: '30%',
  },
  yearInput: {
    width: '35%',
  },
  button: {
    backgroundColor: '#8DBA76',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserInfo;