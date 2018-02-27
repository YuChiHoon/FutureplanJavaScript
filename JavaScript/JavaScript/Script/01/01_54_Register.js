function CheckForm()
{
    // 아이디 체크
    if (document.getElementById("txtUserID").value.length < 3)
    {
        window.alert("아이디를 정확하게 입력하시오.");
        document.getElementById("txtUserID").focus();
        return false;
    }

    //비밀번호 체크
    var pwd = document.getElementById("txtPassword");
    if (pwd.value.length < 3 || pwd.value.length > 15)
    {
        window.alert("암호는 3자 이상 15자 이하로 입력하시오.");
        pwd.select();
        return false;
    }

    //이름 체크
    var name = document.getElementById("txtCustomerName");
    if (name.value.length < 2 || name.value.length > 5) {
        window.alert("이름은 2자 이상 5자 이하로 입력하시오.");
        name.select();
        return false;
    }

    //암호와 확인암호가 같은지 체크
    var pwdcf = document.getElementById("txtPasswordConfirm");
    if (pwd.value != pwdcf.value)
    {
        window.alert("암호가 틀렸습니다. 다시 확인하십시오.");
        pwd.select();       //선택
        pwdcf.value = "";   //클리어
        return false;
    }
}

// 아이디 체크 페이지 열기
function CheckID()
{
    window.open("01_56_CheckID.html", "chk", "width=300px height=100");
}