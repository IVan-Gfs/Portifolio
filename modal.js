const btnsOpen = document.querySelectorAll('[data-modal]')
const btnsClose = document.querySelectorAll('.close');

btnsOpen.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const modalID = btn.getAttribute('data-modal')

        const modal = document.getElementById(modalID);
        if(modal){
            modal.style.display = 'block'
            console.log(modal)
        }
       
    })
})

btnsClose.forEach( btn => {
    
    
    btn.addEventListener('click', (modal) => {
        
        btn.parentNode.parentNode.style.display = 'none'
    } )
})