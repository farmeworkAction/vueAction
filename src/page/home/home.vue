<template>
  <div>
      <p>我来了{{name}}</p>
      <button @click = "clkEvt">点击</button>
      <router-link to="test">test</router-link>
      <div class="box">
        11111
      </div>
  </div>
</template>

<script>
export default {
  data () {
    const uname = 'lee'
    return {
      name: `vue + webpack${uname}`
    }
  },
  methods: {
    clkEvt () {
      console.log(this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
$nav-color: #F90;
$width: 100;
.box {
  $width: 100px;
  width: $width;
  color: $nav-color;
}
</style>
