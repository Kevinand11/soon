<template>
    <form @submit.prevent="submitEmail">
        <input v-model="email" type="email" class="form-control" placeholder="Enter your email address">
        <p v-if="error" class="text-danger">{{ error }}</p>
        <p v-if="message" class="text-success">{{ message }}</p>
    </form>
</template>

<script>
import { useMailing } from '../hooks/mailing'
export default {
    setup () {
        const state = useMailing()
        return { ...state }
    }
}
</script>

<style>
p {
    margin: 0.5rem 0;
    text-align: center;
}
</style>