<template lang="pug">
  .home
    .home-graphics
      home-block
      home-block
      home-block
      home-block
      home-block
      home-block
    .home-info
      .home-info__cloak
        home-cloak
      .home-info__weather
        home-weather
      .home-info__birthday
        home-birthday
</template>

<script>
import HomeBlock from "@/components/HomeBlock";
import HomeCloak from "@/components/HomeCloak";
import HomeWeather from "@/components/HomeWeather";
import HomeBirthday from "@/components/HomeBirthday";
export default {
  name: "Home",
  components: { HomeBlock, HomeCloak, HomeWeather, HomeBirthday }
};
</script>

<style lang="stylus">
.home
  background-color #282828
  display flex
  min-height 100%
  padding 40px

.home-graphics
  width 100%
  max-width 70%
  display flex
  flex-wrap wrap
  justify-content space-between

.home-info
  width 100%
  max-width 30%

.home-info__cloak
  display flex
  justify-content center
  margin-bottom 100px
</style>
