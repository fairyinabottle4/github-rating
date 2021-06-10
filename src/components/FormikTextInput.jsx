import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorBox: {
    position: 'absolute',
    height: 50,
    backgroundColor: 'white',
    borderColor: '#d73a4a',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  textBox: {
    position: 'absolute',
    height: 50,
    backgroundColor: 'white',
    borderColor: '#111111',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  errorText: {
    color: '#d73a4a'
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <>
      <TextInput
        position='relative'
        placeholder={name}
        style={showError ? styles.errorBox : styles.textBox}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
