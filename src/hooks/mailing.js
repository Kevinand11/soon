import { reactive, toRefs, watch } from 'vue'

const DATABASE_URL = 'https://stranerd-13084.firebaseio.com/waitlist.json'

const SchoolTypes = {
	"Graduate": "Graduate",
	"Undergraduate": "Undergraduate",
	"High School": "High School",
	"Other": "Other"
}

const getNewForm = () => ({
	name: '',
	dob: new Date().toISOString().split('T')[0],
	email: '',
	schoolType: SchoolTypes.Undergraduate,
	schoolName: '',
	topics: ''
})

const saveEmail = async (body) => {
	const res = await fetch(DATABASE_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	})
	if (res.ok) return res.json()
	else throw (await res.json()).error
}

const getEmails = async () => {
	const res = await fetch(DATABASE_URL, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
	if (res.ok) return res.json()
	else throw (await res.json()).error
}

export const useMailing = () => {
	const state = reactive({
		form: getNewForm(),
		error: '',
		message: '',
		loading: false,
	})

	watch(() => state.email, () => {
		if (state.email) state.error = ''
	})

	const submit = async () => {
		if (state.loading) return
		const prompt = window.confirm('Continue to join Stranerd\'s Telegram Community?')
		if (prompt) window.open('https://t.me/+2LASPjzZLWVjMWZk', '_blank')
		state.error = ''
		try {
			state.loading = true
			await saveEmail(state.form)
			state.form = getNewForm()
			state.message = 'Email submitted successfully!'
		} catch (error) { state.error = error.message }
		finally { state.loading = false }
	}

	return { submit, ...toRefs(state), SchoolTypes }
}

export const useMails = () => {
	const state = reactive({
		error: '',
		loading: false,
		emails: [],
	})

	const fetchEmails = async () => {
		if (state.loading) return
		state.error = ''
		try {
			state.loading = true
			const emailsObj = await getEmails()
			const emailSet = new Set(Object.values(emailsObj))
			state.emails = []
			emailSet.forEach((e) => state.emails.push(e))
		} catch (error) { state.error = error }
		finally { state.loading = false }
	}

	return { fetchEmails, ...toRefs(state) }
}