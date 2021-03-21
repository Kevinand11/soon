<template>
    <img alt="Stranerd Logo" src="./assets/stranerd_logo.svg" height="50">
    <h2>Website coming soon</h2>
    <p>
        We are building you a platform where you can have access to learn from NERDS.
        <br>
        Nerds are students who have mastery in subjects you need help with
    </p>
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
body {
    background: #17224d;
}
#app {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url('./assets/background.png');
    padding: 1rem;
}
h2 {
    color: white;
    margin: 1rem 0;
}
p {
    color: white;
}
</style>
