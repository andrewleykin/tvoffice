<template lang="pug">
  .home-birthday(v-if="isLoaded")
    span.home-birthday__icon 🎉
    p.home-birthday__empty(v-if="list.length === 0") В ближайшее время нету дней рождения
    ul.home-birthday__list(v-else)
      li.home-birthday__item(v-for="(item, index) in list" :key="index" :class="{isToday: item.isToday}") 
        span {{item.name}} 
        span {{getBirthdayDate(item.birthday)}}
</template>

<script>
import moment from "moment";
moment.locale("ru");

export default {
  name: "HomeBirthday",
  data: () => ({
    list: [],
    isLoaded: false
  }),
  methods: {
    setList(serverList) {
      this.list = serverList
        .reduce((result, [name, birthdayItem]) => {
          const today = moment("2020-01-01");
          const birthday = moment(birthdayItem, "DD MMMM");
          const isBeforeDay = birthday.isBefore(today, "day");
          birthday.year(isBeforeDay ? moment().year() + 1 : moment().year());

          const isBetween = birthday.isBetween(
            today,
            moment(today)
              .add(1, "months")
              .endOf("months"),
            undefined,
            "[]"
          );

          if (isBetween) {
            result.push({
              name,
              birthday,
              isToday: today.isSame(birthday)
            });
          }

          return result;
        }, [])
        .sort((a, b) => (a.birthday.isBefore(b.birthday) ? -1 : 1));
    },
    getList() {
      this.$getGapiClient().then(gapi => {
        gapi.client.sheets.spreadsheets.values
          .get({
            spreadsheetId: process.env.VUE_APP_SHEET_ID || "",
            range: "A2:B"
          })
          .then(res => {
            this.isLoaded = true;
            this.setList(res.result.values);
          });
      });
    },
    getBirthdayDate(birthday) {
      return moment(birthday).format("DD.MM");
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="stylus">
.home-birthday
  max-width 300px
  padding-left 20px
  margin 0 auto 50px
  color white

.home-birthday__icon
  font-size 64px
  display block
  text-align center
  margin-bottom 50px

.home-birthday__empty
  text-align center

.home-birthday__item
  display flex
  justify-content space-between
  font-size 18px
  line-height 24px
  &.isToday
    color #ff3947
    font-size 22px
    font-weight bold
</style>
