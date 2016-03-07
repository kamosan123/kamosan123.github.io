window.onload = function()
{
    sudoku      = [],
        solve       = [],
        dimension   = 3,
        dificultad  = 1
        parteID =0,
        parteID1=0,
        parteID2=0,
        parteID3=0,
        posicion=0,
        posicion1=0,
        posicion2=0,
        numIngresa=0,
        a=b=c=d=0,
        posicion3=0;



    //Para cargar los combos...
    var select = nom_div("opc_2");
    for (var i = 2; i<= 5; i++)
    {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }

    /*
        Función en la cual llega lel valor escrito por el usaurio
        además de la posición del valor digitado en la mattriz...
        Se deberá validar si el número digitado cumple con la condición para estar en esa posición...
        1. Un número no puede repetirse en el mismo cuadrante...
        2. Un número no puede estar en la misma Fila.
        3. Un número no puede estar en la misma columna.
    */
    var validaSudoku = function(valor, id)
    {
        parteID  = id.split("_");
        numIngresa=valor;
      //  console.log(parteID);
        parteID2=parteID.splice(2);
        parteID1=parteID.splice(1);
        parteID3=parteID2.splice(1);
        posicion=parseInt(parteID);
        posicion1=parseInt(parteID1);
        posicion2=parseInt(parteID2);
        posicion3=parseInt(parteID3);

        if(sudoku[posicion][posicion1][posicion2][posicion3]==" "){
         sudoku[posicion][posicion1][posicion2][posicion3]=numIngresa;

          }

        for(posicion=0;posicion<=sudoku.length-1;posicion++){
          for(posicion1=0;posicion1<=sudoku[posicion].length-1;posicion1++){
            console.log(sudoku[posicion][posicion1]);
            for(posicion2=0;posicion2<=sudoku.length-1;posicion2++){
              for(posicion3=0;posicion3<=sudoku[posicion2].length-1;posicion3++){
                if(sudoku[posicion][posicion1][posicion2][posicion3]==numIngresa){
                    console.log(numIngresa);
                  }

                  }

                }
              }
            }
          }

          nom_div("comprobar").addEventListener('click', function(event){
            a=eval(posicion)-1;
            b=eval(posicion)-1;
            c=eval(posicion)-1;
            d=eval(posicion)-1;

            console.log("entre");
            if(sudoku[a][b][c][d]==solve[a][b][c][d]){
              alert("ganaeste");
            }else{
              alert("revisa elsudoku");
            }
          });


    var nuevoSudoku = (function nuevoSudoku()
    {
        var newSudoku = sudokuJS.creaSudoku(dimension, dificultad);
        sudoku = newSudoku.sudokujs;
        solve = newSudoku.respuesta;
        //Para dibujar el sudoku en html...
        var txt     = "<table>",
            nomID   = "";
            eventos = [];
        for(var fila = 0; fila < sudoku.length; fila++)
        {
            txt += "<tr>";
            for(var col = 0; col < sudoku.length; col++)
            {
                txt += "<td>";
                txt += "<table class = 'cuadrante' id = '"+fila+"_"+col+"'>"
                for(var i = 0; i < sudoku.length; i++)
                {
                    txt += "<tr>";
                    for(var c = 0; c < sudoku.length; c++)
                    {
                        nomID = fila + "_" + col + "_" + i + "_" + c;
                        txt += "<td class = 'interno' id = 'td_"+(nomID)+"'>"
                        if(sudoku[fila][col][i][c] !== 0)
                        {
                            txt += sudoku[fila][col][i][c];
                        }
                        else
                        {
                            txt += "<input type = 'text' class = 'numero' id = '"+(nomID)+"' maxlength = '1'>";
                            eventos.push(nomID);
                        }
                        txt += "</td>";
                    }
                    txt += "</tr>";
                }
                txt += "</table>";
            }
            txt += "</tr>";
        }
        txt += "</table>";
        nom_div("escenario").innerHTML = txt;
        for(var i = 0; i < eventos.length; i++)
        {
            nom_div(eventos[i]).addEventListener("keyup", function(event)
            {
                if(isNumber(this.value) || this.value === "")
                {
                    validaSudoku(this.value === "" ? 0 : Number(this.value), this.id);
                }
                else
                {
                    this.value = "";
                }
            });
        }
        //Fin de dibujar el sudoku...
        return nuevoSudoku;
    })();

    nom_div("resuelve").addEventListener('click', function(event)
	{
		//console.log(event);
        //Para completar los campos del sudoku...
        //resuelve
        var nomID = "";
        for(var fila = 0; fila < solve.length; fila++)
        {
            for(var col = 0; col < solve.length; col++)
            {
                for(var i = 0; i < solve.length; i++)
                {
                    for(var c = 0; c < solve.length; c++)
                    {
                        //Saber si el input existe para completar el espacio...
                        nomID = fila + "_" + col + "_" + i + "_" + c;
                        if(nom_div(nomID) !== null)
                        {
                            nom_div(nomID).value = solve[fila][col][i][c];
                        }
                    }
                }
            }
        }
	});

    nom_div("nuevo").addEventListener('click', function(event)
    {
        nuevoSudoku();
    });

    for(var combo = 1; combo <= 2; combo++)
    {
        nom_div("opc_" + combo).addEventListener('change', function(event)
        {
            var numOpc = Number(this.id.split("_")[1]);
            if(numOpc === 1)
            {
                if(Number(this.value) !== 0)
                {
                    dificultad = Number(this.value);
                }
            }
            else
            {
                if(Number(this.value) !== 0)
                {
                    dimension = Number(this.value);
                }
            }
            nuevoSudoku();
        });
    }

    function isNumber(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function nom_div(div)
	{
		return document.getElementById(div);
	}
};
