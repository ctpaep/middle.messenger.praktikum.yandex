import './style.scss'

document.querySelector('#app').innerHTML = `
  <div>
    <p class="read-the-docs">
      Список всех страниц проекта:
    </p>
    <nav>
     <ul>
      <li><a href ="pages/login/index.html">Логин</a></li>
      <li><a href ="pages/registration/index.html">Регистрация</a></li>
      <li><a href ="pages/chat/index.html">Чаты</a></li>
      <li><a href ="pages/profile/index.html">Профиль</a></li>
      <li><a href ="pages/page404/index.html">404</a></li>
      <li><a href ="pages/page500/index.html">500</a></li>
    </ul>
    </nav>
  </div>
`
