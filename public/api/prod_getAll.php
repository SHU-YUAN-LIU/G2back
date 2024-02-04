<?php
header("Access-Control-Allow-Origin:*");
try {
	require_once("../../connectBooks.php");
	$sql = "select * from products";
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	$result = ["error" => false, "msg" => "", "products" => $prodRows];
} catch (PDOException $e) {
	$result = ["error" => true, "msg" => $e->getMessage()];
}
echo json_encode($result);
?>