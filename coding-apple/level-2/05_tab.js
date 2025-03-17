/*for (let i = 0; i < 3; i++){
    $(".tab-button").eq(i).on('click', function(){
        openTab(i);
    })
}*/

$('.list').click(function(e){
    /*if (e.target == document.querySelectorAll('.tab-button')[0]){
        openTab(0);
    }
    if (e.target == document.querySelectorAll('.tab-button')[1]){
        openTab(1);
    }
    if (e.target == document.querySelectorAll('.tab-button')[2]){
        openTab(2);
    }*/
    openTab(Number(e.target.dataset.id));
    
})

function openTab(i){
    $(".tab-button").removeClass('orange');
    $(".tab-button").eq(i).addClass('orange');
    $(".tab-content").removeClass('show');
    $(".tab-content").eq(i).addClass('show');
}

