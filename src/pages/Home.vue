<template>
    <img alt="Stranerd Logo" src="../assets/stranerd_logo.svg" height="50">
    <h2>Website Launching Soon!</h2>
    <p>
        Sign up for our mailing list and have updates delivered directly to your inbox.
        <br>
        Early bees get freebies!
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
