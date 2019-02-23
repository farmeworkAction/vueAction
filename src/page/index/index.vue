<template>
<div id="wrap">
  <header>
    <div class="header-search"><a href="#" class="ico-search"></a></div>
    <h1>黄浦区上海人民广场</h1>
    <div class="header-login"><a href="#">登陆</a> | <a href="#">注册</a></div>
  </header>
  <nav>
    <ul>
      <li><a href="#">
        <div class="navimg"><img src="../../images/nav.jpeg" /></div>
        <span>甜品饮品</span>
      </a></li>
      <li><a href="#">
        <div class="navimg"><img src="../../images/nav.jpeg" /></div>
        <span>甜品饮品</span>
      </a></li>
      <li><a href="#">
        <div class="navimg"><img src="../../images/nav.jpeg" /></div>
          <span>甜品饮品</span>
      </a></li>
      <li><a href="#">
        <div class="navimg"><img src="../../images/nav.jpeg" /></div>
        <span>甜品饮品</span>
      </a></li>
      <li><a href="#">
        <div class="navimg"><img src="../../images/nav.jpeg" /></div>
        <span>甜品饮品</span>
      </a></li>
      <li><a href="#">
        <div class="navimg"><img src="../../images/nav.jpeg" /></div>
        <span>甜品饮品</span>
      </a></li>
      <li><a href="#">
        <div class="navimg"><img src="../../images/nav.jpeg" /></div>
        <span>甜品饮品</span>
      </a></li>
      <li><a href="#">
        <div class="navimg"><img src="../../images/nav.jpeg" /></div>
        <span>甜品饮品</span>
      </a></li>
    </ul>
    <div class="point">
      <span class="hover"></span>
      <span></span>
    </div>
  </nav>
  <section id="elm-seller">
    <div class="seller-title">
      附近商家
    </div>
    <ul class="list" v-for="item in eatLatitude" :key="item.id">
      <li><a href="#">
        <div class="img">
          <img v-bind:src="'//elm.cangdu.org/img/'+item.image_path" />
        </div>
        <div class="content">
          <div class="title">
            <div>
              <span class="i-pinpai" v-if="is_premium==ture">品牌</span>
              <span class="title-brand">{{item.name}}</span>
            </div>
            <div>
              <span class="i-tedian" v-for="item2 in item.supports" :key="item2.id">{{item2.icon_name}}</span>
            </div>
          </div>
          <div class="sales">
            <div>
              <span class="sale-sorce"><img src="../../images/star.jpg"/> {{item.rating}}</span>
              <span>月售{{item.rating_count}}单</span>
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
  <footer>
    <a>
      <img src="../../images/nav-footer.jpeg">
      <span>外卖</span>
    </a>
    <a>
      <img src="../../images/nav-footer.jpeg">
      <span>外卖</span>
    </a>
    <a>
      <img src="../../images/nav-footer.jpeg">
      <span>外卖</span>
    </a>
    <a>
      <img src="../../images/nav-footer.jpeg">
      <span>外卖</span>
    </a>
  </footer>
</div>
</template>

<script>
import headTop from '../../components/header/head.vue'
import { getEatItude } from '../../service/getData'
export default {
  data () {
    return {
      eatLatitude: '',
      eatLongitude: ''
    }
  },
  components: {
    headTop
  },
  methods: {
  },
  mounted: function () {
    //
    getEatItude({
      latitude: 30.497581,
      longitude: 114.368862
    }).then(res => {
      this.eatLatitude = res
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
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
header{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  height: 1.96rem;
  line-height: 1.96rem;
  background: #4d8ee1;
  color: #fff;
  display: flex;
  justify-content:space-between;
  h1{
    font-size: .74rem;
    font-weight: normal;
    color:#fff;
  }
  .header-search{
    padding-left: .54rem;
    .ico-search{
      width: .91rem;
      height: .91rem;
      background-image: url('../../images/search.jpg');
      background-size: .91rem .91rem;
      display: inline-block;
    }
  }
  .header-login{
    font-size: .61rem;
    color:#fff;
    padding-right: .54rem;
    a{
      color:#fff;
    }
  }
}
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
          img{
            width: 1.74rem;
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
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  height: 1.96rem;
  background-color: #fff;
  font-size: .43rem;
  display: flex;
  a{
    display: block;
    width: 25%;
    text-align: center;
    margin-top: .22rem;
    img{
      width: .78rem;
      height: .78rem;
    }
    span{
      display: block;
      color: #666666;
    }
  }
}
</style>
