//HELP BTNS


  $(".up").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

var root = location.protocol + '//' + location.host;


$(".home").click(function() {
  window.location.href = root;
});








$(function () {
             var $win = $(window);

             $win.scroll(function () {
                 if ($win.scrollTop() > 0){
                    $(".help_btns").css("display","inherit");
                  }  
             });
                 
         });

//MAP




 // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,
                    disableDefaultUI: true,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(20.692236, -103.454046), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                   styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#d80117"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"84"},{"lightness":"58"},{"gamma":"5.76"},{"color":"#fdd2d2"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"color":"#981010"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8},{"color":"#ed3d3d"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"lightness":"-4"},{"hue":"#ff0000"},{"saturation":"48"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":"-1"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"road.highway","elementType":"all","stylers":[{"lightness":"0"},{"hue":"#ff4200"},{"saturation":"28"},{"visibility":"simplified"},{"weight":"1"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"-4"},{"invert_lightness":true},{"visibility":"simplified"},{"color":"#fb6060"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"},{"weight":"1.29"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
                var marker = new google.maps.Marker({
                    address: "Av. Vallarta 6503",
                    position: new google.maps.LatLng(20.692236, -103.454046),
                    map: map,
                    title: 'Exaris',
              
                });
                marker.setIcon('../images/icnmap.png');
            }



// h_menu=$(".q").width();
// $(".q").animate({height:h_menu}, 700);
// $(".logo").css("height",h_menu);

$(".logo img, .menu").jAnimate('fadeIn');

// $(".barmenu").jAnimate('zoomIn');

$("#1").mouseover(function(){$("#1 img").jAnimate('fadeInUp');});
$("#2").mouseover(function(){$("#2 img").jAnimate('fadeInUp');});
$("#3").mouseover(function(){$("#3 img").jAnimate('fadeInUp');});
$("#4").mouseover(function(){$("#4 img").jAnimate('fadeInUp');});
$("#5").mouseover(function(){$("#5 img").jAnimate('fadeInUp');});

$(".foot-p span").mouseover(function(){$(".foot-p span").jAnimate('jello');});
$("#btn_download").mouseover(function(){$("#btn_download img").jAnimate('jello');});

//BOTON BACK


$(".btn-back").mouseover(function(){
  $(".btn-back span").removeClass("fadeInUp");
  $(".btn-back span").removeClass("fadeInDown");
  $(".btn-back span").addClass("rubberBand");
});

$(".btn-back").mouseleave(function(){
  $(".btn-back span").addClass("fadeInUp");
  $(".btn-back span").addClass("fadeInDown");
  $(".btn-back span").removeClass("rubberBand");
});


// boton de la seccion

function btn_active(data){

  $("."+ data ).css("background-color","blue");
  $(".back").attr("href",data);

}



   if(window.location.href.indexOf("aviation") > -1) {
   btn_active("aviation");
   $(".logo").empty();
   $(".logo").append('<img src="images/l_aviation.svg">');

  }


$(document).ready(function () {
   if(window.location.href.indexOf("consulting") > -1) {
   btn_active("consulting");
   $(".logo").empty();
   $(".logo").append('<img src="images/l_consulting.svg">');
  }
});

$(document).ready(function () {
   if(window.location.href.indexOf("medical") > -1) {
   btn_active("medical");
   $(".logo").empty();
   $(".logo").append('<img src="images/l_medical.svg">');
  }
});

$(document).ready(function () {
   if(window.location.href.indexOf("energy") > -1) {
   btn_active("energy");
   $(".logo").empty();
   $(".logo").append('<img src="images/l_energy.svg">');
  }
});

$(document).ready(function () {
   if(window.location.href.indexOf("safety") > -1) {
   btn_active("safety");
   $(".logo").empty();
   $(".logo").append('<img src="images/l_safety.svg">');
  }
});

//------------------------------Producto




function medHead(){
  $(".bar-section").append("<img src='images/l_medical_w.svg'>");
  $(".bar-section").css("background-image","url(../images/med-head.jpg)");
}

