import {defineStore} from 'pinia'

export const teacherStore = defineStore('teacher', {
	state: () => {
		return {
			teacherData: {
				name: 'abc',
				lastName: 'asd',
				email: 'xcv',
			}
		}
	}

})