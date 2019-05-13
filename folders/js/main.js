function Perekluchitel (){
    $(".mon_ins").toggleClass("preloader_isactive")
}
$(document).ready(
    function()
    {
        $('input:checkbox').change(function(){
            if($(this).attr('checked', 'checked')){
                $('div').css('display','block');
            }else{
                $('div').css('display','none');
            }
        });
    }
)