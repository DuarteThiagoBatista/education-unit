<template>
  <h3 class="class-date-title">Data da aula</h3>
    <div class="radio">
      <input 
        label="Com urgência"
        @click="switchTrue" 
        type="radio" 
        id="radio-one" 
        name="switch" 
      />
      <input 
        label="Propor data"
        @click="switchFalse" 
        type="radio" 
        id="radio-two" 
        name="switch"
        checked
      />
    </div>
    <div class="date-button">
      <DatePicker 
        class="calendar" 
        v-if="!urgency" 
        v-model="selectedDate" 
        :attributes="attrs"  
        mode="dateTime" 
        column="1" 
        :first-day-of-week="1" 
        is24hr 
        :minute-increment="5"
      />
      <RouterLink  @click="saveData" class="button" to="/agendar/listagem-professor/sobre-aula-x/metodo-pagamento">Enviar</RouterLink>
    </div>
</template>

<script>
  import { DatePicker } from 'v-calendar';
  import 'v-calendar/dist/style.css'
	import { scheduleStore } from '../../stores/schedule'
	import { chosenTeacherStore } from '../../stores/chosenTeacher';
	import { storeToRefs } from 'pinia';

	const store = scheduleStore() 
	
	const storeTeacher = chosenTeacherStore()

	const { img, title, description, dates } = storeToRefs(storeTeacher)

  

  export default {
		components: {
		  DatePicker,
	  },
		data() {
			return {
				attrs: [
					{
          highlight: {
						color: "red",
						fillMode: "light"
					},
          dates: storeTeacher.$state.dates,
					},
				],

				urgency: false,
				text: '',
				selectedDate: null,
				img: storeTeacher.$state.img,
				title: storeTeacher.$state.title,
				description: storeTeacher.$state.description,

				unavailableDate: false
			}
		},
		methods: {
			switchTrue() {
				this.urgency = true;
			},
			switchFalse() {
				this.urgency = false;
			},
			saveData() {
				if (this.urgency) {
					store.$state.scheduleData.urgencyText = 'Aguardando resposta do professor';
				}
				console.log('teste: ', this.isAvailableDate)

				store.$state.scheduleData.date = new Date(this.selectedDate).toLocaleDateString();
				store.$state.scheduleData.time = new Date(this.selectedDate).toLocaleTimeString();
				store.$state.scheduleData.urgency = this.urgency;

				console.log('slected: ', this.selectedDate)
					
				}
		},
	}
</script>

<style scoped>
.class-date-title {
  margin: 10px 0;
}

.radio {
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}

.radio input {
  width: auto;
  height: 100%;
  appearance: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  padding: 4px 8px;
  background: #454857;
  color: #bdbdbdbd;
  background-color: #ec1464;
  color: #fff;
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  transition: all 100ms linear;
  border-radius: 5px;
  border-style: solid;
  border-color: #ec1464;
  margin: 0 10px 0 0;
}

.radio input:checked {
  background: #fff;
  color: #ec1464;
  cursor: default;
  box-shadow: 0 1px 1px #0000002e;
  text-shadow: 0 1px 0px #79485f7a;
  border-style: solid;
}

.radio input:before {
  content: attr(label);
  display: inline-block;
  text-align: center;
  width: 100%;
}

.date-button {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 220px;
}
.calendar {
  margin-bottom: 40px;
}

.button{
  font-family: "PoppinsBold";
  background-color: #ec1464;
  color: white;
  padding: 2.5px 15px;
  height: 30px;
  width: 100px;
  font-size: 10pt;
  border-radius: 5px;
  border: none;
  text-align: center;
  cursor: pointer;
  border-style: solid;
  border-color: #ec1464;
  position: absolute;
  bottom: 0;
}
@media (hover:hover) {
  .button:hover {
    padding: 2.5px 15px;
    color: #ec1464;
    background-color: #ffff;
    border-style: solid;
  }
}
</style>