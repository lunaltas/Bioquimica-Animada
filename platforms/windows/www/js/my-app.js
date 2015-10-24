// Initialize your app
var myApp = new Framework7({
    modalTitle: "Bioquímica Animada",
    pushState: true
});

// Export selectors engine
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Add view
$$(document).on('DOMContentLoaded', function(){
   var page_marcada = window.localStorage.getItem("page_marcada");
   if(page_marcada != null){
    $$('#label_mark_page').text(" ");
    $$('#mark_page').addClass("active");
    $$('#icon_mark_page').addClass("active");
    $$('#label_mark_page').text( "Marcada" );
    mainView.router.loadPage(page_marcada+'.html');
   }
    
});

$$(document).on('pageInit', function (e) {
  // Page Data contains all required information about loaded and initialized page 
  var page = e.detail.page;
  $$('#label_mark_page').text(" ");
  if(page.name == window.localStorage.getItem("page_marcada")){
    $$('#mark_page').addClass("active");
    $$('#icon_mark_page').addClass("active");
    $$('#label_mark_page').text( "Marcada" );
  }
  else{
    $$('#mark_page').removeClass("active");
    $$('#icon_mark_page').removeClass("active");
    $$('#label_mark_page').text( "Marcar Página" );
  }

});


$$('#mark_page').on('click', function () {
    window.localStorage.setItem("page_marcada", mainView.activePage.name);
    $$('#label_mark_page').text(" ");
    $$('#mark_page').addClass("active");
    $$('#icon_mark_page').addClass("active");
    $$('#label_mark_page').text( "Marcada" );
});


myApp.onPageInit('notes', function (page) {

    var paragrafo;

    var element = document.getElementById('anotacoes_capitulo1');
    element.innerHTML = " ";    
    for (paragrafo = 1; paragrafo <= 8; paragrafo++) {
        var anotacao = window.localStorage.getItem("#1_"+paragrafo);
        if(anotacao != null){
            element.innerHTML = element.innerHTML+'<li>'+anotacao+' </li>';
        }
    };

    var element = document.getElementById('anotacoes_capitulo2');
    element.innerHTML = " ";    
    for (paragrafo = 1; paragrafo <= 45; paragrafo++) {
        var anotacao = window.localStorage.getItem("#2_"+paragrafo);
        if(anotacao != null){
            element.innerHTML = element.innerHTML+'<li>'+anotacao+' </li>';
        }
    };

    var element = document.getElementById('anotacoes_capitulo3');
    element.innerHTML = " ";    
    for (paragrafo = 1; paragrafo <= 30; paragrafo++) {
        var anotacao = window.localStorage.getItem("#3_"+paragrafo);
        if(anotacao != null){
            element.innerHTML = element.innerHTML+'<li>'+anotacao+' </li>';
        }
    };

    var element = document.getElementById('anotacoes_capitulo4');
    element.innerHTML = " ";    
    for (paragrafo = 1; paragrafo <= 14; paragrafo++) {
        var anotacao = window.localStorage.getItem("#4_"+paragrafo);
        if(anotacao != null){
            element.innerHTML = element.innerHTML+'<li>'+anotacao+' </li>';
        }
    };

    var element = document.getElementById('anotacoes_capitulo5');
    element.innerHTML = " ";    
    for (paragrafo = 1; paragrafo <= 19; paragrafo++) {
        var anotacao = window.localStorage.getItem("#5_"+paragrafo);
        if(anotacao != null){
            element.innerHTML = element.innerHTML+'<li>'+anotacao+' </li>';
        }
    };
});

// In page callbacks:
myApp.onPageInit('capitulo1', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
  /*=== Default standalone ===*/
    var myPhotoBrowserStandalone = myApp.photoBrowser({
        photos : ['img/cap1/1_1.PNG', 'img/cap1/1_2.PNG', 'img/cap1/1_3.PNG', 'img/cap1/1_4.PNG']
    });
    //Open photo browser on click
    $$('.figura1_1').on('click', function () {
        myPhotoBrowserStandalone.open(0);
    });

    //Open photo browser on click
    $$('.figura1_2').on('click', function () {
        myPhotoBrowserStandalone.open(1);
    });

    //Open photo browser on click
    $$('.figura1_3').on('click', function () {
        myPhotoBrowserStandalone.open(2);
    });

    //Open photo browser on click
    $$('.figura1_4').on('click', function () {
        myPhotoBrowserStandalone.open(3);
    });

});


