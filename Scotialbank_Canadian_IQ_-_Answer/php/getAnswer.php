<?php

if($_POST['auth'] = 'jzc0519'){
        include 'connect.php';
        // $qText = 'If you write a letter to postal code H0H 0H0, who will get it?';
        $qText = mysqli_real_escape_string($conn, $_POST['qText']);
        $result = mysqli_query($conn, "SELECT * FROM QBase WHERE Question = '{$qText}'");
        if (!$result) {
                echo "Error: %s\n", mysqli_error($conn);
                die($result);
        }
        while($row = mysqli_fetch_array($result)) {
                $answerKey = $row['Answer'];
                $answerText = $row['AnswerText'];
        }
        if(isset($answerKey)){
                $json['answer'] = $answerKey;
                $json['answerText'] = $answerText;
                $json['status'] = 0;
                $json['message'] = 'Success';
        }else{
                $json['status'] =1;
        $json['message'] = 'Question not found';
        }
        echo json_encode($json);
        die();
}
die("Not authurized");

