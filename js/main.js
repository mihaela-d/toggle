$(document).ready(function(){

    $("button").click(function(){
        $("div.sidebar").toggle("slow");
        $("div.topbar").toggle(1500);
        $("div#content").toggleClass("important-top");
        });
       
});
