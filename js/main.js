(function () {
    'use strict';


    document.addEventListener('DOMContentLoaded', function () {

        
        let calcular_o = document.getElementById("O");
        let calcular_omega = document.getElementById("Omega");
        let calcular_theta = document.getElementById("Theta");
        let n01,n0,n02,c1,c2,contador=0,x,y , contador2 = 0;




        

        calcular_o.addEventListener('click', () => {

            if (ComprobarO()) {
                if (c2 > 10000000){
                    alert("La funcion no es O");
                } else{
                    alert("La funcion es O para una n0 de : " + n01  + " y una c2 de :" + c2);
                }
            } else {
                alert("La funcion no es O");
            }
        });

        calcular_omega.addEventListener('click', () => {
            
            if (ComprobarOmega()) {

                if (c1 < 0.0000000001){
                    alert("La funcion no es Omega");
                } else {
                    alert("La funcion es Omega para una n0 de : " + n02  + " y una c1 de :" + c1);
                }
            } else {
                alert("La funcion no es Omega");
            }
        });

        calcular_theta.addEventListener('click', () => {
            if (ComprobarTheta()) {
                if(n01 > n02){
                    n0 = n01;
                }
                else{
                    n0 = n02;
                }
                alert("La funcion es Theta para una n0 de : " + n0  + " y una c1 de :" + c1 + " y una c2 de : " +c2);
            } else {
                alert("La funcion no es Theta");
            }
        });

        function ComprobarO() {
            var k =0.1 ; k < 125 ; k= k + 0.1
            for(var j=0 ; j < 100; j++){    
                for (var i = j ; i <= j * 100; i++) {
                    for(var k =0.1 ; k < 125 ; k= k + 0.1){
                        if ((k * g(i)) > f(i)) {
                            contador++;
                            n01 = i;
                            if(contador > 100  ){
                                c2 = k;
                                return true;
                            }
                        }
                    }
                    
                }
            }
            return false;
        }

        function ComprobarOmega() {
            
            for(var j=0 ; j < 100 ; j++){    
                for (var i = j ; i <= j * 100; i++) {
                    for(var k = 100  ; k > 0 ; k= k - 0.1){
                        if ((k * g(i)) < f(i)) {
                            contador2++;
                            
                            n02 = i;
                            if(contador2 > 100 ){
                                c1 = k;
                                return true;
                            }
                        }
                    }
                
                }
            }
            return false;
        }

        function ComprobarTheta() {
            return (ComprobarO() && ComprobarOmega());
        }

        function f(x) {
            var nepe = "f(x) =";
            var nepesegundo = nepe.concat($("#fx").val());
            var parser = math.parser();
            parser.eval(nepesegundo);
            return parser.eval("f("+x+")"); 
        }

        function g(x) {
            var nepe = "f(x) =";
            var nepesegundo = nepe.concat($("#gx").val());
            var parser = math.parser();
            parser.eval(nepesegundo);
            return parser.eval("f("+x+")"); 
        }






    }) //DOM CONTENT LOADED

})(); //DOM CONTENT LOADED