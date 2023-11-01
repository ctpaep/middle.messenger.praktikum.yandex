import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <p class="read-the-docs">
      Список всех страниц проекта:
    </p>
    <div>список 1 main</div>
     <ul>
      <li><a href ="src/pages/login/index.hbs">Логин</a></li>
      <li><a href ="src/pages/registration">Регистрация</a></li>
      <li><a href ="src/pages/chat">Чаты</a></li>
      <li><a href ="src/pages/profile">Профиль</a></li>
      <li><a href ="src/pages/404/index.hbs">404</a></li>
      <li><a href ="src/pages/500">500</a></li>
    </ul>
  </div>
`