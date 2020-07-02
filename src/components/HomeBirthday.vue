<template lang="pug">
  .home-birthday birthday
</template>

<script>
import moment from "moment";
moment.locale("ru");

export default {
  name: "HomeBirthday",
  data: () => ({
    profile: null
  }),
  methods: {
    initClient() {
      console.log("initClient -> initClient", window.gapi.client);
      window.gapi.client
        .init({
          apiKey: "AIzaSyBo5pk_VOJ1kRVRD-cXky9ZocOHfhcx18c",
          clientId:
            "604341426682-9nfsbb6ovjrhf41mh6vl7ojujhomsarc.apps.googleusercontent.com",
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4"
          ],
          scope: "https://www.googleapis.com/auth/spreadsheets"
        })
        .then(
          () => {
            console.log(window.gapi.auth2.getAuthInstance().isSignedIn.get());
            if (window.gapi.auth2.getAuthInstance().isSignedIn.get())
              this.getList();
          },
          error => {
            console.error("error", JSON.stringify(error, null, 2));
          }
        );
    },
    getList() {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: "18ligZCrsZHJtECMhWadUYbIjnRKMA_MMarqWy8_5sN0",
          range: "Class Data!A2:B"
        })
        .then(res => console.log(res));
    },
    googleLoaded() {
      console.log("mounted -> google-loaded", this);
      window.gapi.load("client:auth2", this.initClient);
    }
  },
  mounted() {
    window.addEventListener("google-loaded", this.googleLoaded);
    // console.log(moment("29 января", "DD MMMM"));
  }
};
</script>
