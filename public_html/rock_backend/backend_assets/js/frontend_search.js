$(document).ready(function(){

    $("#search_box").keyup(function(){
       var value = $(this).val();
       var page =$('#page').val();
       console.log(value);
       if(value != ''){
           $('#search_result').show();
           $.post('FrontendSearch.php?page='+page, {value: value} ,function(data){
               
//               $("#search_result").html(data);
               
           });
       }else{
            $('#search_result').hide();
       }
    });
    
    
});