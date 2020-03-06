<template>
  <div>
    <p>我是alert.vue</p>
    <p>alert類型：{{mes.status}}</p>
    <p>alert訊息：{{mes.mes}}</p>
  </div>
</template>

<script>
export default {
  name: "alert",
  data() {
    return {
      mes: {}
    };
  },
  methods: {
    showAlert(msg) {
      alert(msg);
    },
    stopAlertBus() {
      console.log("stopAlertBus");
      this.$bus.$off("alert:message");
    },
    startAlertBus() {
      console.log("startAlertBus");
      this.$bus.$on("alert:message", msg => {
        this.showAlert(msg);
      });
    },
    pushAlertMes(msg) {
      this.mes = msg;
      console.log(msg);
      //   alert(this.status + this.mes);
    }
  },
  created() {
    console.clear();
    this.$bus.$on("alert:message", msg => {
      this.showAlert(msg);
    });
    this.$bus.$on("specialEvent", event => {
      console.log(event.msg, event.title);
    });
    this.$bus.$on("stopAlertBus", () => {
      this.stopAlertBus();
    });
    this.$bus.$on("startAlertBus", () => {
      this.startAlertBus();
    });
    this.$bus.$once("onceBus", () => {
      console.log("I only execute once");
    });

    this.$bus.$on("pushAlertMes", msg => {
      this.pushAlertMes(msg);
    });
  },
  beforeDestroy: function() {
    // [銷毀監聽事件]
    // 最好在组件銷毀前，清除 specialEvent 所有監聽
    // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on設定的方法)
    this.$bus.$off("specialEvent");
  }
};
</script>