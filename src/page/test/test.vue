<template>
  <div>
      11111
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
