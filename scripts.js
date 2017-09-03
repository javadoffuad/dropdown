function isFunction(callback){
    return callback && typeof callback === "function";
}

$(window).click(function(e) {
    if(!$(e.target).closest('.select').length && $('.select.open').length){
        $('.select').removeClass('open');
    }
});