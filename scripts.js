function isFunction(callback){
    return callback && typeof callback === "function";
}

$(window).click(function(e) {
    if(!$(e.target).closest('.select-t').length && $('.select-t.open').length){
        $('.select-t').removeClass('open');
    }
});