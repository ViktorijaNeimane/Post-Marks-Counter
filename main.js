$('#results').hide();


$('.btn').click(countMarks);

function countMarks (){

    $('#results').show();
    
    const price = $('#price').val();

    // counting amount of marks

    if(price%5 === 0) {
       var r = price/5;
       var b = 0;
    } else {
        for (var i = 0 ; i <=4 ; ) {
            if ((price - i*3)%5 === 0) {
                var b = i;
                var r = (price - i*3)/5;
            };

            i++;
        };
        
    
    };


    // right ending according to amount of marks    
    if (r === 1 ) {
        $('#rMark').html(`${r} mark for 5 cents`);
    } else if (r === 0 ) {
        $('#rMark').empty();
    }else {
        $('#rMark').html(`${r} marks for 5 cents`);
    };

    if (b === 1 ) {
        $('#bMark').html(`${b} mark for 3 cents`);
    } else if (b === 0 ) {
        $('#bMark').empty();
    } else {
        $('#bMark').html(`${b} marks for 3 cents`);
    };

   
    event.preventDefault();

    $(':input').val('');

}

