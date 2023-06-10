const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://AlexGrim:Alexgrim612@firsttime.brivsyr.mongodb.net/miapp?retryWrites=true&w=majority'
)

const User = mongoose.model('User', {
  username: String,
  age: Number,
})

const crear = async () => {
  const user = new User({ username: 'Leo', age: 17 })
  const savedUser = await user.save()
  console.log(savedUser)
}

// crear()

const buscarTodo = async () => {
  const users = await User.find()
  console.log(users)
}

// buscarTodo()

const buscar = async () => {
  const user = await User.find({ username: 'Alex' })
  console.log(user)
}

// buscar()
// genera un arreglo

const buscarUno = async () => {
  const user = await User.findOne({ username: 'Alex' })
  console.log(user)
}

// buscarUno()
// lo imprime sin ser arreglo

const actualizar = async () => {
  const user = await User.findOne({ username: 'Alex' })
  console.log(user)
  user.age = 19
  await user.save()
}

// actualizar()
// si se usa find se debe cuidar el arreglo

const eliminar = async () => {
  const user = await User.findOne({ username: 'Leo' })
  console.log(user)
  if (user) await user.deleteOne()
  else console.log('Could not find the user')
}

buscarUno()