function avHead(){
  $(".bar-section").append("<img src='images/l_aviation_w.svg'>");
  $(".bar-section").css("background-image","url(../images/av-head.jpg)");
}

function enHead(){
  $(".bar-section").append("<img src='images/l_energy_w.svg'>");
  $(".bar-section").css("background-image","url(../images/en-head.jpg)");
}

function conHead(){
  $(".bar-section").append("<img src='images/l_consulting_w.svg'>");
  $(".bar-section").css("background-image","url(../images/con-head.jpg)");
}

function safHead(){
  $(".bar-section").append("<img src='images/l_safety_w.svg'>");
  $(".bar-section").css("background-image","url(../images/saf-head.jpg)");
}


var count= 0;



function showProduct(company,product){

if(window.location.href.indexOf("medical") > -1) {medHead();}
if(window.location.href.indexOf("aviation") > -1) {avHead();}
if(window.location.href.indexOf("safety") > -1) {safHead();}
if(window.location.href.indexOf("consulting") > -1) {conHead();}
if(window.location.href.indexOf("energy") > -1) {enHead();}




  var company=company;
  var oneProduct=product;

    
    $(".logo-p").append("<img src='images/"+company+"/"+oneProduct+".png'>")
    $("."+oneProduct).css("display","initial");
    $("."+oneProduct).addClass("animated fadeIn");
    
    for (var i = 1; i < 60; i++) {
        
        $.ajax({
            url:'images/products/'+company+'/'+oneProduct+'/'+i+'.jpg',
            type:'HEAD',
            error: function()
            { 
              //file doesn't exist
            },
            success: function()
            {
                count++;
                  $(".pic-prod").append("<div class='col-md-3 pro-"+count+"' ><img src='images/products/"+company+"/"+oneProduct+"/"+
                    count+".jpg'> ");
                   $(".pic-prod").append("<script>resize("+count+");</script>");
               
            }
        });
        
    };
    
  
}

//get the producto by url


var urlParts=location.hash.split('&', 2);
urlParts[0]=urlParts[0].substr(1);

showProduct(urlParts[0],urlParts[1]);



// zoom IMG



var p;
    function resize(data){
      var q= data;

      $( ".pro-"+q ).click(function() {
          console.log("hola");
          // CERRAMOS LA VIEJA IMAGEN
        
        if (q!=p) {
            console.log(p)
          $(".pro-"+ p +"  img").animate({height: "13em"},500);
          $( ".pro-"+ p ).animate({width:"25%"});
          $( ".pro-"+ p ).css("background-color", "white");
          $( ".pro-"+ p ).removeClass("blackPic");
        }

          // ABRIMERO LA NUEVA IMAGEN

          $(".pro-"+ q +"  img").animate({height: 400},500);
          $( ".pro-"+q ).animate({width:"100%"});
          $( ".pro-"+q ).css("background-color", "#c3c3c3;");
          $( ".pro-"+q ).addClass("blackPic");

          p=q;


    });

}




