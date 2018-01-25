<?php

	header("content-type","text/html;charset=utf-8");
	
	//1、链接数据库
	$conn= mysql_connect("localhost","root","root");
	
	//2、选择数据库（目的地）
	mysql_select_db("flowerdb",$conn);
	
	//3、执行SQL
	$sqlStr="insert into vip(username,userpass,usersex) values('啊皮','111222','男')";
	mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);

?>