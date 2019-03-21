<template>
<div id="wrap">
  <div class="fixd-top1">
    <head-top signin-up='home'>
      <span slot='logo' class="head_logo">ele.me</span>
    </head-top>
  </div>
  <section id="elm-list">
    <div class="fixd-top2">
      <div class="nav">
        <a>美食<span class="triangle-down"></span></a>
        <a>排序<span class="triangle-down"></span></a>
        <a class="no-border">筛选<span class="triangle-down"></span></a>
      </div>
    </div>
    <ul class="list" v-for="item in eatLatitude" :key="item.id">
        <li><a href="#">
          <div class="img">
            <img v-bind:src="'//elm.cangdu.org/img/'+item.image_path" />
          </div>
          <div class="content">
            <div class="title">
              <div>
                <span class="i-pinpai" v-if="item.is_premium==1">品牌</span>
                <span class="title-brand">{{item.name}}</span>
              </div>
              <div>
                <span class="i-tedian" v-for="item2 in item.supports" :key="item2.id">{{item2.icon_name}}</span>
              </div>
            </div>
            <div class="sales">
              <div class="sale-svg">
                <rating-star></rating-star>
                <span> {{item.rating}} 月售{{item.rating_count}}单</span>
              </div>
              <div>
                <span class="i-speed1" v-if="item.delivery_mode.text=='蜂鸟专送'">蜂鸟专送</span>
                <span class="i-speed2" v-for="item2 in item.supports" :key="item2.id" v-if="item2.name=='准时达'">准时达</span>
              </div>
            </div>
            <div class="price">
              <div>¥{{item.float_minimum_order_amount}}起送 {{item.piecewise_agent_fee.tips}}</div>
              <div>{{item.distance}} / <span class="i-blue">{{item.order_lead_time}}</span></div>
            </div>
          </div>
        </a></li>
    </ul>
  </section>
</div>
</template>

<script>
import headTop from '../../components/header/head.vue'
import footBtn from '../../components/footer/foot.vue'
import ratingStar from '../../components/common/star.vue'
import { getEatItude } from '../../service/getData'
export default {
  data () {
    return {
      eatLatitude: '',
      eatLongitude: ''
    }
  },
  components: {
    headTop,
    footBtn,
    ratingStar
  },
  methods: {
  },
  mounted: function () {
    // 获取商铺列表
    getEatItude({
      latitude: 30.497581,
      longitude: 114.368862
    }).then(res => {
      this.eatLatitude = res
      this.eatLongitude = res
      // console.log(res)
    })
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.fixd-top1{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.fixd-top2{
  position: sticky;
  top: 1.96rem;
  z-index: 100;
}
section#elm-list{
  margin-top: 1.96rem;
  .nav{
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: .7rem;
    border-bottom: .02rem solid #f4f4f4;
    background-color: #fff;
    display: flex;
    a{
      text-align: center;
      width: 33%;
      border-right: .02rem solid #f4f4f4;
      .triangle-down {
        display: inline-block;
        margin: .13rem .22rem;
        width: 0;
        height: 0;
        border-left: .13rem solid transparent;
        border-right: .13rem solid transparent;
        border-top: .22rem solid #333;
      }
    }
    .no-border{
        border-right: none;
    }
  }
  .list{
    li{
      padding: .65rem .43rem;
      border-bottom: .02rem solid #e4e4e4;
      a{
        display: flex;
        color:#000;
      }
      .img{
        height: 2.74rem;
        img{
          width: 2.74rem;
          height: 2.74rem;
        }
      }
      .content{
        flex:1;
        height: 2.74rem;
        padding-left: .43rem;
        .title{
          height: .91rem;
          line-height: .91rem;
          display: flex;
          justify-content:space-between;
          align-items: center;
          .i-pinpai{
            color: #6f3f15;
            background-color: #fff100;
            padding: .04rem;
            font-size: .35rem;
            border-radius: .11rem;
          }
          .title-brand{
            font-weight: bold;
            font-size: .61rem;
          }
          .i-tedian{
            color: #999999;
            font-size: .35rem;
            padding: .04rem;
            border: .025rem solid #e4e4e4;
            border-radius: .11rem;
          }
        }
        .sales{
          height: .91rem;
          line-height: .91rem;
          margin: .22rem 0 0;
          display: flex;
          justify-content:space-between;
          font-size: .43rem;
          color: #666;
          align-items: center;
          .sale-svg{
            display: flex;
            justify-content:space-between;
          }
          .sale-sorce{
            color: #ff6700;
          }
          .i-speed1{
            color: #fff;
            background-color: #298eeb;
            font-size: .35rem;
            padding: .04rem;
            border: .025rem solid #298eeb;
            border-radius: .11rem;
          }
          .i-speed2{
            color: #298eeb;
            background-color: #fff;
            font-size: .35rem;
            padding: .04rem;
            border: .025rem solid #298eeb;
            border-radius: .11rem;
          }
        }
        .price{
          height: .91rem;
          line-height: .91rem;
          display: flex;
          justify-content:space-between;
          font-size: .43rem;
          color: #666;
          align-items: center;
          .i-blue{
            color: #298eeb;
          }
        }
      }
    }
  }
}
</style>
