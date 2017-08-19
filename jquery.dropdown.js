(function($) {
    $.fn.select = function(options) {
        var container = this.addClass('pane select-t');
            
        var dropdown;
        var input = $('<input>');
        var placeholder = $('<div>');
        
        var firstOption = {
            ID: 0,
            Label: options.firstOption || 'Select'
        };
        
        var settings = $.extend( {
            'className': 'select__value',
            'dropdownHeight': 300,
            'name': 'select__value'
        }, options);
        
        var active = {
            ID: firstOption.ID,
            Label: firstOption.Label
        };

        // Create select__button
        (function() {
            placeholder.addClass('placeholder')
                    .text(active.Label)
                    .appendTo(container);
            
            input.attr({
                        type:   'hidden',
                        value:  active.ID,
                        name:   settings.name,
                        class:  options.className
                    })
                    .appendTo(container);
            
            container.wrapInner( $('<div>').addClass('pane select__button') );
            
            if(options.menu && !dropdown){
                if( isFunction( options.actionBeforeClick ) ){
                    options.actionBeforeClick();
                }
                createDropdown( options.actionAfterClick );
            }
        })();
        
        function open(callback) {
            if( isFunction(callback) ){
                callback();
            }
            checkHeight();
            checkItem();
            container.addClass('open');
        }
        
        //-edit
        function checkHeight() {
            var size = dropdown.find('.select__item').length;
            var height = size*50;
            
            if( settings.dropdownHeight > height ){
                dropdown.css('height', height+3);
            }
        }
        
        function checkItem() {
            (function() {
                dropdown.find('.select__item:not([data-id=' + active.ID + '])').removeClass('is-active')
                dropdown.find('[data-id=' + active.ID + ']').addClass('is-active');
            })();
        }

        // Create dropDown
        function createDropdown(callback) {
            dropdown = $('<div>')
                    .attr('data-simplebar-direction', 'vertical')
                    .css({
                        height: settings.dropdownHeight
                    })
                    .addClass('select__dropdown');
            
            container.find('.select__dropdown').remove();
            
            if(options.firstOption){
                createOption(null, firstOption);
            }
            
            $.each(options.menu, function(index, item){
                createOption(index + 1, item);
            });
            container.append(dropdown);
            
            function createOption(index, item) {
                var li = $('<div>')
                    .attr('data-id', item.ID)
                    .addClass('pane select__item')
                    li.appendTo(dropdown);
            
                if(item.active){
                    active.ID = item.ID;
                    active.Label = item.Label;
                    
                    input.val(active.ID);
                    placeholder.text(active.Label);
                    li.addClass('is-active');
                }
            
                $('<span>').addClass('checkbox')
                    .appendTo(li);
                
                $('<span>').addClass('select__value')
                    .text(item.Label)
                    .appendTo(li);
            }
            
            dropdown.on('click', '.select__item', function(){
                if( active.ID !== $(this).data('id') ){
                    
                    active.ID = $(this).data('id');
                    active.Label = $(this).find('.select__value').text();
                    
                    input.val(active.ID);
                    placeholder.text( active.Label );
                    
                    container.find('.select__item').removeClass('is-active');
                    $(this).addClass('is-active');
                }
                
                container.removeClass('open');
            });
        }

        // Click on the button
        container.on('click', '.select__button', function(){
            if(!dropdown){
                if( isFunction( options.actionBeforeClick ) ){
                    options.actionBeforeClick();
                }
                createDropdown();
            }
            open( options.actionAfterClick );
        });
    };
})(jQuery);