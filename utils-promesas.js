export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Mostrar horas y lanzar error
export const mostrarHora = () => {
  const time = new Date()
  const hora = time.getHours()
  const minuto = time.getMinutes()
  const segundo = time.getSeconds()
  console.log(`${hora}:${minuto}:${segundo}`)
}

export const finEtapa = (etapa) => {
  console.log(`Fin de la etapa: ${etapa}`)
  mostrarHora()
}

export const esperarDuracion = (duracion) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duracion * 1000)
  })
}

// Funciones para las etapas
export const etapa1 = () => {
  console.log('Inicio de la etapa 1')
  mostrarHora()
  let error = false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error = true
    }, getRandomInt(1000, 40000))
    if (!error) {
      esperarDuracion(5).then(() => {
        finEtapa(1)
        resolve()
      })
    } else {
      reject(new Error('Error en la etapa 1'))
    }
  }
  )
}

export const etapa2 = () => {
  console.log('Inicio de la etapa 2')
  mostrarHora()
  let error = false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error = true
    }, getRandomInt(1000, 40000))

    if (!error) {
      esperarDuracion(8).then(() => {
        finEtapa(2)
        resolve()
      })
    } else {
      reject(new Error('Error en la etapa 2'))
    }
  })
}

export const etapa3 = () => {
  console.log('Inicio de la etapa 3')
  mostrarHora()
  let error = false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error = true
    }, getRandomInt(1000, 40000))

    if (!error) {
      esperarDuracion(12).then(() => {
        finEtapa(3)
        resolve()
      })
    } else {
      reject(new Error('Error en la etapa 3'))
    }
  })
}

export const etapa4 = () => {
  console.log('Inicio de la etapa 4')
  mostrarHora()
  let error = false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error = true
    }, getRandomInt(1000, 40000))

    if (!error) {
      esperarDuracion(10).then(() => {
        finEtapa(4)
        resolve()
      })
    } else {
      reject(new Error('Error en la etapa 4'))
    }
  })
}
