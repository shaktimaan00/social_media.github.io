//sidebar
const menuItems = document.querySelectorAll('.menu-item');

//messages
const messagesNotification = document.querySelector('.messages');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');



// ===================SIDEBAR==============

//REMOVE ACTIVE CLASS FROM EACH ITEM
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// messages
//search chats

// const searchMessage = () =>{
//     const val = messageSearch.value.toLowerCase();
//     //console.log(val);
//     message.forEach(chat =>{
//         let name = chat.querySelectorAll('h5').textContent.toLowerCase;
//         if(name.indexOf(val) != -1){
//             chat.style.display = 'flex';
//         }else{
//             chat.style.display = 'none';
//         }
//     })
// }

//search chat
// messageSearch.addEventListener('keyup', searchMessage);



// messagesNotification.addEventListener('click', () =>{
//     messages.style.boxShadow = '0 0 1rem var(--color-primary)';
//     messagesNotification.querySelector('.notification-count').style.display = 'none';
//     setTimeout( () =>{
//         messages.style.boxShadow = 'none';
//     }, 2000);
// })

//THEME-DISPLAY CUSTOMIZATION

const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);
