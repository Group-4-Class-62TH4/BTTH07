$(document).ready(function(){
    //check email
    function checkEmail(){
        let email = $('#txtEmail').val();
        let emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if(emailRegex.test(email)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkEmail()){
            $("#statusOfEmail").text('Email correct')
            $("#statusOfEmail").css('color','blue')
        }else{
            $("#statusOfEmail").text('Email incorrect')
            $("#statusOfEmail").css('color','red')
        }
    })
    //check country
    function checkCountry(){

        let country = $('#selectCountry').val();

        if(country == ''){
            return true
        }
        else{
            return false
        }
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if( checkCountry() == true){
            $("#statusOfCountry").text('Select a country')
            $("#statusOfCountry").css('color','red')
            $("#statusOfCountry").css('font-size','15px')
        }else{
            $("#statusOfCountry").text('Country is valid')
            $("#statusOfCountry").css('color','blue')
            $("#statusOfCountry").css('font-size','15px')
        }
    })
})