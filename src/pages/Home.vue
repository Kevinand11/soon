<template>
    <img alt="Stranerd Logo" src="../assets/stranerd_logo.svg" height="50">
    <h2>Website Launching Soon!</h2>
    <p>
        We are building you a platform where you have access to learn from NERDS.
        <br>
        Nerds are students who have mastery in subjects you need help with.
    </p>
    <MailingForm />
</template>

<script>
import MailingForm from '../components/MailingForm'
export default {
    name: 'Home',
    components: { MailingForm },
}
</script>
