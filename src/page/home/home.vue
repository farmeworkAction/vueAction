<template>
  <div>
      <p>我来了{{name}}</p>
      <button @click = "clkEvt">点击</button>
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

</style>
