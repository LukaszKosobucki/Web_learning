$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
});

// $("li").on("click",function () {
//     if ($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         })
//     }else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         })
//     }
// })

$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove(); //usuwa parenta danego obiektu. po jego zniknieciu
    });
    event.stopPropagation(); //stopuje klikanie innych rzeczy pomimo że są parentami.
});

$("input[type='text']").keypress(function (event) {
    if(event.which===13){
        var new_todo=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + new_todo + "</li>")
    }
});

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle(700)
})