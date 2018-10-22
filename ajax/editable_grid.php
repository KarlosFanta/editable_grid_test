    // File ajax/editable_grid.php
    <?php
    include('../db.class.php'); // Call to your database connection
    $bdd = new db(); // Call to your database connection
     
    //...add / change fields name here
    if (isset($_POST['text_field'])) $qString='text_field="'.strip_tags($_POST['text_field']).'"'; // If field exists...generate query SET part with column name and new cell value
    if (isset($_POST['checkbox_field'])) $qString='checkbox_field='.$_POST['checkbox_field'];
    if (isset($_POST['checkbox_field_1'])) $qString='checkbox_field_1='.$_POST['checkbox_field_1'];
    if (isset($_POST['list_field'])) $qString='list_field="'.$_POST['list_field'].'"';
    if (isset($_POST['textarea_field'])) $qString='textarea_field="'.strip_tags($_POST['textarea_field']).'"';
     
    $query = $bdd->execute('UPDATE editable_grid SET '.$qString.' WHERE id='.$_POST['id'].''); // Update database with the correct Id (line)
     
    echo '<div class="alert alert-success">Grid modified successfully</div>'; // Message sent back to #result <p> node
    ?>