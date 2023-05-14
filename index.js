//..................SIDEBAR................

const menuItem = document.querySelectorAll('.menu-item');

//remove classlist.........
const removeActive = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    });
}

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');

        if (item.id != 'notifice') {
            document.querySelector('.notification').style.display = 'none'
        } else {
            document.querySelector('.notification').style.display = 'block'
            document.querySelector('#notifice .count').style.display = 'none'
        }
    })
})
//.................MESSAGE............

const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');

message.addEventListener('click', () => {
    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display = 'none'

    setTimeout(() => {
        messageBox.classList.remove('box-sh');
    }, 2000);

})
//friend request..........
const addbtn = document.querySelectorAll('#add')
const delbtn = document.querySelectorAll('#del')

addbtn.forEach(ele => {
    ele.addEventListener('click', () => {
        ele.parentElement.style.display = 'none'
    })
})
delbtn.forEach(ele => {
    ele.addEventListener('click', () => {
        ele.parentElement.parentElement.style.display = 'none'
    })
})


//window.............
window.addEventListener('scroll', () => {
    themeBox.style.display = 'none'
    document.querySelector('.notification').style.display = 'none'
})

//............the customization.............
const themeMenu = document.querySelector('#thememenu');
const themeBox = document.querySelector('.theme')


themeMenu.addEventListener('click', () => {
    themeBox.style.display = 'grid'
})
//........................................CUSTOMIZE your site ..................................................
// const fontSize=
const textscreen = document.querySelector('#textscreen');
const fontsize = document.querySelector('#fontsize');
const color = document.querySelector('#colorbox')
const Light=document.querySelector('#Light')
const Dark=document.querySelector('#Dark')
const Black=document.querySelector('#Black')



function setColor() {
    textscreen.style.color = color.value;
}
function sizeChange() {
    textscreen.style.fontSize = fontsize.value + "px";
}
function setLight() {
    textscreen.style.backgroundColor =('hsl(252, 30%, 95%)');
    let set = Light.innerText;
    Light.innerText = "light";

    if (set === 'light') {
        Light.innerText = 'Light';
        textscreen.style.backgroundColor = "";
    }
}
function setDark(){
    textscreen.style.backgroundColor = ('hsl(252, 34%, 17%)');
    let set = Dark.innerText;
    Dark.innerText = "dark";

    if (set === 'dark') {
        Dark.innerText = 'Dark';
        textscreen.style.backgroundColor = "";
    }

}
function setBlack() {
    textscreen.style.backgroundColor = ('hsl(0, 0%, 0%)');
    let set = Black.innerText;
    Black.innerText = "black";

    if (set === 'black') {
        Black.innerText = 'Black';
        textscreen.style.backgroundColor = "";
    }

}
