import firebase from "firebase";

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const logIn = () => {
  auth
    .signInWithPopup(googleProvider)
    .catch((error) => {
      console.log(error.message);
    });
};

export const logOut = () => {
  auth
    .signOut()
    .catch((error) => {
      console.log(error.message);
    });
};
