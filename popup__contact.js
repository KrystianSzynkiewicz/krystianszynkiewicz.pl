const contactButton = document.querySelector('.contact__avatar');
const contactPopup = document.querySelector('.contact__popup');
const cubePopup = document.querySelector('.cube__container');

contactButton.addEventListener('click', () => {
    if (contactPopup.classList == 'contact__popup deactive') {
        contactPopup.classList.add('fade__On');
        setTimeout( ()=> {
            contactPopup.classList.remove('deactive');
        }, 300)
    } else if (contactPopup.classList == 'contact__popup fade__On') {
        contactPopup.classList.remove('fade__On');
        contactPopup.classList.add('fade__Off');
        setTimeout(() => {
            contactPopup.classList.add('deactive');
        }, 300);
        setTimeout(()=> {
            contactPopup.classList.remove('fade__Off');
        }, 301);
    }
});

const cubeDeactivator = () => {
    if (screen.width < 900) {
        cubePopup.classList.add('deactive');
    }
};
cubeDeactivator();

//product1 popup
const product1Popup = document.querySelector('.product1__popup');
const exit = document.querySelector('.exit');
const product1 = document.getElementById('product1');

product1.addEventListener('click', () => {
    if (product1Popup.classList == 'product1__popup deactive') {

        product1Popup.classList.add('fade__On');
        
        contactButton.classList.add('fade__Off')
        setTimeout(()=>{
            contactButton.classList.add("deactive");
            setTimeout(()=> {
                contactButton.classList.remove('fade__Off')
            },300)
        },300);

        setTimeout( ()=> {
            product1Popup.classList.remove('deactive');
            setTimeout(()=> {
                product1Popup.classList.remove('fade__On');
            },300)
        },300)
    } 
});

exit.addEventListener('click', ()=> {

    product1Popup.classList.add('fade__Off')
    setTimeout(()=>{
        product1Popup.classList.add('deactive');
        setTimeout(()=>{
            product1Popup.classList.remove('fade__Off');
        })
    },300)
    contactButton.classList.add('fade__On');
    setTimeout(()=> {
        contactButton.classList.remove('deactive');
        setTimeout(()=>{
            contactButton.classList.remove('fade__On');
        })
    },300)

})



//product2 popup
const product2Popup = document.querySelector('.product2__popup');
const exit2 = document.querySelector('.exit2');
const product2 = document.getElementById('product2');

product2.addEventListener('click', () => {
    if (product2Popup.classList == 'product2__popup deactive') {

        product2Popup.classList.add('fade__On');
        
        contactButton.classList.add('fade__Off')
        setTimeout(()=>{
            contactButton.classList.add("deactive");
            setTimeout(()=> {
                contactButton.classList.remove('fade__Off')
            },300)
        },300);

        setTimeout( ()=> {
            product2Popup.classList.remove('deactive');
            setTimeout(()=> {
                product2Popup.classList.remove('fade__On');
            },300)
        },300)
    } 
});

exit2.addEventListener('click', ()=> {

    product2Popup.classList.add('fade__Off')
    setTimeout(()=>{
        product2Popup.classList.add('deactive');
        setTimeout(()=>{
            product2Popup.classList.remove('fade__Off');
        })
    },300)
    contactButton.classList.add('fade__On');
    setTimeout(()=> {
        contactButton.classList.remove('deactive');
        setTimeout(()=>{
            contactButton.classList.remove('fade__On');
        })
    },300)

})

//product3 popup
const product3Popup = document.querySelector('.product3__popup');
const exit3 = document.querySelector('.exit3');
const product3 = document.getElementById('product3');

product3.addEventListener('click', () => {
    if (product3Popup.classList == 'product3__popup deactive') {

        product3Popup.classList.add('fade__On');
        
        contactButton.classList.add('fade__Off')
        setTimeout(()=>{
            contactButton.classList.add("deactive");
            setTimeout(()=> {
                contactButton.classList.remove('fade__Off')
            },300)
        },300);

        setTimeout( ()=> {
            product3Popup.classList.remove('deactive');
            setTimeout(()=> {
                product3Popup.classList.remove('fade__On');
            },300)
        },300)
    } 
});

exit3.addEventListener('click', ()=> {

    product3Popup.classList.add('fade__Off')
    setTimeout(()=>{
        product3Popup.classList.add('deactive');
        setTimeout(()=>{
            product3Popup.classList.remove('fade__Off');
        })
    },300)
    contactButton.classList.add('fade__On');
    setTimeout(()=> {
        contactButton.classList.remove('deactive');
        setTimeout(()=>{
            contactButton.classList.remove('fade__On');
        })
    },300)

})

// setInterval(()=>{
//     if(product1Popup.classList !== 'product1__popup deactive' || product2Popup.classList !== 'product2__popup deactive') {
//         //waiting after touchmove!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         document.removeEventListener("touchstart", startTouch);
//         setTimeout(startTouchON, 1000);
//         //waiting after touchmove!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         document.removeEventListener("touchend", endTouch);
//         setTimeout(endTouchON, 1000);

//         document.removeEventListener("touchstart", startTouch);
//         setTimeout(startTouchON, 1000);
//         //waiting after touchmove!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         document.removeEventListener("touchend", endTouch);
//         setTimeout(endTouchON, 1000);
//         body.removeEventListener("wheel", scrollFunction);
//         setTimeout(addScroll, 1100);
//         }

// },500)
//wyłączenie scrola itp gdy popupy aktywne