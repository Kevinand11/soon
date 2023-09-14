<template>
    <form @submit.prevent="submit">
        <div style="display: flex; gap: 0.5rem;">
            <input v-model="form.name" required type="text" class="form-control" placeholder="Full name">
            <input v-model="form.dob" required type="date" :max="new Date().toISOString().split('T')[0]" class="form-control" placeholder="Date of birth">
        </div>
        <input v-model="form.email" required type="email" class="form-control" placeholder="Enter your email address">
        <select v-model="form.schoolType" required class="form-control" placeholder="What academic level are you in?">
            <option v-for="school in SchoolTypes" :key="school" :value="school">{{ school }}</option>
        </select>
        <input v-if="form.schoolType !== SchoolTypes.Graduate" v-model="form.schoolName" required type="text" class="form-control" placeholder="Enter your school name">
        <input v-model="form.topics" required type="text" class="form-control" placeholder="Your topics of interests, comma separated">
        <button class="btn w-100 btn-primary" type="submit" :disabled="loading">
            <i v-if="loading" class="spinner-border text-light" role="status" style="width:2rem;height:2rem;">
                <span class="sr-only">Loading...</span>
            </i>
            <span v-else>Join Now</span>
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

<style scoped>
form {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    min-width: 400px;
}
button {
    font-weight: 600 !important;
}
option {
    text-transform: capitalize;
}
</style>
