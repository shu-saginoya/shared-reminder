<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
/* import HelloWorld from "@/components/HelloWorld.vue"; */
import { inject, ref, reactive } from "vue";

const axios: any = inject("axios");

interface Task {
  id: string;
  name: string;
  note?: string;
  isCompleted: boolean;
  /*   registrationDate: string;
  updateDate: string; */
  picOut: boolean;
}
const newTask = reactive<Task>({
  id: "",
  name: "",
  note: "",
  isCompleted: false,
  /*   registrationDate: '',
  updateDate: '', */
  picOut: false,
});
const addTask = (): void => {
  /*   newTask.registrationDate = new Date();
  newTask.updateDate = new Date(); */
  axios
    .post(
      "https://firestore.googleapis.com/v1/projects/shared-reminder/databases/(default)/documents/task",
      {
        fields: {
          task: {
            objectValue: newTask,
          },
        },
      }
    )
    .then((response: { data: any }) => {
      console.log(response);
    })
    .catch((error: { data: any }) => {
      console.log(error);
    });
  newTask.name = "";
  newTask.note = "";
};
</script>

<template>
  <header>
    <h1>Shared Reminder</h1>
  </header>
  <main>
    <div>
      <label>
        タスク
        <input type="text" v-model="newTask.name" />
      </label>
    </div>
    <div>
      <label>
        備考
        <textarea v-model="newTask.note"></textarea>
      </label>
    </div>
    <div>
      <button @click="addTask()">追加</button>
    </div>
  </main>
  <!--   <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style>
@import "@/assets/base.css";

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
