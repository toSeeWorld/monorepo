<template>
  <div>
    this is vue app
    <div>
      <!-- <img src="../assets/image.png" /> -->
      <ul>
        <li>
          <a href="/vueApp/vue">vue1</a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    console.log("router", router.getRoutes());
  },
};
</script>

<style>
</style>