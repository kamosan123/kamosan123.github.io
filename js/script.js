
var total_numeros=121;
var usados = [];
var dimensiones=11;
var alto= screen.height;
var ancho= screen.width;
var matriz=[[],[],[],[],[],[],[],[],[],[],[]];
var solucion=[];
var numero=0;
var num=0;
var numeroclic=1;
var ini=0;


$( "#inicio" ).click(function() {
  if(ini === 0){
  crearEscenario();
  llenarMatriz();
  reloj();
  ini++;
}else if(ini==1){
sweetAlert("Oops...", "tienes un juego iniciado terminalo", "error");
}
});

function crearEscenario ()
    {
        var txt = "<center><table id = 'tablero' cellpadding = '0' cellspacing = '0' >";
        var divTabla = "";
        for(var i = 0; i < dimensiones; i++)
        {
            txt += "<tr>";
            for(var j = 0; j < dimensiones; j++)
            {
                divTabla = i + "_" + j;
                txt += "<td id = '"+(divTabla)+"'></td>";
            }
            txt += "</tr>";


        }
        txt += "</table></center>";
        $("#escenario").html(txt);


          $("#tablero").css
                          ({
                             "width"                : (ancho-5)+"px",
                              "height"              : (alto-100 )+"px",
                           // "border"              : "1px solid red",
                              "font-weight"         : "bold",
                              "font-family"         : "Arial",
                              "line-height"         : 5+"px",
                              "cursor"              : "pointer",
                              "text-align"          :"center",
                              "font-size"           : "30px",
                              "margin-top"        :   "20px"

                         });

    clicNumero();


    };

function llenarMatriz ()
  {
    do
        {
        for (var i = 0; i < matriz.length; i++)
            {
                for (e=0; e<matriz.length; e++)
                {

                       matriz[i][e]=aleatorio(total_numeros);
                };
            };
        }

        while(matriz.length===13)

        for (i=0; i<matriz.length; i++)
            {
                for (e=0; e<matriz.length; e++)
                  {
                    $('#'+i+"_"+e).html(matriz[i][e]).css('color', randomColor());
                  };
            };
  }

function aleatorio(min)
{
    if (usados.length !=  min)
    {
        var num;
        var repe= false;
            do
            {
                var num=Math.floor((Math.random()*min)+1);
                repe = repetido(num);
            }

            while (repe != false);
                usados.push(num);
                return num;
    }

    else
    {
    return 0;
    }
}


function repetido(num)
{
    var repe = false;
        for (var i = 0; i < usados.length; i++)
        {
            if (num == usados[i])
            {
                repe = true;
            }
        }
  return repe;

}

function clicNumero(){

  $("#escenario table tr td").click(function() {
        num = $(this);
        numero=parseInt(num.html());
        if(numero===numeroclic){
          $("#"+event.toElement.id).removeClass();
          $("#"+event.toElement.id).addClass().css
          ({
            "color"              : 'white',
            "background-color"   : "#268C9F",
            "font-weight"        : "bold",
            "border-radius"      : "15%",
            "margin"              :  "10px"
          });
            solucion.push(numero);
            numeroclic++;
        }if(numeroclic >3){
          swal("Good job!", "You clicked the button!", "success");
          ini =0;
          
        }

        $("#ayudas").click(function(){

            numero.removeClass();
            numero.addClass.css({
              "background-color"  : "black"
            });
        });
        console.log(solucion);


     });

}

function reloj(){
  var tiempo = {
        hora: 0,
        minuto: 0,
        segundo: 0
    };

    var tiempo_corriendo = null;


            tiempo_corriendo = setInterval(function(){
                // Segundos
                tiempo.segundo++;
                if(tiempo.segundo >= 60)
                {
                    tiempo.segundo = 0;
                    tiempo.minuto++;
                }

                // Minutos
                if(tiempo.minuto >= 60)
                {
                    tiempo.minuto = 0;
                    tiempo.hora++;
                }

                $("#hora").text(tiempo.hora < 10 ? '0' + tiempo.hora : tiempo.hora);
                $("#minuto").text(tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto);
                $("#segundo").text(tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo);
            }, 1000);

}


function randomColor ()
    {
        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
        (c && lol(m,s,c-1))})(Math,'0123456789ABCDEF',4);
    }
