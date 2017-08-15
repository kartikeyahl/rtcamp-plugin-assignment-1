/**
 * Modus Operandi:
 * 
 * First of all user selects the image he wants to put in slider with WP media manager(wpmm).
 * Ideally the state(selected images) should be stored in a global varialble, and DOM should be updated when it changes,
 * However it was getting messy and difficult, so we stored it directly in the DOM in the images of "Images" section. 
 * We stored selected image id, thumbnail_url and fullsize_url in image attributes. 
 */

jQuery(document).ready(function($){
    // Whenever the user reorders images, update the slideshow with it
    $(function(){
        $( "#sortable" ).sortable({
            update: function(e,u){ 
                render_slideshow();
                display_warning_message()
            }
        });
        $( "#sortable" ).disableSelection();
    });

    var slider_options = {
        pager: true,
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        loop:true,
    };

    // Initialize Slider
    $("#lightSlider").lightSlider(slider_options);
    
    $('#save-btn').click(function(e){
        var data = {
            images: get_selected_images_id(),
            nonce: rtsa.nonce,
            action: 'rtsa_update_images'
        };

        // Add listener to dismiss notices
        $('body').on('click','button.notice-dismiss', function(){
            console.log($(this).parent().remove());
        })

        $.post(wp.ajax.settings.url, data).done(function(data) {
            display_success_message();
        });
    });

    // Opens wordpress media manager when user  
    //  clicks on 'Add New Image' button
    $('#upload-btn').click(function(e) {
        e.preventDefault();
        frame = wp.media({ 
            title: 'Select Image',
            multiple: true
        });
        frame.on('open', function () {
            var selection = frame.state().get('selection');
            ids = get_selected_images_id();
            
            // This will pre-select images in wp media manager
            // which have been already selected  
            ids.forEach(function(id) {
                attachment = wp.media.attachment(id);
                attachment.fetch();
                selection.add( attachment ? [ attachment ] : [] );
            });
        }).open()
        .on('select', function(e){
            // This will return the selected image from the Media Uploader, the result is an array
            var selected_images = frame.state().get('selection');
            render_images(selected_images);
            display_warning_message();            
        });
    });

    // This functions renders slideshow in "Slider Live Preview" Section
    function render_slideshow() {
        $('#slider-container').empty();
        $('#slider-container').append('<ul id="lightSlider"></ul>');
        $('#sortable > li').each(function(){
            $('#lightSlider').append(`<li data-thumb="${$(this).attr('data-thumbnail')}"><img class="slider-items" src="${$(this).attr('data-fullsize')}" width='100%' style='max-width:600px'/></li>`)
        });
        $("#lightSlider").lightSlider(slider_options);
    }
    
    // This functions renders selected images "Images" Section 
    function render_images(images) {
        $('#sortable').empty();
        
        images.forEach(function(image){
            var img = $("<img />").attr('src', image.attributes.sizes.thumbnail.url)
            var item = `<li class="ui-state-default" data-id="${image.id}" data-thumbnail='${image.attributes.sizes.thumbnail.url}' data-fullsize='${image.attributes.url}'>${img[0].outerHTML}</li>`;
            $('#sortable').append(item);
        });
        render_slideshow();
    }
    
    // Returns an array ids of selected images
    function get_selected_images_id() {
        var image_ids = [];
        $('#sortable > li').each(function(){
            image_ids.push($(this).attr('data-id'));
        });
        return image_ids;
    }

    function display_success_message() {
        $('#success-message').remove()
        $('#warning-message').remove()
        $('.wrap > h1').after(`
        <div id="success-message" class="notice notice-success is-dismissible">
            <p>All prefrences saved</p>
            <button type="button" class="notice-dismiss">
                <span class="screen-reader-text">Dismiss this notice.</span>
            </button>
        </div>`);
    }
    function display_warning_message() {
        $('#success-message').remove()
        $('#warning-message').remove()
        $('.wrap > h1').after(`
        <div id="warning-message" class="notice notice-warning is-dismissible">
            <p>Do remember to save your changes by pressing 'Save' button</p>
            <button type="button" class="notice-dismiss">
                <span class="screen-reader-text">Dismiss this notice.</span>
            </button>
        </div>`);
    }
});
