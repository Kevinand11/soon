<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <MailingForm />
</template>

<script>
import MailingForm from './components/MailingForm'
export default {
    name: 'App',
    components: { MailingForm },
}
</script>

<style>
#app {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
