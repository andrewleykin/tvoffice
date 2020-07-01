<template lang="pug">
  .home-birthday birthday

</template>

<script>
import moment from "moment";
moment.locale("ru");
export default {
  name: "HomeBirthday",
  methods: {
    login() {
      this.$getGapiClient().then(gapi => {
        console.log("login -> gapi", gapi);
        // gapi.sheets.spreadsheet.get(...)
        // ...
      });
    }
  },
  mounted() {
    // console.log(moment("29 января", "DD MMMM"));
    this.login();
  }
};
</script>