//---------------------MEDICAL
var ar=[

  m1={
  titulo: "Mortech",
  content: "Desde 1985 se ha dedicado a la fabricación de equipo post mortem de alta calidad. Cuenta con un equipo altamente capacitado además de tener equipo de manufactura de última generación, lo que les permite ofrecer productos de primera; eso sin dejar de lado el excelente servicio al cliente y atención a los detalles.",
  logo:"medical/mortech.png",  
  imgMin:"medical/mortech",
  link: "#medical&mortech"},

  m1={
  titulo: "Nora",
  content: "Los pisos de la industria lo requieren todo: seguridad para la alta tecnología, resistencia a productos químicos, ergonomía para los usuarios, superficies sin poros, una aptitud óptima para la limpieza y mucho más.",
  logo:"medical/nora.png",
  imgMin:"medical/nora",
  link: "#medical&nora"},

  m1={
  titulo: "Transmotion",
  content: "Fabricante de sillas quirúrgicas multipropósito, ideales para procedimientos de radiología, cirugía de corta estancia, recuperación, oftalmología, gastroenterología, cirugía plástica, etc. ",
  logo:"medical/trans.png",
  imgMin:"medical/trans",
  link: "#medical&trans"},

    m1={
  titulo: "Metro",
  content: "Diseño, planeación y suministro de soluciones para el transporte y almacenamiento dentro de los hospitales.",
  logo:"medical/metro.png",
  imgMin:"medical/metro",
  link: "#medical&metro"},

  m1={
  titulo: "Mortara",
  content: "Electrocardiógrafos (ECG) en reposo, electrocardiógrafos para pruebas de esfuerzo, Holters, monitoreo móvil para pacientes, monitoreo ambulatorio de presión arterial.",
  logo:"medical/mortara.png",
  imgMin:"medical/mortara",
  link: "#medical&mortara"},

  m1={
  titulo: "ErgoMates",
  content: "ErgoMates® es el tapete antifatiga normal y antiestático que te pones. En lugar de estar atado a un espacio definido por el área del tapete antifatiga convencional, los ErgoMates® permiten movilidad y seguridad en cada paso.",
  logo:"medical/ergo.png",
  imgMin:"medical/ergo",
  link: "#medical&ergo"},

  m1={
  titulo: "Exare",
  content: "Es la línea de candados y cinchos pasivos ideales para mantener un control visual del contenido de los carros de paro, cajas de instrumental o medicamentos, gabinetes de resguardo. Cada candado/cincho viene marcado con un número de serie único. ",
  logo:"medical/exare.png",
  imgMin:"medical/exare",
  link: "#medical&exare"},


  m1={
  titulo: "Evironmental sensors",
  content: "Fabricante de monitores electrónicos para la medición ambiental de diferentes vapores. Ej. Oxido de etileno, formaldehído, etc.",
  logo:"medical/sensors.png",
  imgMin:"medical/sensors",
  link: "#medical&sensors"},

  m1={
  titulo: "Advance Chemical Sensors",
  content: "Fabricante de monitores pasivos para la medición personal de diferentes  vapores como: oxido de etileno, agentes anestésicos, óxido nitroso, peróxido de hidrógeno, glutaraldehído, formaldehído, ácido acético, acetona, benceno, etc.",
  logo:"medical/advance.png",
  imgMin:"medical/advance",
  link: "#medical&advance"},

  m1={
  titulo: "GCX",
  content: "Sistemas de montaje para todo tipo de monitores y equipo hospitalario, así como para computadoras y monitores LCD. Existen sistemas móviles, sistemas para pared, techo, piso, etc.",
  logo:"medical/gcx.png",
  imgMin:"medical/gcx",
  link: "#medical&gcx"},

  m1={
  titulo: "Sharn",
  content: "Fabrica una amplia línea de productos para anestesia y Ceye. Desde sensores de temperatura digitales y desechables, protectores de ojos y una línea completa de cepillos para lavado de todo tipo de instrumental quirúrgico.",
  logo:"medical/sharn.png",
  imgMin:"medical/sharn",
  link: "#medical&sharn"},

  m1={
  titulo: "Action",
  content: "Hoy en día el manejo de daños por presión en los pacientes es muy importante para los hospitales. Los posicionadores Action® ofrecen al paciente el manejo optimo de presión y reduce las llagas de presión en quirófanos y otras áreas como terapias y pacientes pediátricos.",
  logo:"medical/action.png",
  imgMin:"medical/action",
  link: "#medical&action"},

  m1={
  titulo: "Medical",
  content: "Ahora que el mercurio ha sido prohibido no debe estar más en los hospitales. Por ello Medical Indicators fabrica la mejor opción en monitoreo de temperatura. Existen diferentes modelos: desechables, reusables, para niños.",
  logo:"medical/medical.png",
  imgMin:"medical/medial",
  link: "#medical&medical"},

   m1={
  titulo: "Gander",
  content: "Los organizadores Gander permiten tener el quirófano organizado correctamente. Al mismo tiempo permite colocar en la ventana de los organizadores publicidad o comunicados del hospital.",
  logo:"medical/gander.png",
  imgMin:"medical/gander",
  link: "#medical&gander"},

   m1={
  titulo: "Carstens",
  content: "Carstens es especialista en la fabricación de expedientes y portaexpedientes  clínicos. ",
  logo:"medical/carstens.png",
  imgMin:"medical/carstens",
  link: "#medical&carstens"},

  m1={
  titulo: "OP-Marks",
  content: "OP-Marks es la mejor opción para terminar con los errores del sitio equivocado en las cirugías, ya que está diseñado para marcar al paciente de una forma clara, exacta y optima previo a la cirugía.",
  logo:"medical/op.png",
  imgMin:"medical/op",
  link: "#medical&op"},

  m1={
  titulo: "Tic-Tong®",
  content: "El abatelenguas Tic-Tong® está fabricado de plástico no tóxico, no estéril, desechable, en diversos colores y estilos, con sabor y aroma a tutti-frutti.",
  logo:"medical/tic.png",
  imgMin:"medical/tic",
  link: "#medical&tic"},


  ];


