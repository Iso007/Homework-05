$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

var currentHour = parseInt(moment().format('H'));
var workHour = parseInt($('.hour'()))

console.log(currentHour);
console.log(workHour);

if (workHour === currentHour){
    $('.workItems').addClass('present');
} else if (workHour < currentHour){
    $('.workItems').addClass('past');
} else {
    $('.workItems').addClass('future');
}

//

$(document).on('click', event => {
    if (event.target.classList.contains('workItems')){
        let textArea = $('.workContainer').append('<textArea type="text" name="fname" class="chatInput"><</textArea>< div class= "printChatBox" ></div>')
        $('.workContainer').append(textArea)
        console.log('ping');
    }
});

//

$('.chatinput').keyup(function(){
    var newText = $('.chatinput').val();
    $('.printChatBox').text(newText);
});

let userText = $('#textArea').value;
localStorage.setItem('work', userText);
$('#textArea').value = localStorage.getItem('work', userText);

//

$(function color(){
    $('#9, #10, #11, #12, #13, #14, #15, #16, #17').ready(function(){
        let id = parseInt(this.id);
        if (id === currentHour){
            $('.workItems').addClass('present');
        } else if (id < currentHour) {
            $('.workItems').addClass('past');
        } else {
            $('.workItems').addClass('future');
        }
    })
})

//