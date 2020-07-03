<template lang="pug">
  .home-birthday birthday
</template>

<script>
import moment from "moment";
moment.locale("ru");

export default {
  name: "HomeBirthday",
  methods: {
    getList() {
      this.$getGapiClient().then(gapi => {
        console.log("gapi", gapi);
      });
    }
  },
  mounted() {
    this.getList();
    // console.log(moment("29 января", "DD MMMM"));
  }
};
</script>
