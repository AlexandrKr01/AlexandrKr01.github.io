jQuery(function($){

    let buttonSliders = document.querySelectorAll('.work');

    function toggleSlider(slider) {

        let view = slider.querySelector('.work__view img');
        let thumbs = slider.querySelectorAll('.work__thamb img');
        let listener = (evt) => {
            thumbs.forEach((item) => {
                let swap = null;
                if(evt.target.src == item.src) {
                    swap = view.src;
                    view.src = evt.target.src;
                    evt.target.src = swap;
                }
                else return
            })
        }
        slider.onclick = listener;
    };

    buttonSliders.forEach((item) => {
        toggleSlider(item);
    });
    $('#loadmore').click(function(){ // клик на кнопку
        $(this).text('Загрузка...'); // меняем текст на кнопке
        // получаем нужные переменные
        var data = {
            'action': 'loadmore',
            'query': posts_vars,
            'page' : current_page
        };
        
        // отправляем Ajax запрос 
        $.ajax({
            url:ajaxurl,
            data:data,
            type:'POST',
            success:function(data){
                if(data) { 

                    $('.portfolio__list').append(data); // добавляем новые посты
                    $('#loadmore').text('Показать ещё');

                    current_page++; // записываем новый номер страницы
                    if (current_page == max_pages) $("#loadmore").remove(); // если последняя страница, удаляем кнопку
                } else {
                    $('#loadmore').remove(); // если посты не были получены так же удаляем кнопку
                }
            }                   

        }).done(function() {
            buttonSliders = document.querySelectorAll('.work');
            buttonSliders.forEach((item) => {
                toggleSlider(item);
            });
        });
                
    });

});

            