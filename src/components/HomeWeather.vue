<template lang="pug">
  .home-weather
    .home-weather__block(v-for="(item, index) in list" :key="index")
      span {{item.temp}}
      img(:src="`https://openweathermap.org/img/wn/${item.icon}@2x.png`")
</template>

<script>
import axios from "axios";
export default {
  name: "HomeWeather",
  data: () => ({
    list: []
  }),
  async mounted() {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?lat=55.75399400&lon=37.62209300&units=metric&lang=ru&appid=5cd2f8841c52e2013633cf31b2782cc8"
    );
    this.list = data.list.splice(0, 3).map(({ weather, main }) => ({
      icon: weather[0].icon,
      temp: `${
        main.temp.toFixed().slice(0, 1) !== "-" ? "+ " : ""
      }${main.temp.toFixed()}`
    }));
  }
};
</script>

<style lang="stylus">
.home-weather
  display flex
  justify-content space-between
  width 100%

.home-weather__block
  width 100%
  max-width 30%
  display flex
  flex-direction column
  align-items center
  font-size 24px
  color white
</style>
