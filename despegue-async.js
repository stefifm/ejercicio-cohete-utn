import readlineSync from 'readline-sync'
import { etapa1Async, etapa2Async, etapa3Async, etapa4Async } from './utils-async.js'

const tecla = readlineSync.question('Despegue del cohete. Presione x para continuar: ')
if (tecla === 'x') {
  console.log('Inicio de despegue\n')
  try {
    await etapa1Async()
    await etapa2Async()
    await etapa3Async()
    await etapa4Async()
    console.log('Despegue exitoso')
  } catch (error) {
    console.log(error.message)
    console.log('Despegue abortado')
  }
} else {
  console.log('Tecla incorrecta')
}
