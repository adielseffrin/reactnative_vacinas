import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB9U5sbyzky4zJkQmV3H2rA0dtyrGLPJC4",
    authDomain: "controle-de-vacinas.firebaseapp.com",
    databaseURL: "https://controle-de-vacinas.firebaseio.com",
    projectId: "controle-de-vacinas",
    storageBucket: "controle-de-vacinas.appspot.com",
    messagingSenderId: "780552766274",
    appId: "1:780552766274:web:faca042e4233cee661bedb",
    measurementId: "G-7STGBGVJ50"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();