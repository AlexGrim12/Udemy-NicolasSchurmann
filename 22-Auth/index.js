const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { expressjwt: expressJwt } = require('express-jwt')
const User = require('./user')

mongoose.connect(
  'mongodb+srv://AlexGrim:Alexgrim612@firsttime.brivsyr.mongodb.net/auth?retryWrites=true&w=majority'
)

const app = express()

app.use(express.json())

const validateJwt = expressJwt({
  secret: 'mi-string-secreto',
  algorithms: ['HS256'],
})
const signToken = (_id) => jwt.sign({ _id }, 'mi-string-secreto')

app.post('/register', async (req, res) => {
  const { body } = req
  console.log({ body })
  try {
    const isUser = await User.findOne({ email: body.email })
    if (isUser) {
      return res.status(403).send('User already exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(body.password, salt)
    const user = await User.create({
      email: body.email,
      password: hashed,
      salt,
    })
    const signed = signToken(user._id)
    res.status(201).send({ user, signed })
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

app.post(`/login`, async (req, res) => {
  const { body } = req
  try {
    const user = await User.findOne({ email: body.email })
    if (!user) {
      return res.status(403).send('User does not exist')
    } else {
      const isMatch = await bcrypt.compare(body.password, user.password)
      if (isMatch) {
        const signed = signToken(user._id)
        return res.status(200).send({ user, signed })
      } else {
        return res.status(403).send('Wrong user or password')
      }
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
})
const findAndAssignUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.auth._id)
    if (!user) {
      return res.status(401).end()
    }
    req.auth = user
    next()
  } catch (err) {
    next(err)
  }
}

const isAuthenticaded = express.Router().use(validateJwt, findAndAssignUser)

app.get('/lele', isAuthenticaded, (req, res) => {
  throw new Error('Nuevo Error')
  res.send(req.auth)
})

app.use((err, req, res, next) => {
  console.error('Mi nuevo error', err.stack)
  next(err)
})

app.use((err, req, res, next) => {
  res.send('Ha ocurrido un error :(')
  next(err)
})

app.listen(3000, () =>
  console.log('Server started on port 3000 http://localhost:3000/')
)
