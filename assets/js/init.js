
$(document).ready(function() {
  $('#dragD').hide();
  $('#alert').hide();
  $('.button-collapse').sideNav();
  $('select').material_select();
}); // end of document ready
   
// ACA DECLARAREMOS NUESTRAS FUNCIONES PARA HACER POSIBLE LA TRANSFERNCIA DE DATOS
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);// ACA INDICAMOS EL TIPO DE DATO (FORMATO) QUE VAMOS A TRANFERIR 
}

function permitirDrop(ev) {
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var idPic = ev.dataTransfer.getData('text');// ACA RECUPERAMOS LOS DATOS 
  ev.target.appendChild(document.getElementById(idPic));
} 

$('#buttonP').click(function() {
  var chart = (/([A-Za-z]*)/);
  var password = $('#password').val().length;;
  var checkPass = $('#password').val().match(chart);
  var alert = $('#alert');
  var email = $('#email');  
  // console.log(checkPass);                                     
  if (email.hasClass('valid') && password !== 0 && password >= 6) {
    $('#dragD').show();
    $('#initD').hide();
  } else if (email.hasClass('invalid')) {
    alert.show();
    alert.text('Ingresa un formato de correo válido');
    setTimeout(function() {
      alert.hide(); 
    }, 5000);
  } if (checkPass[0] === '') {
    alert.text('Ingresa un password sin numeros');
    alert.show();
    setTimeout(function() { 
      alert.hide();
    }, 5000);
  } if (password <= 6) {
    alert.text('Ingresa un password mayor de 6 caracteres');
    alert.show();
    setTimeout(function() { 
      alert.hide();
    }, 5000);
  }
});
// firebase trabaja con referencias, atravez de la referencias accedemos  a la data 
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCRo9Y6hu2fPg88S00vd4-2lb9E-2nzgws',
  authDomain: 'draganddrop-ca86f.firebaseapp.com',
  databaseURL: 'https://draganddrop-ca86f.firebaseio.com',
  projectId: 'draganddrop-ca86f',
  storageBucket: 'draganddrop-ca86f.appspot.com',
  messagingSenderId: '402962922580'
};
  firebase.initializeApp(config);

  var ref = firebase.database().ref();
  // Esto es un evento que devuelve el valor de el hijo'hola'
  ref.child('hola').on('value',function(snapshot){ //el, elemento snapSHot forografia instantanea de como esta
    console.log(snapshot.val())
    document.getElementById('reg').textContent = snapshot.val();
  });
  