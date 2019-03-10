<template>
  <footer id='foot_top'>
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
</template>

<script>
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
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
