		<meta charset="UTF-8">
<?php

	header("content-type","text/html;charset=utf-8");
	//接收前端数据
	$username=$_POST['username'];
	$userpass=$_POST['userpass'];
	
	//处理
	

	//1、链接数据库
	$conn= mysql_connect("localhost","root","root");
	
	//2、选择数据库（目的地）
	mysql_select_db("flowerdb",$conn);
	
	//3、执行SQL
	$sqlStr="insert into vip(username,userpass) values('".$username."','".$userpass."')";
	mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);

		
	//响应
	echo "注册成功!<a href='login.html'>登录</a>"
	

?>