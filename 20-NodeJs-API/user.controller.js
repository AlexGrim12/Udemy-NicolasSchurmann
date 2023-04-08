const User = {
  get: (req, res) => {
    res.status(200).send('Este es un chanchito')
  },
  list: (req, res) => {
    res.status(200).send('Hola chanchito!')
  },
  create: (req, res) => {
    res.status(201).send('Creando un chanchito')
  },
  update: (req, res) => {
    res.status(204).send('Actualizando un chanchito')
  },
  destroy: (req, res) => {
    res.status(204).send('Eliminando un chanchito :(')
  },
}

module.exports = User
