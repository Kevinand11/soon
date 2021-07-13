<template>
    <form @submit.prevent="submitEmail">
        <input v-model="email" type="email" class="form-control" placeholder="Enter your email address">
        <button class="btn w-100 btn-primary" type="submit" :disabled="loading">
            <i v-if="loading" class="spinner-border text-light" role="status" style="width:2rem;height:2rem;">
                <span class="sr-only">Loading...</span>
            </i>
            <span v-else>Subscribe To Our Mailing List Now</span>
        </button>
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
form {
    margin: 1rem 0;
    min-width: 320px;
}
p {
    margin: 0.5rem 0;
    text-align: center;
}
button {
    margin: 0.5rem 0;
    font-weight: 600 !important;
}
</style>
