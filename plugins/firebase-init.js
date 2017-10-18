import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyD8Bvb6RMly9jVy783RuLuOsILcFtqcyDs',
  authDomain: 'nsf1-9e7ac.firebaseapp.com',
  databaseURL: 'https://nsf1-9e7ac.firebaseio.com',
  projectId: 'nsf1-9e7ac',
  storageBucket: 'nsf1-9e7ac.appspot.com',
  messagingSenderId: '1074718670658'
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
