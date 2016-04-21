var calc_body;

var calc_numbers = [1,2,3,4,"-","+","="];

var answer_display;

var clear_answer = "C";

calc_body = document.createElement("div");
calc_body.setAttribute("id", "calc_body");


var create_element = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute("id",element_id);
    calc_body.appendChild(element);
    
};



var my_buttons = function(){ 
    for(var i = 0; i < calc_numbers.length; i++){
    var create_buttons = document.createElement("button");
    create_buttons.setAttribute("id", "calc_numbers_" + i);
    var new_button = calc_numbers[i];
    create_buttons.textContent = new_button;
    calc_body.appendChild(create_buttons);
    
    }

};



document.addEventListener('DOMContentLoaded', function(event){
    document.body.appendChild(calc_body);
    my_buttons();
    create_element("input","calc_total");
    
});







// var calc_numbers = [1,2,3,4,'+','-','='];

// var calc_container;

// var answer_display;

// calc_container = document.createElement("div");
// calc_container.setAttribute("id", "my_calc_container");
// calc_container.style.width = "200px";
// calc_container.style.height = "100px";
// calc_container.style.backgroundColor = "yellow";


// var create_element = function(element_type, element_id){
//     var element = document.createElement(element_type);
//     element.setAttribute( 'id', element_id);
//     calc_container.appendChild(element);
   

// };


// document.addEventListener("DOMContentLoaded", function(event){
    
//     create_element("input", "answer_display");
    
//      document.body.appendChild(calc_container);
//     for( var i = 0; i < calc_numbers.length; i++){
//         create_element("button", "calc_numbers_" +i);
    
//     // var create_element = document.getElementById("calc_numbers" + i);
//     //     current_element.addEventListener("onclick", function(event){
            
//     //     answer_display.value = answer_display.value += this.textContent;
//     //     });
        
//     }
    
// });