//---------------------SAFETY
  var ar2=[
  m1={
  titulo: "Evac Chair",
  content: "Las sillas de evacuación Evac+Chair® son la solución universal para el descenso por escaleras durante una emergencia.",
  logo:"safety/eva.png",
  imgMin:"safety/evan",
  link: "#safety&eva"},

  m1={
  titulo: "Escape Chute",
  content: "Diseño y suministro de sistemas de evacuación rápida para edificios, plantas de manufactura, escuelas, edificios altos",
  logo:"safety/escape.png",
  imgMin:"safety/escape",
  link: "#safety&escape"},

  m1={
  titulo: "Guardian angel",
  content: "El dispositivo Guardian Angel® fabricado por 425, Inc., es la primer torreta personal. ",
  logo:"safety/guardian.png",
  imgMin:"safety/guardian",
  link: "#safety&guardian"},


  m1={
  titulo: "Sky",
  content: "El Skysaver® es un dispositivo de evacuación personal de descenso controlado que permite que el propietario salga del edificio en cuestión de segundos en caso de incendio, temblor, actos de terrorismo, etc.",
  logo:"safety/sky.png",
  imgMin:"safety/sky",
  link: "#safety&sky"},


  m1={
  titulo: "ErgoMates",
  content: "ErgoMates® es el tapete antifatiga normal y antiestático que te pones. En lugar de estar atado a un espacio definido por el área del tapete antifatiga convencional, los ErgoMates® permiten movilidad y seguridad en cada paso.",
  logo:"safety/ergo_p.png",
  imgMin:"safety/ergo_p",
  link: "#safety&ergo_p"},

  m1={
  titulo: "Evironmental sensors",
  content: "Fabricante de monitores electrónicos para la medición ambiental de diferentes vapores. Ej. Oxido de etileno, formaldehído, etc.",
  logo:"safety/sensors.png",
  imgMin:"safety/sensors",
  link: "#safety&sensors"},

  m1={
  titulo: "Advance Chemicals",
  content: "Fabricante de monitores pasivos para la medición personal de diferentes  vapores como: oxido de etileno, agentes anestésicos, óxido nitroso, peróxido de hidrógeno, glutaraldehído, formaldehído, ácido acético, acetona, benceno,  etc.",
  logo:"safety/advance.png",
  imgMin:"safety/advance",
  link: "#safety&advance"},


  m1={
  titulo: "Nora",
  content: "Los pisos de la industria lo requieren todo: seguridad para la alta tecnología, resistencia a productos químicos, ergonomía para los usuarios, superficies sin poros, una aptitud óptima para la limpieza y mucho más.",
  logo:"safety/nora_s.png",
  imgMin:"safety/nora_s",
  link: "#safety&nora_s"},

  m1={
  titulo: "Exare",
  content: "Es la línea de candados y cinchos pasivos ideales para mantener un control visual del contenido de los carros de paro, cajas de instrumental o medicamentos, gabinetes de resguardo. Cada candado/cincho viene marcado con un número de serie único. ",
  logo:"safety/exare.png",
  imgMin:"safety/exare",
  link: "#safety&exare"},
  

  ];




