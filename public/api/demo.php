<?php 
$memId = $_POST["memId"];
$memPsw = $_POST["memPsw"];
try {
    $dbname = "backtest";
	$user = "root";
	$password = "";
	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);

    $sql = "select * from `admin_master` where admin_no=:memId and admin_psw=:memPsw";
    	//建立pdo物件
	$pdo = new PDO($dsn, $user, $password, $options);	

    $member = $pdo->prepare($sql);
	$member->bindValue(':memId',$memId);
	$member->bindValue(':memPsw',$memPsw);
    $member->execute();
	
	



    }catch(PDOException $e){
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        // echo "系統暫時不能正常運行，請稍後再試<br>";	
        exit("end---"); //php停止執行, 並輸出訊息
    }
	
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Examples</title>
</head>
<body>
<?php 
//若查無此人的資料即為帳密錯誤, 請重新登入~<br>
if($member->rowCount()===0){
	echo "帳密錯誤, 請重新登入~<br>";
}else{
	$memRow = $member -> fetch(PDO::FETCH_ASSOC);
	echo $memRow["admin_name"], ",你好!<br>";
}
//若有此人資料，請取回資料並顯示登入者名字
?>
</body>
</html>