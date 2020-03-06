<template>
  <div class="box">
    <p>我整個框都是HelloWorld.vue的內容</p>
    <button @click="doShowAlert(message)">doShowAlerts</button>
    <button @click="doSomethingSpecial()">doSomethingSpecial</button>
    <button @click="stopAlertBus()">stopAlertBus</button>
    <button @click="startAlertBus()">startAlertBus</button>
    <button @click="onceBus()">onceBus</button>

    <hr />
    <label>
      選擇類型：
      <select v-model="errMes.status">
        <option value="err">err</option>
        <option value="info">info</option>
        <option value="warn">warn</option>
      </select>
    </label>
    <label>錯誤訊息：</label>
    <input v-model="errMes.mes" type="text" />
    <p>送出狀態：{{errMes.status}}</p>
    <p>送出訊息：{{errMes.mes}}</p>
    <button @click="pushAlertMes">送出</button>
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
      message: "我是寫在helloworld.vue的,訊息",
      errMes: { status: "err", mes: "" }
    };
  },
  created() {
    console.clear();
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
        msg: "我是寫在helloworld.vue的物件訊息",
        title: "Trigger by PropsTester"
      });
    },

    pushAlertMes() {
      this.$bus.$emit("pushAlertMes", this.errMes);
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