for (var i = 0; i < ar2.length; i++) {
 
$(".saf-prod").append('<a href="/producto'+ar2[i].link+'"><div class="col-md-4 producto"><div class="foto-p'+ 
'" style="background-image: url(../images/'+ar2[i].imgMin+'-min.png);"></div><div class="btn-p text-center">'+
'<img src="../images/btn_p.svg" alt=""></div><div class="logo-p text-center"><img src="../images/'+
ar2[i].logo+'" alt=""></div><div class="txt-p text-justify"><strong>'+
ar2[i].titulo+' </strong><p>'+ ar2[i].content +'</p></div></div></a>');

};



for (var i = 0; i < ar.length; i++) {
 
$(".main-prod").append('<a href="/producto'+ar[i].link+'"><div class="col-md-4 producto"><div class="foto-p'+ 
'" style="background-image: url(../images/'+ar[i].imgMin+'-min.png);"></div><div class="btn-p text-center">'+
'<img src="../images/btn_p.svg" alt=""></div><div class="logo-p text-center"><img src="../images/'+
ar[i].logo+'" alt=""></div><div class="txt-p text-justify"><strong>'+
ar[i].titulo+' </strong><p>'+ ar[i].content +'</p></div></div></a>');

};



//---------------------AVIATION
// var ar3=[

//   m1={
//   titulo: "Evans Consoles ",
//   content: "Las consolas Evans son diseñadas para llevar a cabo las misiones más críticas tales como Control de Tránsito Aéreo. Su estructura de acero brinda gran durabilidad requerida para misiones de alto estrés en la operación los 365 días.",
//   logo:"aviation/evans.png",
//   imgMin:"aviation/evans",
//   link: "#aviation&evans"},

//   m1={
//   titulo: "Evans Airport ",
//   content: "Evans Airport Solutions ofrece todo el diseño integral del interior de la terminal aérea, desde las áreas comerciales, pasando por las salas de espera, diseño y fabricación de mostradores, señalización interior, etc.",
//   logo:"aviation/evansa.png",
//   imgMin:"aviation/evansa",
//   link: "#aviation&evansa"},

  

//   ];

// for (var i = 0; i < ar3.length; i++) {
 
// $(".av-prod").append('<div class="col-md-4 producto"><div class="foto-p'+ 
// '" style="background-image: url(../images/'+ar3[i].imgMin+'-min.png);"></div><div class="btn-p text-center"><a href="/producto'+ar3[i].link+
// '"><img src="../images/btn_p.svg" alt=""></a></div><div class="logo-p text-center"><img src="../images/'+
// ar3[i].logo+'" alt=""></div><div class="txt-p text-justify"><strong>'+
// ar3[i].titulo+' </strong><p>'+ ar3[i].content +'</p></div></div>');

// };

// ***************************************   GET IMAGES FROM GALLERIES


$(".p1").click(function(){
    $(".squares").empty();
    $(".squares").append("<h1>HOSPITAL CANCEROLOGÍA ACAPULCO</h1>");

    var count=0;
    get_img(count);
    
   
       function get_img(data){

          count=data+1;

          $.ajax({
              url:'images/projects/cancer/'+count+'.jpg',
              type:'HEAD',
              error: function()
              { 
                console.log(":(");
                $(".squares").append('<script>$(".img_square").click(function(){route=$(this).attr("value");lroom(route);});</script>');
              },
              success: function()
              {
                    img_url='images/projects/cancer/'+count+'.jpg'
                    $(".squares").append("<div class='animated fadeInUp' ><div class='col-md-4 img_square' style='background-image:url(images/projects/cancer/"+
                      count+".jpg);' value='"+img_url+"' ></div></div>");
                  get_img(count);
                 
              }
          });
       }


  
});

// ***************************************   GET IMAGES FROM GALLERIES