myApp.onPageInit('capitulo2', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
  /*=== Default standalone ===*/
    var photosCap2 = myApp.photoBrowser({
        photos : ['img/cap2/Slide1.PNG','img/cap2/Slide2.PNG', 'img/cap2/Slide3.PNG', 'img/cap2/Slide4.PNG',
                  'img/cap2/Slide5.PNG', 'img/cap2/Slide6.PNG', 'img/cap2/Slide7.PNG', 'img/cap2/Slide8.png', 
                  'img/cap2/Slide9.PNG', 'img/cap2/Slide10.PNG', 'img/cap2/Slide11.PNG', 'img/cap2/Slide12.PNG',
                  'img/cap2/Slide13.PNG', 'img/cap2/Slide14.PNG', 'img/cap2/Slide15.PNG', 'img/cap2/Slide16.PNG',
                  'img/cap2/Slide17.PNG', 'img/cap2/Slide18.PNG']
    });
    //Open photo browser on click
    $$('.figura2_1').on('click', function () {
        photosCap2.open(0);
    });

    $$('.figura2_2').on('click', function () {
        photosCap2.open(1);
    });
    $$('.figura2_3').on('click', function () {
        photosCap2.open(2);
    });
    $$('.figura2_4').on('click', function () {
        photosCap2.open(3);
    });
    $$('.figura2_5').on('click', function () {
        photosCap2.open(4);
    });
    $$('.figura2_6').on('click', function () {
        photosCap2.open(5);
    });
    $$('.figura2_7').on('click', function () {
        photosCap2.open(6);
    });
    $$('.figura2_8').on('click', function () {
        photosCap2.open(7);
    });
    $$('.figura2_9').on('click', function () {
        photosCap2.open(8);
    });
    $$('.figura2_10').on('click', function () {
        photosCap2.open(9);
    });
    $$('.figura2_11').on('click', function () {
        photosCap2.open(10);
    });
    $$('.figura2_12').on('click', function () {
        photosCap2.open(11);
    });
    $$('.figura2_13').on('click', function () {
        photosCap2.open(12);
    });
    $$('.figura2_14').on('click', function () {
        photosCap2.open(13);
    });
    $$('.figura2_15').on('click', function () {
        photosCap2.open(14);
    });
    $$('.figura2_16').on('click', function () {
        photosCap2.open(15);
    });
    $$('.figura2_17').on('click', function () {
        photosCap2.open(16);
    });
    $$('.figura2_18').on('click', function () {
        photosCap2.open(17);
    });

});

myApp.onPageInit('capitulo3', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
  /*=== Default standalone ===*/
    var photosCap3 = myApp.photoBrowser({
        photos : ['img/cap3/Slide1.PNG','img/cap3/Slide2.PNG', 'img/cap3/Slide3.PNG', 'img/cap3/Slide4.PNG', 
                  'img/cap3/Slide5.PNG', 'img/cap3/Slide6.PNG','img/cap3/Slide7.PNG', 'img/cap3/Slide8.PNG','img/cap3/Slide9.PNG',
                  'img/cap3/Slide10.PNG','img/cap3/Slide11.PNG', 'img/cap3/Slide12.PNG', 'img/cap3/Slide13.PNG', 'img/cap3/Slide14.PNG',
                  'img/cap3/Slide15.PNG', 'img/cap3/Slide16.PNG', 'img/cap3/Slide17.PNG', 'img/cap3/Slide18.PNG' ]
    });
    //Open photo browser on click
    $$('.figura3_1').on('click', function () {
        photosCap3.open(0);
    });

    $$('.figura3_2').on('click', function () {
        photosCap3.open(1);
    });
    $$('.figura3_3').on('click', function () {
        photosCap3.open(2);
    });
    $$('.vcSabia3_1').on('click', function () {
        photosCap3.open(3);
    });
    $$('.figura3_4').on('click', function () {
        photosCap3.open(4);
    });
    $$('.vcSabia3_2').on('click', function () {
        photosCap3.open(5);
    });
    $$('.figura3_5').on('click', function () {
        photosCap3.open(6);
    });
    $$('.figura3_6').on('click', function () {
        photosCap3.open(7);
    });
    $$('.figura3_7').on('click', function () {
        photosCap3.open(8);
    });
    $$('.vcSabia3_3').on('click', function () {
        photosCap3.open(9);
    });
    $$('.figura3_8').on('click', function () {
        photosCap3.open(10);
    });
    $$('.figura3_9').on('click', function () {
        photosCap3.open(11);
    });
    $$('.figura3_10').on('click', function () {
        photosCap3.open(12);
    });
    $$('.figura3_11').on('click', function () {
        photosCap3.open(13);
    });
    $$('.figura3_12').on('click', function () {
        photosCap3.open(15);
    });
    $$('.vcSabia3_4').on('click', function () {
        photosCap3.open(14);
    });
    $$('.figura3_13').on('click', function () {
        photosCap3.open(16);
    });
    $$('.figura3_14').on('click', function () {
        photosCap3.open(17);
    });
    $$('.figura3_15').on('click', function () {
        photosCap3.open(18);
    });
    $$('.figura3_16').on('click', function () {
        photosCap3.open(19);
    });
    $$('.figura3_17').on('click', function () {
        photosCap3.open(20);
    });

});

myApp.onPageInit('capitulo4', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
  /*=== Default standalone ===*/
    var photosCap4 = myApp.photoBrowser({
        photos : ['img/cap4/Slide1.PNG','img/cap4/Slide2.PNG','img/cap4/Slide3.PNG','img/cap4/Slide4.PNG','img/cap4/Slide5.PNG','img/cap4/Slide6.PNG']
    });
    //Open photo browser on click
    $$('.figura4_1').on('click', function () {
        photosCap4.open(0);
    });
    $$('.figura4_2').on('click', function () {
        photosCap4.open(1);
    });
    $$('.figura4_3').on('click', function () {
        photosCap4.open(2);
    });
    $$('.figura4_4').on('click', function () {
        photosCap4.open(3);
    });
    $$('.figura4_5').on('click', function () {
        photosCap4.open(4);
    });
    $$('.figura4_6').on('click', function () {
        photosCap4.open(5);
    });


});

