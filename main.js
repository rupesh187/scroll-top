$(window).scroll(function(){
if($(this).scrollTop()>400){
$('goTop').show();
}else{
$('goTop').hide();
}
});