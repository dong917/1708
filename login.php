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
	
	//3、数据库操作
	//查找用户是否存在
	$sqlStr="select * from vip where username='".$username."' and userpass='".$userpass."' ";
	$result=mysql_query($sqlStr,$conn);
	
	//行数
	$rows=mysql_num_rows($result);
	
	//4、关闭数据库
	mysql_close($conn);

	if($rows==0){
		echo "用户名/密码输入错误";
	}else{
		echo "登陆成功!进入<a href='index.html'>首页</a>";
	}

?>