myApp.onPageInit('capitulo5', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
  /*=== Default standalone ===*/
    var photosCap5 = myApp.photoBrowser({
        photos : ['img/cap5/Slide1.PNG','img/cap5/Slide2.PNG','img/cap5/Slide3.PNG',
                  'img/cap5/Slide4.PNG','img/cap5/Slide5.PNG','img/cap5/Slide6.PNG',
                  'img/cap5/Slide7.PNG','img/cap5/Slide8.PNG','img/cap5/Slide9.PNG']
    });
    //Open photo browser on click
    $$('.figura5_1').on('click', function () {
        photosCap5.open(0);
    });
    $$('.figura5_2').on('click', function () {
        photosCap5.open(1);
    });
    $$('.figura5_3').on('click', function () {
        photosCap5.open(2);
    });
    $$('.figura5_4').on('click', function () {
        photosCap5.open(3);
    });
    $$('.figura5_5').on('click', function () {
        photosCap5.open(4);
    });
    $$('.figura5_6').on('click', function () {
        photosCap5.open(5);
    });
    $$('.figura5_7').on('click', function () {
        photosCap5.open(6);
    });
    $$('.figura5_8').on('click', function () {
        photosCap5.open(7);
    });
    $$('.figura5_9').on('click', function () {
        photosCap5.open(8);
    });
});




myApp.onPageInit('*', function (page) {
  
    $$('p').on('click', function () {
        var elemento = this;
        var paragrafo = '#'+ this.id;
        var id_note = this.id + 'note';
        var id_grifo = this.id + 'grifado';
        var texto_grifo = "Grifar Parágrafo";
        var texto_note = "Fazer Anotação";
        var label_note = true;
        
        if ($$(paragrafo).hasClass('grifado')){ texto_grifo = "Desfazer Grifar";};
        if (window.localStorage.getItem(paragrafo) != null){ 
            texto_note = "Substituir Anotação";
            label_note = false;
        };
        
        var buttons = [
            {
                text: texto_grifo,
                onClick: function () {
                    $$(paragrafo).toggleClass('grifado');                    
                    if ($$(paragrafo).hasClass('grifado')) { window.localStorage.setItem(id_grifo, "true" )} 
                    else{window.localStorage.setItem(id_grifo, "false" )};
                    myApp.closeModal();
                }
            },
            {
                text: texto_note,
                onClick: function () {
                    myApp.prompt('Faça sua anotação em relação ao Parágrafo', function (value) {
                        window.localStorage.setItem(paragrafo, value );
                        $$(paragrafo).prepend('<a href="#" class="anotação" id="'+id_note+'" ><i class="icon icon-star"></i></a>');
                        myApp.closeModal();
                    });
                }
            },
            {
                text: 'Ver Anotação',
                label: label_note,
                onClick: function () {
                    ver_note(elemento);
                }
            },
            {
                text: 'Cancelar',
                color: 'red',
                onClick: function () {
                    myApp.closeModal();
                }
            },
        ];
        myApp.actions(buttons);
    });

    $$('p').each(function()
    {
        if (window.localStorage.getItem(this.id + 'grifado') == "true") {
            $$('#'+this.id).addClass('grifado');
        };

        if (window.localStorage.getItem('#'+this.id) != null) {
            $$('#'+this.id).prepend('<a href="#" class="anotação" id="'+this.id+'note" ><i class="icon icon-star"></i></a>');
        };


    });

    function ver_note (paragrafo) {
        var id_element = '#'+paragrafo.id + 'note';
        var key = '#'+ paragrafo.id;
        var conteudo = window.localStorage.getItem(key);
        console.log(key);
        myApp.modal({
            title:  'Anotação',
            text: conteudo,
            buttons: [
              {
                text: 'Voltar',
                onClick: function() {
                  myApp.closeModal();
                }
              },
              {
                text: 'Excluir nota',
                bold: true,
                onClick: function() {
                    window.localStorage.removeItem(key);
                    myApp.closeModal();
                    $$(id_element).remove();
                }
              },
            ]
        })
    }

});

$$("#mail").on('click', function () {
    document.addEventListener('deviceready', function () {
        // cordova.plugins.email is now available
        cordova.plugins.email.isAvailable(
        function (isAvailable) {
            if (isAvailable) {
                cordova.plugins.email.open({
                    to:      ['laplic@cb.ufrn.br', 'srfernandesaraujo@gmail.com'],
                    subject: 'Contato Bioquímica Animada',
                    body:    'Descreva suas dúvidas aqui!'
                });
            } else{
                myApp.alert("Seu Aparelho não pode enviar emails através desse aplicativo. Entre em conato através do endereço: laplic@cb.ufrn.br")
            };
            
        }
        );
    }, false);
});


      

