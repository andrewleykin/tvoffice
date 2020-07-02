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
      this.$getGapiClient().finally(() => {
        window.gapi.client.sheets.spreadsheets.values
          .get({
            spreadsheetId: "18ligZCrsZHJtECMhWadUYbIjnRKMA_MMarqWy8_5sN0",
            range: "Class Data!A2:B"
          })
          .then(res => console.log(res));
      });
    }
  },
  mounted() {
    this.getList();
    // console.log(moment("29 января", "DD MMMM"));
  }
};
</script>
