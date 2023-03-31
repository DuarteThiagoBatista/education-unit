import {defineStore} from 'pinia'

export const listTeacherStore = defineStore('listTeacher', {
	state: () => ({
    listTeacherData: [
        {
          title: 'Ana Maria', 
          img: '/src/assets/img/female1.jpg',
          description: 'Licenciatura em Letras Português/Inglês com pós-graduação em Linguística Aplicada ao Ensino de Línguas.',
          dates: [new Date(2023, 2, 12), new Date(2023, 2, 23), new Date(2023, 2, 14)]
        },
        {
          title: 'Felipe Mendes',
          img: '/src/assets/img/male1.jpg',
          description: 'Licenciatura em Educação Física com especialização em Ensino de Educação Física para o Ensino Médio.',
          dates: [new Date(2023, 2, 1), new Date(2023, 2, 28), new Date(2023, 2, 19)]
        },
        {
          title: 'Carla Santos', 
          img: '/src/assets/img/female2.jpg',
          description: 'Licenciatura em Matemática com especialização em Ensino de Matemática para o Ensino Médio.',
          dates: [new Date(2023, 2, 3), new Date(2023, 2, 19), new Date(2023, 2, 20)]
        },
        {
          title: 'Pedro Lima',
          img: '/src/assets/img/male2.jpg',
          description: 'Licenciatura em História com especialização em Ensino de História para o Ensino Médio.',
          dates: [new Date(2023, 2, 10), new Date(2023, 2, 13), new Date(2023, 2, 4)]
        },
        {
          title: 'Fernanda Silva',
          img: '/src/assets/img/female3.jpg',
          description: 'Licenciatura em Ciências Biológicas com especialização em Ensino de Biologia para o Ensino Médio.',
          dates: [new Date(2023, 2, 3), new Date(2023, 2, 6), new Date(2023, 2, 14)]
        },
        {
          title: 'Rafaela Costa', 
          img: '/src/assets/img/female4.jpg',
          description: 'Bacharelado em Arquitetura com pós-graduação em Ensino de Artes Visuais para o Ensino Médio.',
          dates: [new Date(2023, 2, 25), new Date(2023, 2, 20), new Date(2023, 2, 10)]
      }
    ]
  })
})