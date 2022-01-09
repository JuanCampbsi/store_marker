import 'react-native';
import React from 'react';
import MapStore from '../src/pages/MapStore/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

it('renders correctly', () => {
  renderer.create(<MapStore />);
});