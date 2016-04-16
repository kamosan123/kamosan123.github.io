$(document).ready(function(){
    $clicks=[];
    $clicuser=[]
    $ids=0;
    $var1=0; $var2=0;
    $score=0;
    function Color(){
      for (var i = 0; i < 3; i++) {
          $num= Math.floor((Math.random() * 16) + 1);
          $clicks.push($num);
          console.log("div"+"_"+$num);
          console.log($clicks[i]);
        $("#div"+"_"+$num).css("background-color", "pink").fadeOut("fast") ;

    }

    for( var j=0;j< 3;j++){
        $("#div"+"_"+$clicks[j]).fadeIn(4000).css("background-color", "#88BBFA");

            console.log("div"+"_"+$clicks[j]);

  }


  }


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

});
