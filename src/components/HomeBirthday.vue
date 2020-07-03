<template lang="pug">
  .home-birthday birthday 3
</template>

<script>
import moment from "moment";
moment.locale("ru");

export default {
  name: "HomeBirthday",
  methods: {
    getList() {
      this.$getGapiClient().then(gapi => {
        gapi.client.sheets.spreadsheets.values
          .get({
            spreadsheetId: "1ZAXTLga6Yev6MStrPBqikh_UhgE2jisschX2mz6Gl54",
            range: "Class Data!A2:B"
          })
          .then(res => console.log("res", res));
      });
    }
  },
  mounted() {
    this.getList();
    // console.log(moment("29 января", "DD MMMM"));
  }
};
</script>
