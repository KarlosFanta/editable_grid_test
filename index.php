    // index.php for example
    // Add a link to your jQuery.min.js file. Example:

 <!--   <script type="text/javascript" src="jquery/jquery-1.10.1.min.js"></script>-->
    <script type="text/javascript" src="js/jquery-1.11.1.min"></script>
	
    // And a link to the editable_grid.js file
    <script type="text/javascript" src="js/editable_grid.js"></script>
    <?PHP
	echo "<br>DB";
//	include "database_connection.php";
	include('db.class.php'); // call db.class.php
$bdd = new db(); // create a new object, class db()
	echo "DB";
	
    echo '<p id="result"></p>'; // display message sent back after cell modification, from editable_grid.php
     
    $fields = $bdd->getAll('SELECT * FROM editable_grid'); // Select from database
     
    if (count($fields)!=0) {
    	echo '<table class="table table-striped table-bordered table-hover" id="myTable">';  // Create table
    	echo '<thead>';
    		echo '<th>Id</th><th>Text Field</th><th>Textarea Field</th><th>Checkbox Field</th><th>Checkbox Field 1</th><th>List Field</th>'; // Table column name
    	echo '</thead>';
    	echo '<tbody>';
    	foreach($fields as $field) { // Generate table lines
    		echo '<tr>';
    		?>
    			<td><?php echo $field['id']; ?></td>
    			<!-- Rel attribute with Json including fields name, fields type (4 choices: input, textarea, checkbox or select), and line Id -->
    			<td rel='{"name":"text_field","type":"input","id":<?php echo $field['id']; ?>}'><?php echo $field['text_field']; ?></td>
    			<td rel='{"name":"textarea_field","type":"textarea","id":<?php echo $field['id']; ?>}'><?php echo nl2br($field['textarea_field']); ?></td>
    			<td rel='{"name":"checkbox_field","type":"checkbox","id":<?php echo $field['id']; ?>}'><?php echo $field['checkbox_field']; ?></td>
    			<td rel='{"name":"checkbox_field_1","type":"checkbox","id":<?php echo $field['id']; ?>}'><?php echo $field['checkbox_field_1']; ?></td>
    			<td rel='{"name":"list_field","type":"select","id":<?php echo $field['id']; ?>}'><?php echo $field['list_field']; ?></td>
    			
    		<?php
    		echo '</tr>';
    	}
    	echo '</tbody>';
    	echo '</table>';
    }
    ?>
	table end