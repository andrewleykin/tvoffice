<template lang="pug">
  figure.analog-clock
    figcaption.analog-clock__face
      span.analog-clock__notch(
        v-for="n in 60" 
        :key="n" 
        :class="{ '-long': !(n % 5) }" 
        :style="{ transform: `rotate(${n * 6}deg)` }"
      )
    span.analog-clock__hand.-seconds(:style="seconds")
    span.analog-clock__hand.-minutes(:style="minutes")
    span.analog-clock__hand.-hours(:style="hours")
</template>

<script>
export default {
  name: "HomeCloak",
  data: () => ({
    rotation: { hours: 0, minutes: 0, seconds: 0 },
    tick: 0,
    time: { hours: 0, minutes: 0, seconds: 0 }
  }),
  computed: {
    hours() {
      return {
        transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.hours}deg)`
      };
    },
    minutes() {
      return {
        transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.minutes}deg)`
      };
    },
    seconds() {
      return {
        transform: `translate3d(-50%, 0, 0) rotate(${this.rotation.seconds}deg)`
      };
    }
  },
  watch: {
    tick() {
      this.rotation.seconds += 6;
      this.rotation.minutes += 0.1;
    },
    "time.minutes": function(to, from) {
      if (from === to) return;
      this.rotation.hours += 0.5;
    }
  },
  methods: {
    updateTime(time) {
      this.tick++;
      this.time = {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
      };

      setTimeout(
        () => this.updateTime(new Date()),
        1000 - new Date().getMilliseconds()
      );
    }
  },
  mounted() {
    this.updateTime(new Date());
    let date = new Date();
    let [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    this.rotation = {
      hours: h * 30 + m * 0.5,
      minutes: m * 6 + s * 0.1,
      seconds: s * 6
    };
  }
};
</script>

<style lang="stylus">

.analog-clock {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-color: black;
  filter: drop-shadow(0 0.125rem 0.5rem rgba(black, 0.1));
  position relative

  &::after {
    top: 50%;
    left: 50%;
    content: '';
    width: 2.5%;
    height: 2.5%;
    position: absolute;
    border-radius: 100%;
    background-color: #edbec5;
    transform: translate3d(-50%, -50%, 0);
  }

  &__face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__notch {
    transform-origin: 50% 100%;
    position: absolute;
    width: 1px;
    height: 49%;
    bottom: 50%;
    left: 50%;

    &::after {
      content: '';
      width: 100%;
      height: 2.5%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
    }

    &.-long::after {
      width: 2px;
      height: 7.5%;
    }
  }

  &__hand {
    transform-origin: 50% 100%;
    background-color: #fff;
    position: absolute;
    width: 2px;
    height: 40%;
    bottom: 50%;
    left: 50%;
    border-radius: 2px;
    transition: transform 1s linear;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 10%;
      background-color: inherit;
      backface-visibility: hidden;
    }

    &.-hours {
      height: calc(100% / 4);
      width: 3px;
      border-radius: 3px;
      transition: transform 60s linear;
    }

    &.-seconds {
      width: 1px;
      height: 45%;
      border-radius: 0;
      background-color: #edbec5;
      transition: transform 100ms cubic-bezier(.6, .05, 0, 1.6);

      &::after {
        height: 12.5%;
      }
    }
  }
}
</style>
