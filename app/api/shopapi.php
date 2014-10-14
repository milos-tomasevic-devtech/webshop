<?php

require_once 'api.class.php';
require_once 'config/db.php';

class ShopAPI extends API
{

    public function __construct($request, $origin) {
        parent::__construct($request);

        $this->db = Database::getInstance();
        $this->mysqli = $this->db->getConnection();

    }

    protected function products($params) {
        if ($this->method == 'GET') {

            if (count($params)) {
                $id = $params[0];
                $sql = 'SELECT products.id, products.name, products.description, products.image_url, products.price, categories.name as type' .
                    ' FROM products' .
                    ' INNER JOIN categories' .
                    ' ON products.category_id=categories.id' .
                    ' WHERE products.id = ' . $id;

                $result = $this->mysqli->query($sql);

                if($result) {
                    $row = $result->fetch_assoc();
                    return $row;
                }
                return ['Nista'];

            } else {

                $result = $this->mysqli->query($sql);

                $array = Array();

                if ($result) {
                    while($row = $result->fetch_assoc()) {
                        $newArray = Array();
                        foreach($row as $key => $value) {
                            $newArray[$key] = $value;
                        }
                        $array[] = $newArray;
                    }
                }
                return $array;
            }

        }
    }
}

if (!array_key_exists('HTTP_ORIGIN', $_SERVER)) {
    $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
}

try {
    $API = new ShopAPI($_REQUEST['request'], $_SERVER['HTTP_ORIGIN']);
    echo $API->processAPI();
} catch (Exception $e) {
    echo json_encode(Array('error' => $e->getMessage()));
}