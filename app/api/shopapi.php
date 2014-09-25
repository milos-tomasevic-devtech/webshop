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

    protected function products() {
        if ($this->method == 'GET') {

            $sql = 'SELECT * FROM products LIMIT 8';
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

if (!array_key_exists('HTTP_ORIGIN', $_SERVER)) {
    $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
}

try {
    $API = new ShopAPI($_REQUEST['request'], $_SERVER['HTTP_ORIGIN']);
    echo $API->processAPI();
} catch (Exception $e) {
    echo json_encode(Array('error' => $e->getMessage()));
}