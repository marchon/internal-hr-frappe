frappe.ui.form.set_user_image = function(frm) {

	var image_section = frm.sidebar.image_section;
	var image_field = frm.meta.image_field;
	var image = frm.doc[image_field];
	var title_image = frm.page.$title_area.find('.title-image');


	image_section.toggleClass('hide', image_field ? false : true);
	title_image.toggleClass('hide', image_field ? false : true);

	if(!image_field) {
		return;
	}

	// if image field has value
	if (image) {
		image_section
			.find(".sidebar-image")
			.css("background-image", 'url("' + image + '")')
			.removeClass("hide");

		image_section
			.find('.sidebar-standard-image')
			.addClass('hide');

		title_image
			.css('background-color', '')
			.css("background-image", 'url("' + image + '")')
			.html('');

	} else {
		image_section
			.find(".sidebar-image")
			.css("background-image", null)
			.addClass("hide");

		var title = frm.get_title();

		image_section
			.find('.sidebar-standard-image')
			.removeClass('hide')
			.find('.standard-image')
			.css({'background-color': frappe.get_palette(title)})
			.html(frappe.get_abbr(title));

		title_image.css("background-image", '')
			.css({'background-color': frappe.get_palette(title)})
			.html(frappe.get_abbr(title));

	}

	frm.sidebar.image_wrapper.on('click', function() {
		var field = frm.get_field(frm.meta.image_field);
		if(!field.$input) {
			field.make_input();
		}
		field.$input.trigger('click');
	})

}