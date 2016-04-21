var calc_numbers = [1,2,3,4,'+','-','='];

var calc_container;

var answer_display;

calc_container = document.createElement("div");
calc_container.setAttribute("id", "my_calc_container");
calc_container.style.width = "200px";
calc_container.style.height = "100px";
calc_container.style.backgroundColor = "yellow";


var create_element = function(element_type, element_id){
    var element = document.createElement(element_type);
    element.setAttribute( 'id', element_id);
    calc_container.appendChild(element);
   

};


document.addEventListener("DOMContentLoaded", function(event){
    
    create_element("input", "answer_display");
    
     document.body.appendChild(calc_container);
    for( var i = 0; i < calc_numbers.length; i++){
        create_element("button", "calc_numbers_" +i);
    
    // var create_element = document.getElementById("calc_numbers" + i);
    //     current_element.addEventListener("onclick", function(event){
            
    //     answer_display.value = answer_display.value += this.textContent;
    //     });
        
    }
    
});
