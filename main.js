

const btn_login = document.querySelectorAll('.btn-login')
const btn_register = document.querySelectorAll('.btn-register')

const container = document.querySelector('.container')


btn_login.forEach(button => {
    button.addEventListener('click', (e)=> {
        e.preventDefault()
        container.classList.remove('active')
    })
})

btn_register.forEach(button => {
    button.addEventListener('click', (e)=> {
        e.preventDefault()
        container.classList.add('active')
    })
})


/* confirmação de senha */


function password_confir() {
    
    const password = document.querySelector('#password-register')
    const password_confir = document.querySelector('#password-confir')
    const field = password_confir.parentElement
    


    if(password_confir.value === password.value){
        password_confir.classList.remove('border-error')
        field.querySelector('.error').remove()
    }else{
        if(!field.querySelector('span')){
            const error = document.createElement('span')
            error.classList.add('error')
            error.textContent = '* Senha não correspondente *'
            field.appendChild(error)
        }
        password_confir.classList.add('border-error')
    }

}

// modal de error ou aviso //

function openModel(mensagem){

    const modal = document.querySelector('.modal')

    const modal_body = modal.querySelector('.modal-body')

    const modal_time = modal.querySelector('.modal-time')

    modal_body.textContent = mensagem

    modal.classList.add('d-flex')

    let progressTime = 100

    time = setInterval(()=>{

        console.log('tempo')
        progressTime--

        //modal_time.style.background = `linear-gradient(90deg, var(--color-secondary) ${progressTime}%, var(--color-light) 0%)`

        modal_time.style.width = progressTime+'%'

        if(progressTime < 0){
            modal.classList.remove('d-flex')
            clearInterval(time)
        }

    } , 100)

}

function closeModel(){
    const modal = document.querySelector('.modal')

    clearInterval(time)

    modal.classList.remove('d-flex')
}

// validação de dados //

function validation(e){

    e.preventDefault()

    let form = e.target

    inputs = form.querySelectorAll('input')
    

    inputs.forEach( input => {
        if(input.value == '' || input.value == undefined || input.value == null){
            let field = input.parentElement
            let label = field.querySelector('label')
            let error = document.createElement('span')
            error.classList.add('error')
            error.textContent = '* '+label.textContent+' não preenchido *'

            field.appendChild(error)
        }

    })

    openModel('Deu error')


    document.addEventListener('click', ()=>{
         document.querySelectorAll('.error').forEach( error =>{
             error.remove()
         })

         closeModel()
    })

}


document.getElementById('register-form').addEventListener('submit', validation)
document.getElementById('login-form').addEventListener('submit', validation)

document.querySelector('.modal-exit i').addEventListener('click', closeModel)