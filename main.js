const client = document.querySelector('.cliente')
const PPPOE = document.querySelector('.loginPPPOE')
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
  let maiusculas =['A','B','C', 'D', 'E', 'F' ,'G','H','J','K','L','M','N','O','P','Q','R','S','T','U','W','X','Y','Z']
  let minusculas =['a','b','c', 'd', 'e', 'f' ,'g','h','i','j','k','m','n','o','p','q','r','s','t','u','w','x','y','z']

  let numeros =['0','1','2', '3', '4', '5' ,'6','7','8', '9']
  
  let senhaGerada = ''
    for(let i=0; i<2; i++){

      let sortMaiusculas = Math.floor(Math.random() * 25);
      let sortMinusculas = Math.floor(Math.random() * 25);
      let sortNumeros = Math.floor(Math.random() * (10 - 0) + 0);
      
      // console.log(maiusculas[sortMaiusculas])
      // console.log(minusculas[sortMinusculas])
      // console.log(numeros[sortNumeros])
      senhaGerada += maiusculas[sortMaiusculas] + minusculas[sortMinusculas] + numeros[sortNumeros]
    }
    
    return senhaGerada;
}

function gerarPPPOE(e){
  e.preventDefault();
  let dados = {
    nomeCliente: client.value,
    loginPPPOE: PPPOE.value,
    senhaPPPOE: PPPOE.value,
    senhaModem: GeraSenha(),
    codigoAparelho: codigoAparelho.value,
    caixaCTO: caixaCTO.value,
    porta: porta.value
  }
  if(client.value === '' || PPPOE === ' '){
     alert('Preencha os campos')
     return
   }

  console.log(dados)

  const boxResults = document.querySelector('.results')
  const contacts = document.querySelector('.contatosN2')
  boxResults.style.display = 'block'
  contacts.style.display = 'flex'


  boxResults.innerHTML = `
    <p><b>Nome do Cliente:</b>  ${dados.nomeCliente} </p>
    <p><b>Login PPPoE:</b> ${dados.loginPPPOE}jpr </p>
    <p><b>Senha PPPoE:</b> ${dados.loginPPPOE} </p>
    <p><b>Senha Modem:</b> Speed@${dados.senhaModem} </p>
    <p><b>Código do Aparelho:</b>${dados.codigoAparelho} </p>
    <p><b>Caixa:</b>${dados.caixaCTO} </p>
    <p><b>Porta:</b>${dados.porta} </p>
    <p><b>Vlan:</b> ${CalculaVlan(dados.caixaCTO)} </p>
  `
}

function CalculaVlan(caixa){
  let vlanCerta;

  if(caixa>=480){
    let menorCaixa = 480;
    let plus = 128;
    let vlan = 17;
    
    while(menorCaixa <= Number(caixa)){
      menorCaixa += plus
      vlan++
     if(menorCaixa >= Number(caixa)){
        vlanCerta = vlan;
       break;
     }
    }

  }else if(caixa <= 479){
    let vlan = Number(caixa / 64);
    vlanCerta = '1'+ Math.trunc(vlan);
  }
  return vlanCerta
}



function pedirLiberacao(e){
  e.preventDefault()
  const select = document.getElementById('contacts')
  const option = select.options[select.selectedIndex].value;
  let dados = {
    nomeCliente: client.value,
    loginPPPOE: loginPPPOE.value,
    senhaPPPOE: senhaPPPOE.value,
    senhaModem: GeraSenha(),
    codigoAparelho: codigoAparelho.value,
    caixaCTO: caixaCTO.value,
    porta: porta.value
  }
  const text = " *Nome do Cliente:*  " + dados.nomeCliente + "\n" + "*Login PPPoE:* " + dados.loginPPPOE + "jpr" + "\n" + "*Senha PPPoE:*  " + dados.senhaPPPOE + "\n" + "*Senha Modem:*  " + "Speed@" + dados.senhaModem + "\n" + "*Código do Aparelho:*  " + dados.codigoAparelho + "\n" + "*Caixa:*  " + dados.caixaCTO + "\n" + "*Porta:*  " + dados.porta
 
  const msg = window.encodeURIComponent(text)
  console.log(text);
  
  
  window.open(`https://api.whatsapp.com/send?phone=55${option}&text=${msg}`, '_blank')

}