$(".p2").click(function(){
    $(".squares").empty();
    $(".squares").append("<h1>HOSPITAL PEDRIATIA CMNO</h1>");
    var count=0;
    get_img(count);
    
   
       function get_img(data){

          count=data+1;

          $.ajax({
              url:'images/projects/cmno/'+count+'.jpg',
              type:'HEAD',
              error: function()
              { 
                console.log(":(");
                $(".squares").append('<script>$(".img_square").click(function(){route=$(this).attr("value");lroom(route);});</script>');
              },
              success: function()
              {
                    img_url='images/projects/cmno/'+count+'.jpg'
                    $(".squares").append("<div class='animated fadeInUp' ><div class='col-md-4 img_square' style='background-image:url(images/projects/cmno/"+
                      count+".jpg);' value='"+img_url+"' ></div></div>");
                  get_img(count);
                 
              }
          });
       }


  
});


// ***************************************   GET IMAGES FROM GALLERIES



$(".p3").click(function(){
    $(".squares").empty();
    $(".squares").append("<h1>ISSSTE VELENTÍN GÓMEZ FARÍAS</h1>");
    var count=0;
    get_img(count);
    
   
       function get_img(data){

          count=data+1;

          $.ajax({
              url:'images/projects/issste/'+count+'.jpg',
              type:'HEAD',
              error: function()
              { 
                console.log(":(");
                $(".squares").append('<script>$(".img_square").click(function(){route=$(this).attr("value");lroom(route);});</script>');
              },
              success: function()
              {
                    img_url='images/projects/issste/'+count+'.jpg'
                    $(".squares").append("<div class='animated fadeInUp' ><div class='col-md-4 img_square' style='background-image:url(images/projects/issste/"+
                      count+".jpg);' value='"+img_url+"' ></div></div>");
                  get_img(count);
                 
              }
          });
       }


  
});

// ***************************************   GET IMAGES FROM GALLERIES


$(".p4").click(function(){
    $(".squares").empty();
    $(".squares").append("<h1>UNAM FACULTAD DE MEDICINA</h1>");
    var count=0;
    get_img(count);
    
   
       function get_img(data){

          count=data+1;

          $.ajax({
              url:'images/projects/unam/'+count+'.jpg',
              type:'HEAD',
              error: function()
              { 
                console.log(":(");
                $(".squares").append('<script>$(".img_square").click(function(){route=$(this).attr("value");lroom(route);});</script>');
              },
              success: function()
              {
                    img_url='images/projects/unam/'+count+'.jpg'
                    $(".squares").append("<div class='animated fadeInUp' ><div class='col-md-4 img_square' style='background-image:url(images/projects/unam/"+
                      count+".jpg);' value='"+img_url+"' ></div></div>");
                  get_img(count);
                 
              }
          });
       }


  
});


// ***************************************   GET IMAGES FROM GALLERIES


$(".p5").click(function(){
    $(".squares").empty();
    $(".squares").append("<h1>PROEZA</h1>");
    var count=0;
    get_img(count);
    
   
       function get_img(data){

          count=data+1;

          $.ajax({
              url:'images/projects/proeza/'+count+'.jpg',
              type:'HEAD',
              error: function()
              { 
                console.log(":(");
                $(".squares").append('<script>$(".img_square").click(function(){route=$(this).attr("value");lroom(route);});</script>');
              },
              success: function()
              {
                    img_url='images/projects/proeza/'+count+'.jpg'
                    $(".squares").append("<div class='animated fadeInUp' ><div class='col-md-4 img_square' style='background-image:url(images/projects/proeza/"+
                      count+".jpg);' value='"+img_url+"' ></div></div>");
                  get_img(count);
                 
              }
          });
       }


  
});








function lroom(data){
  console.log(data);
  $("body").append("<div class='full'><img class='animated fadeInDown' src='" + data + "' alt='' /></div>");
  $("body").append("<script>$('.full').click(function(){ $('.full').remove(); });</script>");
}



$(function() {
        $("#catalog_link").change(function() {
            if ($(this).val()) {
                window.open($(this).val(), '_blank');
                $("#formElement").submit();
            }
        });

        // just to be sure that it is submitting, remove this code
        $("#formElement").submit(function() {
            alert('submitting ... ');
        });
    });




