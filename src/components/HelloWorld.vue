<template>
  <div class="box">
    <p>我整個框都是HelloWorld.vue的內容</p>
    <button @click="doShowAlert(message)">doShowAlerts</button>
    <button @click="doSomethingSpecial()">doSomethingSpecial</button>
    <button @click="stopAlertBus()">stopAlertBus</button>
    <button @click="startAlertBus()">startAlertBus</button>
    <button @click="onceBus()">onceBus</button>
  </div>
</template>

<script>
// import { bus } from "../main";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      message: "This is from Child1"
    };
  },
  methods: {
    doShowAlert(msg) {
      this.$bus.$emit("alert:message", msg);
    },
    stopAlertBus() {
      this.$bus.$emit("stopAlertBus");
    },
    startAlertBus() {
      this.$bus.$emit("startAlertBus");
    },
    onceBus() {
      this.$bus.$emit("onceBus");
    },
    doSomethingSpecial: function() {
      // emit the event and pass with it an object of "event data".
      this.$bus.$emit("specialEvent", {
        msg: "This message came from the specialEvent.",
        title: "Trigger by PropsTester"
      });
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  border: 1px solid;
  padding: 35px 0;
}
</style>