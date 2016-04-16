JUEGO DE MEMORIA 

Se realizo el desarrollo de un juego el cual durante sierto tiempo determinado y una serie de cuadros aleatorios el usuario debera
adivinar cuales son los cuadrados correctos.


1.lo primero que se realiza es el esquema en matriz con una tabla la cual esta compuesta por div's.

    <table>
	<tr>
        <td><div id="div_1" class="div"></div></td>
        <td><div id="div_2" class="div"></div></td>
        <td><div id="div_3" class="div"></div></td>
        <td><div id="div_4" class="div"></div></td>
      </tr>
      <tr>
      </table>
      

2. lo siguiente es realizar una funcion que nos permita obtener un numero aleatorio y asignar a cuadrados en la matriz, en estam isma funcion
se obtiene el id de cada elemento para hacer mas facil la tarea.

   function Color(){
     for (var i = 0; i < 3; i++) {
        $num= Math.floor((Math.random() * 16) + 1);
        $clicks.push($num);
        console.log("div"+"_"+$num);
        console.log($clicks[i]);
        $("#div"+"_"+$num).css("background-color", "pink").fadeOut("fast") ;
    }
    for( var j=0;j< 3;j++){
		$("#div"+"_"+$clicks[j]).fadeIn(4000).css("background- color", "#88BBFA");
          console.log("div"+"_"+$clicks[j]);
    }
}


3.se realiza el ajuste de la funcion clic para poder empezar con el juego.

$("#empezar").click(function(){
      Color();
    });
    $("#compro").click(function(){
     if($var1[0]==$var2[0] && $var1[1]==$var2[1] && $var2[2]==$var2[2]){
        swal("Buen trabajo", "sigue asi!!", "success")
        $clicks=[];
        $clicuser=[];
        $("#div"+"_"+$var1[0]).css("background-color", "#88BBFA");
        $("#div"+"_"+$var1[1]).css("background-color", "#88BBFA");
        $("#div"+"_"+ $var2[2]).css("background-color", "#88BBFA");
        Color();
        $score=$score+20
        document.getElementById("score").innerHTML ="SCORE: "+$score;
      }else{
        sweetAlert("Oops...", "Ten mas suerte para la proxima", "error");
        $clicks=[];
        $clicuser=[];
        $("#div"+"_"+$var1[0]).css("background-color", "#88BBFA");
        $("#div"+"_"+$var1[1]).css("background-color", "#88BBFA");
        $("#div"+"_"+ $var2[2]).css("background-color", "#88BBFA");
        $score=0;
        document.getElementById("score").innerHTML ="SCORE:"+$score;
        Color();
      }
});
en esta parte cabe recalcar que tambien se hace la validación para que no importa el orden en que los ingrese.

 la función div esta guarda y recibe los clicks que se realizan y de acuerdo a eso se almacenan en un arreglo para después ser comparado con las casillas ingresadas aleatoria-mente.


$(".div").click(function(){
  if($clicks==""){
    alert("por favor de en empezar para jugar :D.")
  }else{
 $ids=Number(event.target.id.split("_")[1]);

 $clicuser.push($ids);
 $("#div"+"_"+$ids).css("background-color", "pink");

 $var1=$clicks.sort();
 $var2=$clicuser.sort();
}
});
 