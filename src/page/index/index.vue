<template>
<div id="wrap">
  <head-top signin-up='home'>
    <span slot='logo' class="head_logo">ele.me</span>
  </head-top>
  <nav>
    <ul>
      <li v-for="item in eatClass.slice(0,8)" :key="item.id"><a href="#">
        <div class="navimg"><img v-bind:src="'//fuss10.elemecdn.com/'+item.image_url" /></div>
        <span>{{item.title}}</span>
      </a></li>
    </ul>
    <div class="point">
      <span class="hover"></span>
      <span></span>
    </div>
  </nav>
  <section id="elm-seller">
    <div class="seller-title">附近商家</div>
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
  <foot-btn></foot-btn>
</div>
</template>

<script>
import headTop from '../../components/header/head.vue'
import footBtn from '../../components/footer/foot.vue'
import ratingStar from '../../components/common/star.vue'
import { getEatItude, getEatClass } from '../../service/getData'
export default {
  data () {
    return {
      eatLatitude: '',
      eatLongitude: '',
      eatClass: ''
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
    // 食品分类列表
    getEatClass().then(res => {
      this.eatClass = res
      // console.log(res)
    })
  },
  computed: {
    sortGroup () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.cityGroup[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.cityGroup[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  }
}
</script>

<style lang="scss" scoped>
nav{
  margin-top: 1.96rem;
  height: 8.7rem;
  background-color: #fff;
  border: .02rem solid #e4e4e4;
  position: relative;
  ul{
    display: flex;
    flex-wrap: wrap;
    margin-top: .43rem;
    padding: 0 .22rem;
    li{
      width: 25%;
      margin: .33rem 0;
      a{
        display: flex;
        flex-direction: column;
        .navimg{
          text-align: center;
          img{
            width: 1.74rem;
            height: 1.74rem;
          }
        }
        span{
          display: block;
          font-size: .52rem;
          color: #666666;
          text-align: center;
        }
      }
    }
  }
  .point{
    position: relative;
    width: 100%;
    text-align: center;
    bottom: .22rem;
    span{
      width: .35rem;
      height: .35rem;
      margin: 0 .11rem;
      display: inline-block;
      border-radius: 100%;
      background: #007aff;
      opacity: .2;
    }
    span.hover{
      opacity: 1;
    }
  }
}
section#elm-seller{
  margin-bottom: 1.96rem;
  margin-top: .43rem;
  background-color: #fff;
  border: .02rem solid #e4e4e4;
  .seller-title{
    height: .87rem;
    line-height: .87rem;
    font-size: .52rem;
    color: #999999;
    margin: .43rem 0 .22rem .54rem;
    padding-left: .87rem;
    background: url('../../images/shop.jpg') 0 .09rem no-repeat;
    background-size: .61rem .61rem;
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
            margin: 0 .04rem;
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
