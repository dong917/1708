//正则验证手机号码、密码
	//手机号	
	$('user-num').onblur = function(){
		var num = $('user-num').value;
		var str = $('mobile-num').childNodes[5];
		var oRegId = /^1[3|4|5|7|8]\d{9}$/;
		if(oRegId.test(num)===true){
			str.innerHTML = '√';
			document.getElementById("shownum").style.display="none";
		}else{
			str.innerHTML = '';
			document.getElementById("shownum").style.display="block";
		}
	}
	
	
	//密码
	$('password').onblur = function(){
		var pass = $('password').value;
		var str = $('password-num').childNodes[5];
		var oRegId = /^[A-Za-z0-9]{6,16}$/;
		if(oRegId.test(pass)===true){
			str.innerHTML = '√';
			document.getElementById("showmsg").style.display="none";
		}else{
			str.innerHTML = '';
			document.getElementById("showmsg").style.display="block";
		}
	}
	//确认密码
	$('CheckPassword').onblur = function(){
			var pass= $('password').value;
			var CheckPassword = $('CheckPassword').value;
			var str = $('login-CheckPassword').childNodes[5];
			if(pass===CheckPassword && CheckPassword!==''){
				str.innerHTML = '√';
			}else{
				str.innerHTML = '×';
			}	
	}

