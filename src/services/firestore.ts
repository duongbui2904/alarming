import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
	apiKey: 'AIzaSyAMmVlEG_K7Fvq-0x9gzhD5IeqCR_0XrD8',
	authDomain: 'note-taking-app-900cb.firebaseapp.com',
	projectId: 'note-taking-app-900cb',
	storageBucket: 'note-taking-app-900cb.appspot.com',
	messagingSenderId: '704659226705',
	appId: '1:704659226705:web:ea89eb3341e79bf7f3b870',
});

export const db = getFirestore(firebaseApp);
