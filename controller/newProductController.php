<?php
require_once ('../models/NewProduct.model.php');
class newProductController
{
    public function indexNewProduct()
    {
        print_r("Esta imprimiendo");
        $newProduct = New NewProduct();
        $newProduct->newProductCreate(
            $_POST["id"]=null,
            $_POST["title"],
            $_POST["description"],
            $_POST["price"],
            $_POST["discountPercentage"],
            $_POST["rating"],
            $_POST["stock"],
            $_POST["brand"],
            $_POST["category"],
            $_POST["thumbnail"],
            $_POST["images"]
        );
    }

}