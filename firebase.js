// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDepegGUmybDew4ln7PYUnwJ3eBvCoaoIo',

  authDomain: 're-todoist-63082.firebaseapp.com',

  databaseURL: 'https://re-todoist-63082-default-rtdb.firebaseio.com',

  projectId: 're-todoist-63082',

  storageBucket: 're-todoist-63082.appspot.com',

  messagingSenderId: '1085111475842',

  appId: '1:1085111475842:web:4f2abd3abebb85553a5e9b',

  measurementId: 'G-DG4QFB2DK2',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export { app as firebase };
