<?php

// converte l'array 'todos' ricevuto in POST in una stringa JSON
$data = json_encode($_POST['todos']); 

// scrive la stringa JSON nel file 'todos.json'
file_put_contents('todos.json', $data); 

?>