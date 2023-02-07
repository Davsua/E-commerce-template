<?php
require_once('../models/NewUser.models.php');
class newUserController
{
    static function indexNewUser()
    {
        if($_POST['formRegisterUser']){
            $newUserReceive = New newUser();
            $newUserReceive->registerUser($_POST['username'], $_POST['password'], $_POST['email'], $_POST['phoneNumber'], $_POST['password']);
        }
    }
}