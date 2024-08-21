const signupForm = document.getElementById('signup')!;
const signinForm = document.getElementById('signin')!;
const signinLink = document.getElementById('signin-link')!;
const signupLink = document.getElementById('signup-link')!;

signupLink?.addEventListener('click', () => {
  signupForm.style.display = 'grid';
  signinForm.style.display = 'none';
});

signinLink?.addEventListener('click', () => {
  signinForm.style.display = 'grid';
  signupForm.style.display = 'none';
});

//inputs
const emailSignIn = document.getElementById('email-signin');
const passSignIn = document.getElementById('pass-signin')!;
const emailSignUp = document.getElementById('email-signup')!;
const passSignUp = document.getElementById('pass-signup')!;
//btns
const googleRegister = document.getElementById('google-register')!;
const signInBtn = document.getElementById('signin-btn')!;
const signupBtn = document.getElementById('signup-btn')!;
const logoutBtn = document.getElementById('logout-btn')!;
//username
const userName = document.getElementById('user-name')!;
const userEmail = document.getElementById('user-mail')!;
const profilePic = document.getElementById('photo-profile')!;

//firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBFOe8sbx_Q_7bWr5ll4zWMuM4u-2D1EOM',
  authDomain: 'yarta-fb208.firebaseapp.com',
  projectId: 'yarta-fb208',
  storageBucket: 'yarta-fb208.appspot.com',
  messagingSenderId: '284709779467',
  appId: '1:284709779467:web:81130969d3182a3a952f0e',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//create user
signupBtn?.addEventListener('click', () => {
  createUserWithEmailAndPassword(
    auth,
    (<HTMLInputElement>emailSignUp).value,
    (<HTMLInputElement>passSignUp).value
  )
    .then((userCredential:any) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      console.log((<HTMLInputElement>emailSignUp).value);
      console.log((<HTMLInputElement>passSignUp).value);
      window.location.href = "../Dashbord/user_dash.html"
      // ...
    })
    .catch((error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
});

//sign in
signInBtn?.addEventListener('click', () => {
  signInWithEmailAndPassword(
    auth,
    (<HTMLInputElement>emailSignIn).value,
    (<HTMLInputElement>passSignIn).value
  )
    .then((userCredential:any) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location.href = "../Dashbord/user_dash.html"
      // ...
    })
    .catch((error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});


//google
googleRegister?.addEventListener("click", () => {
  signInWithPopup(auth, provider)
  .then((result: any) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    window.location.href = "../Dashbord/user_dash.html"
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error:any) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})

onAuthStateChanged(auth, (user: any) => {
  if (user) {
    updateUserProfile(user);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    return uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const updateUserProfile = (user: any) => {
  const username = user.displayName;
  const useremail = user.email;
  const userPicture = user.photoURL;

  userName.textContent = username;
  userEmail.textContent = useremail;
  (profilePic as HTMLImageElement).src = userPicture;
}

//logout
logoutBtn?.addEventListener("click", () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "../register/register.html"
  }).catch((error: any) => {
    // An error happened.
  });
})
