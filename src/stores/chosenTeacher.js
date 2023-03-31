import {defineStore} from 'pinia'

export const chosenTeacherStore = defineStore("chosenTeacher", {
	state: () => ({
      title: "",
      img: "",
      description: "",
      dates: null
  }),
  actions: {
    setValues(img, title, description, dates) {
      console.log('Dataaa: ', dates)
      this.img = img
      this.title = title
      this.description = description
      this.dates = dates
    }
  }
})