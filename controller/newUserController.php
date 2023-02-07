<?php
require_once('../models/NewUser.model.php');
class newUserController
{
    public function indexNewUser()
    {
        if($_POST['formRegisterUser']){
            $newUserReceive = New newUser();
            $newUserReceive->registerUser(
                $_POST['username'],
                $_POST['password'],
                $_POST['email'],
                $_POST['phoneNumber'],
                $_POST['password']);
        }
    }
}