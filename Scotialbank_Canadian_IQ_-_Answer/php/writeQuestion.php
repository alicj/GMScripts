<?php
if($_POST['auth'] = 'jzc0519'){
        include 'connect.php';
        $Question = mysqli_real_escape_string($conn, $_POST['Question']);
        $Answer = $_POST['Answer'];
        $AnswerText = mysqli_real_escape_string($conn, $_POST['AnswerText']);

        $sql = "INSERT INTO QBase (Question, Answer, AnswerText) VALUES ('$Question', '$Answer', '$AnswerText')";
        if (!mysqli_query($conn,$sql)) {
                $response['status'] = 1;
                $response['message'] = 'Error: ' . mysqli_error($conn);
                echo json_encode($response);
                die();
        }

        $response['status'] = 0;
        $response['message'] = 'success';
        echo json_encode($response);

        die();
}
die("Not authurized");
