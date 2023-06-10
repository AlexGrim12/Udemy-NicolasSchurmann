const loadInitialTemplate = () => {
  const template = `
    <h1>Usuarios</h1>
    <form id="user-form">
        <div>
            <label>Nombre</label>
            <input type="text" name="name" />
        </div>
        <div>
            <label>Apellidos</label>
            <input type="text" name="lastname" />
        </div>
        <button type="submit">Enviar</button>
    </form>
    <ul id="users-list"></ul>
    `
  const body = document.getElementsByTagName('body')[0]
  body.innerHTML = template
}

const getUsers = async () => {
  const response = await fetch('/users')
  const users = await response.json()
  const template = (user) => `
    <li>
        ${user.name} ${user.lastname} <button data-id="${user._id}">Eliminar</button>
    </li>
    `

  const userList = document.getElementById('users-list')
  userList.innerHTML = users.map((user) => template(user)).join('')
  users.forEach((user) => {
    const userNode = document.querySelector(`[data-id="${user._id}"]`)
    userNode.onclick = async (e) => {
      await fetch(`/users/${user._id}`, {
        method: 'DELETE',
      })
      userNode.parentNode.remove()
      alert('Usuario eliminado')
    }
  })
}

const addFormListener = () => {
  const userForm = document.getElementById('user-form')
  userForm.onsubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(userForm)
    const data = Object.fromEntries(formData.entries())
    await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    userForm.reset()
    getUsers()
  }
}

window.onload = function () {
  loadInitialTemplate()
  addFormListener()
  getUsers()
}
