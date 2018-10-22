    // File js/editable_grid.js
    $(function () {
     
    var colors = new Array("Blue", "Red", "Green", "Yellow", "Pink"); // A color list used as an example for the List Field. May be generated via a database, in PHP...
     
    $("#myTable td").on('click', function editField(event) { // Edit cells from #myTable on a simple click event. Click can be replaced by dblclick for a double clicks event.
    	var originalContent = $(this).text(); // Cell original content
    	 
    	var relData = $.parseJSON($(event.target).attr('rel')); // Get Json from rel attribute
    	 
    	$(event.target).off("click", editField); // Disable click event when edition
    	
    	if (relData.type == "input") $(this).html('<input type="text" value=\"' + originalContent + '\" />'); // Generate input type field
    	if (relData.type == "textarea") $(this).html('<textarea>' + originalContent + '</textarea>'); // Generate textarea type field
    	if (relData.type == "checkbox") { // Generate checkbox type field
    		if (originalContent == 1) var isChecked = ' checked="checked"'; else isChecked="";
    		$(this).html('<input type="checkbox" value=\"' + originalContent + '\"' + isChecked + ' />');
    	}
    	if (relData.type == "select") { // Generate select type field
    		var buildSelect = '<select>'; // Built the list with the color Array
    		for (i=0; i<colors.length; i++) {
    			buildSelect += '<option value="' + colors[i] + '"';
    			if (colors[i] == originalContent) buildSelect += ' selected';
    			buildSelect += '>' + colors[i] + '</option>';
    		}
    		buildSelect += '</select>';
    		$(this).html(buildSelect);
    	}
    	
    	$(this).children().first().focus(); // Put the cursor on the generated field
     
    	$(this).children().first().keypress(function (e) { // keypress after modification
    		if (e.which == 13 && !e.shiftKey) { // the keypress is Enter, and not Shift Enter (Shift Enter is kept to go on the line for the textarea field)
    			var newContent = ""; // Init newContent
    			if ( (relData.type == "input") || (relData.type == "textarea") || (relData.type == "select") ) newContent = $(this).val(); // Get new content value
    			if (relData.type == "checkbox") {
    				if ($("input[type='checkbox']").is(":checked")){
    					newContent = 1;
    				} else newContent = 0;
    			}
    			
    			var data = {}; // Init data string
    			data["id"] = relData.id; // Include database row ID in the data
    			//...add / change name field here
    			if (relData.name == "text_field") data["text_field"] = newContent; // Include type field data
    			if (relData.name == "checkbox_field") data["checkbox_field"] = newContent;
    			if (relData.name == "checkbox_field_1") data["checkbox_field_1"] = newContent;
    			if (relData.name == "list_field") data["list_field"] = newContent;
    			if (relData.name == "textarea_field") data["textarea_field"] = newContent;
    			
    			$.ajax({ // jQuery Ajax
    				type: 'POST',
    				url: 'ajax/editable_grid.php', // URL called to the PHP file which will insert new value in the database
    				data: data, // We send the data string
    				timeout: 3000,
    				success: function(data) {
    					$('#result').html(data); },
    				error: function() {
    					$('#result').text('Problem'); }
    			});
    			
    			$(this).parent().text(newContent); // New content appears in the modified cell
    			$(event.target).on("click", editField); // Click event is allowed again
    		}
    	});
    	 
    	$(this).children().first().blur(function() { // If you click out of the cell, no modification is done
    		$(this).parent().text(originalContent); // We put back the original content
    		$(event.target).on("click", editField); // Click event is allowed again
    	});
    });
     
    });