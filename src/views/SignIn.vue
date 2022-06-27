<script setup lang="ts">
import {
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { onMounted } from "vue";

onMounted(() => {
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("login");
    } else {
      console.log("logout");
    }
  });
});

const signIn = () => {
  const provider = new TwitterAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      if (user) {
        console.log(user);
      } else {
        alert("有効なアカウントではありません");
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + "@@@" + errorMessage);
    });
};

const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      if (user) {
        console.log(user);
      } else {
        alert("有効なアカウントではありません");
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + "@@@" + errorMessage);
    });
};

const logoutUser = () => {
  getAuth().signOut();
};
</script>

<template>
  <div>
    <button @click="signIn()">twitterでログイン</button>
    <button @click="signInGoogle()">googleでログイン</button>
    <button @click="logoutUser()">ログアウト</button>
  </div>
</template>
