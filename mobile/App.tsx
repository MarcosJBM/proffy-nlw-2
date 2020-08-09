import React from 'react';
import Landing from './src/pages/Landing';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
};