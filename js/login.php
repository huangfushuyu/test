<?php

	//接受传递来的值
	$un=$_POST['username'];
	$ps=$_POST['password'];
	//echo $un;
	
	//声明已有的数据名称
	$arr=["admin"];
	$arr1=["123456"];
	//进行数据比对
	if($arr===$un && $arr1===$ps){
		//如果有 返回y
		echo '0';
		
	}else{
		//没有 返回n
		echo '1';		
	}