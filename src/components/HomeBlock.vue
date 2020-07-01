<template lang="pug">
  .home-block
    .home-block__logo
      img(alt="name" src="../assets/logo.svg")
    .home-block__subtitle 
      span сегодня
    .home-block__orders
      span.home-block__orders-num 1 920
      span.home-block__orders-label заказов
    .home-block__subtitle 
      span за месяц
    .home-block__charts
      apexchart(type="area" height="190" :options="chartOptions" :series="series")
    .home-block__subtitle 
      span за все время
    span.home-block__all 4 993 238
</template>

<script>
import moment from "moment";

moment.locale("ru");

export default {
  name: "HomeBlock",
  data: () => ({
    series: [
      {
        name: "заказы",
        data: [
          31,
          40,
          28,
          51,
          42,
          109,
          100,
          31,
          40,
          28,
          51,
          42,
          109,
          100,
          31,
          40,
          28,
          51,
          42,
          109,
          100,
          31,
          40,
          28,
          51,
          42,
          109,
          100,
          31,
          40
        ]
      }
    ],
    chartOptions: {
      chart: {
        height: 190,
        type: "area",
        toolbar: {
          show: false
        },
        offsetX: -20
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      grid: {
        padding: {
          right: 0,
          bottom: 10
        }
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-01T00:00:00.000Z",
          "2018-09-02T01:30:00.000Z",
          "2018-09-03T02:30:00.000Z",
          "2018-09-04T03:30:00.000Z",
          "2018-09-05T04:30:00.000Z",
          "2018-09-06T05:30:00.000Z",
          "2018-09-07T06:30:00.000Z",
          "2018-09-08T00:00:00.000Z",
          "2018-09-09T01:30:00.000Z",
          "2018-09-10T02:30:00.000Z",
          "2018-09-11T03:30:00.000Z",
          "2018-09-12T04:30:00.000Z",
          "2018-09-13T05:30:00.000Z",
          "2018-09-14T06:30:00.000Z",
          "2018-09-15T00:00:00.000Z",
          "2018-09-16T01:30:00.000Z",
          "2018-09-17T02:30:00.000Z",
          "2018-09-18T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-20T05:30:00.000Z",
          "2018-09-21T05:30:00.000Z",
          "2018-09-22T05:30:00.000Z",
          "2018-09-23T05:30:00.000Z",
          "2018-09-24T05:30:00.000Z",
          "2018-09-25T05:30:00.000Z",
          "2018-09-26T05:30:00.000Z",
          "2018-09-27T05:30:00.000Z",
          "2018-09-28T05:30:00.000Z",
          "2018-09-29T05:30:00.000Z",
          "2018-09-30T05:30:00.000Z"
        ],
        tickAmount: 4,
        labels: {
          rotate: 0,
          hideOverlappingLabels: false,
          trim: true,
          formatter: function(value, timestamp) {
            const date = moment(new Date(timestamp));
            return [date.format("DD.MM"), date.format("ddd")];
          }
        }
      },
      tooltip: {
        enabled: false
      }
    }
  })
};
</script>

<style lang="stylus">
.home-block
  border 4px solid #000
  padding 20px
  width 100%
  max-width calc(33% - 10px)
  align-self flex-start
  margin-bottom 10px

.home-block__logo
  max-width 80%
  margin 0 auto 20px

.home-block__subtitle
  color #6e6e6e
  text-align center
  position relative
  z-index 0
  &:before
    content ''
    display block
    width 100%
    height 1px
    background-color #6e6e6e
    position absolute
    z-index -2
    top 50%
    transform translateY(-50%)
    left 0
  span
    padding 5px
    background-color #282828

.home-block__orders
  text-align center
  padding 10px 0
  color white

.home-block__orders-num
  display block
  font-size 28px
  letter-spacing 1px

.home-block__charts
  width calc(100% + 20px)

.home-block__all
  display block
  text-align center
  font-size 22px
  padding-top 15px
  letter-spacing 1px
  color #eee
</style>
