import firebase from "../../database/config.js";

export function ComponentDidMount(setUser) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(user);
    } else {
      setUser("");
    }
  });
}

export function OnLogin(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => console.log(error));
}

export function OnLogout() {
  firebase.auth().signOut();
}

export function OnRegister(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => console.log(error));
}
