$(document).ready(function(){
    setDateSelectBox();
});    

function setDateSelectBox(){
    var now = new Date();
    var now_year = now.getFullYear();
    
    $("#year").append("<option value=''>선택</option>");
    
    for(var i = now_year; i >= 1900; i--){
    $("#year").append("<option value='"+ i +"'>"+ i + "년" +"</option>");
    }
}