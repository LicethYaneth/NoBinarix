class Persona {
    constructor (nombre, apellido, id) {
      this.nombre = nombre
      this.apellido = apellido
      this.id = id
      this.nombreCompleto = null
    }
  
    asignarNombreCompleto (nombreCompleto) {
      this.nombreCompleto = nombreCompleto
    }
  
    hablar () {
      console.log('hablando...')
    }
  
    comer () {
      console.log('comiendo...')
    }
  }