<template>
    <div class="">
        <img alt="Stranerd Logo" src="../assets/stranerd_logo.png" height="50">
       <ol class="list-group mt-3">
           <li class="list-group-item">
               Total Emails: {{ emails.length }}
           </li>
           <li v-for="email in emails" :key="email" class="text-capitalize list-group-item">
               {{ email }}
           </li>
       </ol>
        <i v-if="loading" class="spinner-border text-light" role="status" style="width:2rem;height:2rem;">
            <span class="sr-only">Loading...</span>
        </i>
        <p v-if="error" class="text-danger">{{ error }}</p>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { useMails } from '../hooks/mailing'
export default {
    name: 'Emails',
    setup () {
        const state = useMails()
        onMounted(state.fetchEmails)
        return { ...state }
    }
}
</script>
