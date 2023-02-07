<?php
# @Class/Method/Model -> New User || (Register && Login)
class new_user
{
    # They are set to private, so they cannot be accessed without a method
    private $username;
    private $email;
    private $tel_number;
    private $password;
    private $encrypted_password; # We encrypt the password for more security =D
    private $storage = "rute db-JSON";
    private $stored_users; # we need this variable with all the users to validate that the registrations are not repeated.
    private $new_user; # type->Array || This variable is the one that we will send to the json.
    public $error = array();
    public $success;

    # Constructor, we check the input data.
    public function __construct()
    {
        # Get dates file JSON
        $this->stored_users = json_decode(file_get_contents($this->storage), true);

        #This line checks that the variables are not empty, if it manages to pass insert to the user -- Change
        #if($this->check_field_values())
        #$this->insertUser();
    }

    # @Check Values Register
    private function check_values_register($username, $email, $tel_number, $password)
    {
        # Asign values
        $this->username = filter_var(trim($username), FILTER_SANITIZE_STRING);
        $this->email = filter_var(trim($email), FILTER_SANITIZE_EMAIL);
        $this->tel_number = trim($tel_number); # Este no lo supe "desinfectar" ='|
        $this->password = filter_var(trim($password), FILTER_SANITIZE_STRING);
        $this->encrypted_password = password_hash($this->password, PASSWORD_DEFAULT);

        # Create Object new user
        $this->new_user = [
            "username" => $this->username,
            "email" => $this->email,
            "tel_number" => $this->tel_number,
            "password" => $this->encrypted_password,
        ];
    }
    # @Check Values Login
    private function check_values_login($username, $password)
    {
        $this->username=$username;
        $this->password=$password;
        $this->stored_users=json_decode(file_get_contents($this->storage), true); # json_decode -> parse()
    }

    # @We check that the variables are not empty.
    private function check_field_values()
    {
        # check if they are empty
        if (empty($this->username)) array_push($this->error, "Username is empty");
        if (empty($this->email)) array_push($this->error, "Email is empty");
        if (empty($this->tel_number)) array_push($this->error, "Telephone number is empty");
        if (empty($this->password)) array_push($this->error, "Password is empty");
        # Finish vacio.

        # <__ Check characters. __>
        # username
        if (preg_match("/ /i", $this->username)) array_push($this->error, "Username error: No spaces/empty characters allowed");
        if (!preg_match("/^[a-zA-Z]+$/", $this->username)) array_push($this->error, "Username error: Can only contain letters");

        # email
        if (preg_match("/ /", $this->email)) array_push($this->error, "Email error: No spaces/empty characters allowed");
        if (preg_match("/^[a-zA-Z]+$/", $this->email)) array_push($this->error, "Email error: only letters allowed");

        # phone number
        if (!preg_match("/(^\+)/", $this->tel_number)) array_push($this->error, "Phone number error: Does not match");
        if (preg_match("/[0-9]{,8}/", $this->tel_number)) array_push($this->error, "Phone number error: Amount");

        # password
        if (!preg_match("/.{6,}/", $this->password)) array_push($this->error, "Password error: Does not meet the minimum length (6 characters)" . strlen($this->password));//
        if (!preg_match("/[A-Z]/", $this->password)) array_push($this->error, "Password error: You need a capital letter");
        if (!preg_match("/\*|-|\./", $this->password)) array_push($this->error, "Password error: You need one of these characters (*, -, .)");
        # Finish

        if (empty($this->error)) return true; # If no error was found, return true.
        else return false;
    }

    # @Check that the user is not checked yet
    private function user_exists()
    {
        foreach ($this->stored_users as $user) {
            if ($this->username == $user['username']) {
                array_push($this->error, "Username already taken, please choose a different one");
                return true;
            }
        }
        return false;
    }

    # @send dates json
    private function register_user()
    {
        if (!$this->user_exists()) {
            array_push($this->stored_users, $this->new_user);
            if (file_put_contents($this->storage, json_encode($this->stored_users, JSON_PRETTY_PRINT))) {
                return $this->success = "Your registration was successful";
            } else {
                return array_push($this->error, "Something went wrong, please try again");
            }
        }
    }

    # @Send dates and check user login.
    public function login_user()
    {
        foreach ($this->stored_users as $user){
            if($user['username']==$this->username){
                if(password_verify($this->password, $user['password'])){
                    session_start();
                    $_SESSION['user'] = $this->username;
                    exit();
                } else array_push($this->error, "Wrong password");
            } else array_push($this->error, "Wrong username");
        }
    }
}