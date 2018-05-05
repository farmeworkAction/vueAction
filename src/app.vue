<template>
    <section class="main">
        <p>我来了{{name}}</p>
        <button @click = "clkEvt">点击</button>
    </section>
</template>

<script>
export default {
    data () {
    	const uname ='lee';
        return {
            name:`vue + webpack${uname}`
        }
    },
    methods: {
        clkEvt() {
            console.log(this.name);
        }
    }
}
</script>

<style>
.main>p{
    color: #000;
}
</style>