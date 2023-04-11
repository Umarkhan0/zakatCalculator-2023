function zakat_function(){
var first_e = document.getElementById("input_field").value;
var second_e = document.getElementById("second_input").value;
var therd_e = document.getElementById("therd_input").value;
for(var i = 0; i < Number (second_e.length); i++){
   if(second_e[i] <= Number (second_e)){
    second_e = 300000 * Number (second_e);
   }
}
for(var i = 0; i < Number (therd_e.length); i++){
    if(therd_e[i] <= Number (therd_e)){
      therd_e = 150000 * Number (therd_e); 
   }
   }
var final = Number(first_e) + Number (second_e) + Number (therd_e);
 document.getElementById("print").innerHTML = " ZAKAT PAYABLE = " + Math.floor(final / 40) + ";";
}