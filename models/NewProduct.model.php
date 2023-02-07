<?php

# New product, change product, delete product
class NewProduct
{
    private $id;
    private $title;
    private $description;
    private $price;
    private $discountPercentage;
    private $rating;
    private $stock;
    private $brand;
    private $category;
    private $thumbnail;
    private $images;

    private $newProduct;
    private $storage = "../db/products.json";
    private $storedUsed;
    public $error = array();
    public $success = array();
    function __constructor($id=null, $title, $description, $price, $discountPercentage, $rating, $stock, $brand, $category, $thumbnail, $images)
    {
        if(!id==null)$this->id=filter_var(trim($id), FILTER_SANITIZE_NUMBER_INT);
        else $this->id=uniqid();

        $this->title=filter_var(trim($title), FILTER_SANITIZE_STRING);
        $this->description=filter_var(trim($description), FILTER_SANITIZE_STRING);
        $this->price=filter_var(trim($price), FILTER_SANITIZE_NUMBER_INT);
        $this->discountPercentage=filter_var(trim($discountPercentage), FILTER_SANITIZE_NUMBER_FLOAT);
        $this->rating=filter_var(trim($rating), FILTER_SANITIZE_NUMBER_FLOAT);
        $this->stock=filter_var(trim($stock), FILTER_SANITIZE_NUMBER_INT); // Int
        $this->brand=filter_var(trim($brand), FILTER_SANITIZE_STRING);
        $this->category=filter_var(trim($category), FILTER_SANITIZE_STRING);
        $this->thumbnail=filter_var(trim($thumbnail), FILTER_SANITIZE_STRING);
        $this->images=$images; # This is array

        $this->storedUsed = json_decode(file_get_contents($this->storage), true);
    }

    # Upload or Create Product
    private function uploadProduct ($success ,$error)
    {
        array_push($this->storedUsed, $this->newProduct);
        if (file_put_contents($this->storage, json_encode($this->storedUsed, JSON_PRETTY_PRINT))) {
            array_push($this->success, $success);
        } else {
            return array_push($this->error, $error);
        }
    }

    # Check values required in one product
    private function checkValuesProduct ()
    {
        # Check values empty
        # if (empty($this->id)) array_push($this->error, "Id is empty");
        if (empty($this->title)) array_push($this->error, "Title is empty");
        if (empty($this->description)) array_push($this->error, "Description is empty");
        if (empty($this->price)) array_push($this->error, "Price is empty");
        if (empty($this->stock)) array_push($this->error, "stock is empty");

        # Check values requirement
        if (preg_match("/[a-zA-Z]{3,}/i", $this->title)) array_push($this->error, "Title error: Does not meet the number of characters");
        if (preg_match("/([a-zA-Z0-9_.-]+)@([a-zA-Z]+)([\.])([a-zA-Z]+)/i", $this->description)) array_push($this->error, "Description error: Email in text");
        if($this->price==0) array_push($this->error, "Price Error: Price is null");
        if($this->stock==0) array_push($this->error, "Stuck Error: Stuck is null");
    }

    # Create and validate object
    public function newProductCreate()
    {
        $this->checkValuesProduct(); # Review values
        if (empty($this->error)) { # Review || No se si funciona XD
            $this->newProduct = [
                "id" => $this->id,
                "title" => $this->title,
                "description" => $this->description,
                "price" => $this->price,
                "discountPercentage" => $this->discountPercentage,
                "rating" => $this->rating,
                "stock" => $this->stock,
                "brand" => $this->brand,
                "category" => $this->category,
                "thumbnail" => $this->thumbnail,
                "images" => $this->images
            ];

            $this->uploadProduct("Object Success: The product went up to our base", "Object Error: The product error to push");

        } else array_push($this->error, "Object Error: Values not accepted");
    }

    # Change item Object
    public function changeValuesProduct ($id, $change)
    {
        # Since it is a key value object, we must page through it somehow in order to access it via index and then key
        for ($i=0; $i<=count($this->storedUsed); $i++) {
            # in this case [$i=index][$id=key]
            if($this->storedUsed[$i][$id] == $id) {
                $this->storedUsed = $change;
                $this->uploadProduct('Change Success: The values is change', 'Change Error: The values is not change');
            }
        }
    }

    # Delete item Object
    public function deleteProduct($id)
    {
        # Since it is a key value object, we must page through it somehow in order to access it via index and then key
        for ($i=0; $i<=count($this->storedUsed); $i++) {
            # in this case [$i=index][$id=key]
            if($this->storedUsed[$i][$id] == $id) {
                unset($this->storedUsed[$i]);
                $this->uploadProduct('Delete Success: The product delete', 'Delete Success: The product is not delete');
            }
        }
    }
}