import { reactive, toRefs, watch } from 'vue'
import { isEmail } from 'sd-validate/lib/rules'

const DATABASE_URL = process.env.NODE_ENV === 'production' ?
	'http://localhost:5003/emails.json?ns=ss-nuxtify' :
	'http://localhost:5003/emails.json?ns=ss-nuxtify'

const saveEmail = async (email) => {
	const res = await fetch(`${DATABASE_URL}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(email),
	})
	if (res.ok) return res.json()
	else throw (await res.json()).error
}

export const useMailing = () => {
	const state = reactive({
		error: '',
		message: '',
		loading: false,
		email: '',
	})

	watch(() => state.email, () => {
		if (state.email) state.error = ''
	})

	const submitEmail = async () => {
		if (state.loading) return
		state.error = ''
		const res = isEmail(state.email)
		if (!res.valid) return state.error = 'Please provide a valid email!'
		try {
			state.loading = true
			await saveEmail(state.email)
			state.email = ''
			state.message = 'Email submitted successfully!'
		} catch (error) { state.error = error }
		finally { state.loading = false }
	}

	return { submitEmail, ...toRefs(state) }
}