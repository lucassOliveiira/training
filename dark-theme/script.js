const checkbox = document.getElementById('checkbox')

//JS
/* checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
}) */

//jQuery
$(document).ready(function(){
    $(checkbox).change(function(){
        document.body.classList.toggle('dark')
    })                                           
})

