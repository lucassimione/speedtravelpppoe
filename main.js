const client = document.querySelector('.cliente')
const loginPPPOE = document.querySelector('.loginPPPOE')
const senhaPPPOE = document.querySelector('.senhaPPPOE')
const senhaModem = document.querySelector('.senhaModem')
const codigoAparelho = document.querySelector('.codigoAparelho')
const caixaCTO = document.querySelector('.caixaCTO')
const porta = document.querySelector('.porta')

const form = document.querySelector('.form')

const btn_gerar = document.querySelector('.gerar')
const btn_Liberacao = document.querySelector('.btn_liberacao') 
const btn_reset = document.querySelector('.resetar') 


btn_gerar.addEventListener('click',gerarPPPOE);
btn_Liberacao.addEventListener('click',pedirLiberacao)
btn_reset.addEventListener('click',(e)=>{
  e.preventDefault()
  form.reset()
  const boxResults = document.querySelector('.results')
  const contacts = document.querySelector('.contatosN2')
  boxResults.innerHTML=''
  boxResults.style.display = 'none'
  contacts.style.display = 'none'
})

function GeraSenha(){
  let maiusculas =['A','B','C', 'D', 'E', 'F' ,'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','W','X','Y','Z']
  let minusculas =['a','b','c', 'd', 'e', 'f' ,'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z']

  let numeros =['0','1','2', '3', '4', '5' ,'6','7','8', '9']
  
  let senhaGerada = ''
    for(let i=0; i<2; i++){

      let sortMaiusculas = Math.floor(Math.random() * (25 - 0) + 0);
      let sortMinusculas = Math.floor(Math.random() * (25 - 0) + 0);
      let sortNumeros = Math.floor(Math.random() * (10 - 0) + 0);
  
      // console.log(maiusculas[sortMaiusculas])
      // console.log(minusculas[sortMinusculas])
      // console.log(numeros[sortNumeros])
      senhaGerada += maiusculas[sortMaiusculas] + minusculas[sortMinusculas] + numeros[sortNumeros]
    }
    
    return senhaGerada;
}

senhaModem.addEventListener('click',()=>{
  senhaModem.value = GeraSenha()
})



function gerarPPPOE(e){
  e.preventDefault();
  if(client.value === '' || loginPPPOE === ' ' || senhaPPPOE === '' || senhaModem === '' ){
    alert('Preencha os campos')
    return
  }
  let dados = {
    nomeCliente: client.value,
    loginPPPOE: loginPPPOE.value,
    senhaPPPOE: senhaPPPOE.value,
    senhaModem: senhaModem.value,
    codigoAparelho: codigoAparelho.value,
    caixaCTO: caixaCTO.value,
    porta: porta.value

  }

  console.log(dados)

  const boxResults = document.querySelector('.results')
  const contacts = document.querySelector('.contatosN2')
  boxResults.style.display = 'block'
  contacts.style.display = 'flex'


  boxResults.innerHTML = `
    <p><b>Nome do Cliente:</b>  ${dados.nomeCliente} </p>
    <p><b>Login PPPoE:</b> ${dados.loginPPPOE}jpr </p>
    <p><b>Senha PPPoE:</b> ${dados.senhaPPPOE} </p>
    <p><b>Senha Modem:</b> Speed@${dados.senhaModem} </p>
    <p><b>Código do Aparelho:</b>${dados.codigoAparelho} </p>
    <p><b>Caixa:</b>${dados.caixaCTO} </p>
    <p><b>Porta:</b>${dados.porta} </p>
  `
}

function pedirLiberacao(e){
  e.preventDefault()
  const select = document.getElementById('contacts')
  const option = select.options[select.selectedIndex].value;
  let dados = {
    nomeCliente: client.value,
    loginPPPOE: loginPPPOE.value,
    senhaPPPOE: senhaPPPOE.value,
    senhaModem: senhaModem.value,
    codigoAparelho: codigoAparelho.value,
    caixaCTO: caixaCTO.value,
    porta: porta.value
  }
  const text = " *Nome do Cliente:*  " + dados.nomeCliente + "\n" + "*Login PPPoE:* " + dados.loginPPPOE + "jpr" + "\n" + "*Senha PPPoE:*  " + dados.senhaPPPOE + "\n" + "*Senha Modem:*  " + "Speed@" + dados.senhaModem
 
  const msg = window.encodeURIComponent(text)
  console.log(text);
  
  
  window.open(`https://api.whatsapp.com/send?phone=55${option}&text=${msg}`, '_blank')

}