var calc_body;

var calc_numbers = [1,2,3,4,"-","+","=","C"];

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
        var button_tags = document.createElement("button");
        button_tags.setAttribute("id", "button_tag_" + i);
        
        var item_in_array = calc_numbers[i];
        button_tags.textContent = item_in_array;
        calc_body.appendChild(button_tags);
        
        var current_button = document.getElementById("button_tag_" + i);
        current_button.addEventListener("click", function(event){
        answer_display.value = answer_display.value += this.textContent;
        
        });
    
    }
};



document.addEventListener('DOMContentLoaded', function(event){
    document.body.appendChild(calc_body);
    my_buttons();
    create_element("input","calc_total");
    answer_display = document.getElementById("calc_total");
    
        
    
    
});
