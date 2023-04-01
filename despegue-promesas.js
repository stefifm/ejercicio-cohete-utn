import readlineSync from 'readline-sync'
import { etapa1, etapa2, etapa3, etapa4 } from './utils-promesas.js'

// Despegue del cohete
const tecla = readlineSync.question('Despegue del cohete. Presione x para continuar: ')
if (tecla === 'x') {
  console.log('Despegue del cohete')
  etapa1()
    .then(etapa2)
    .then(etapa3)
    .then(etapa4)
    .then(() => {
      console.log('Despegue exitoso')
    })
    .catch((error) => {
      console.log(error.message)
      console.log('Despegue abortado')
    })
} else {
  console.log('Tecla incorrecta')
}
