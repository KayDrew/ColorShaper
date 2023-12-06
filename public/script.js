const Message = document.querySelector('.message');

if(Message.innerHTML !== '' ){
    setTimeout(function(){
      Message.innerHTML = ''
    
    }, 3500);
}