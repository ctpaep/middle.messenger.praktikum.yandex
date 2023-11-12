import data from './mockChat.json'
import './chat.scss'

const result = data.map(d => {
    return `<div class = "chat-item">
    <div class="chat-avatar">
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23.5" cy="23.5" r="23.5" fill="#40A6FF"/>
        </svg>
    </div>
    <div class="chat-body">
        <div class="chat-name">${d.last_message.user.first_name}</div>
        <div class="chat-message">${d.last_message.content}</div>
    </div>
    <div class="chat-footer">
        <div class="chat-time">15:12</div>
        <div class="chat-new-message">${d.unread_count}</div>
    </div>
</div>`
}).join('')

document.querySelector('#chatslist').innerHTML = result
