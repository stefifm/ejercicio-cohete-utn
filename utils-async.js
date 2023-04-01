import { esperarDuracion, finEtapa, getRandomInt, mostrarHora } from './utils-promesas.js'

export const etapa1Async = async () => {
  console.log('Inicio de la etapa 1')
  mostrarHora()
  let error = false

  setTimeout(() => {
    error = true
  }, getRandomInt(1000, 40000))

  if (!error) {
    await esperarDuracion(5)
    finEtapa(1)
  } else {
    throw new Error('Error en la etapa 1')
  }
}

export const etapa2Async = async () => {
  console.log('Inicio de la etapa 2')
  mostrarHora()
  let error = false

  setTimeout(() => {
    error = true
  }, getRandomInt(1000, 40000))

  if (!error) {
    await esperarDuracion(8)
    finEtapa(2)
  } else {
    throw new Error('Error en la etapa 2')
  }
}

export const etapa3Async = async () => {
  console.log('Inicio de la etapa 3')
  mostrarHora()
  let error = false

  setTimeout(() => {
    error = true
  }, getRandomInt(1000, 40000))

  if (!error) {
    await esperarDuracion(12)
    finEtapa(3)
  } else {
    throw new Error('Error en la etapa 3')
  }
}

export const etapa4Async = async () => {
  console.log('Inicio de la etapa 4')
  mostrarHora()
  let error = false

  setTimeout(() => {
    error = true
  }, getRandomInt(1000, 40000))

  if (!error) {
    await esperarDuracion(10)
    finEtapa(4)
  } else {
    throw new Error('Error en la etapa 4')
  }
}
