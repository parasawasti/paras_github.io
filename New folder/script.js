/*let globalIsSubmit=false taken as false*/
/*taken as true when 
if(isSubmit){
    globalIsSubmit=true
}*/

function validate(){
    let firstName=document.getElementById('first name').value
    let lastName=document.getElementById('last name').value
    let userName=document.getElementById('username').value
    let password=document.getElementById('password').value
    let confirmPassword=document.getElementById('confirm-password').value
    let TNC=document.getElementById('t-and-c').checked 

    
    let error=false

/*now we use the if and else to put all the invalid and valid parameters*/

    if(firstName.length >=3){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    } else {
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
        error=true
    }


    if(lastName.length >= 3){
    document.getElementById('last-name-valid').style.display='block'
    document.getElementById('last-name-invalid').style.display='none'
    } else {
    document.getElementById('last-name-invalid').style.display='block'
    document.getElementById('last-name-valid').style.display='none'
    error=true
    }


    if(userName.includes('@') && userName.includes('.') && userName.indexOf("@")>0 && userName.substr(userName.lastIndexOf('.')+1).length>=2 ){
    document.getElementById('username-valid').style.display='block'
    document.getElementById('username-invalid').style.display='none'
    } else {
    document.getElementById('username-invalid').style.display='block'
    document.getElementById('username-valid').style.display='none'
    error=true
    }


    if(password.length >=8 && (password.includes('@') || password.includes('$') || password.includes('#')) && (password.includes('0') || password.includes('1') || password.includes('2') || password.includes('3') || password.includes('4'))){
    document.getElementById('password-valid').style.display='block'
    document.getElementById('password-invalid').style.display='none'
    } else {
    document.getElementById( 'password-invalid').style.display='block'
    document.getElementById( 'password-valid').style.display='none'
    error=true
    }


    if(confirmPassword.length > 0 && password==confirmPassword){
    document.getElementById('confirm-password-valid').style.display='block'
    document.getElementById('confirm-password-invalid').style.display='none'
    } else {
    document.getElementById('confirm-password-invalid').style.display='block'
    document.getElementById('confirm-password-valid').style.display='none'
    error=true
    }


    if(TNC){
    document.getElementById("invalid-tnc").style.display="none"
    }
    else{
    document.getElementById("invalid-tnc").style.display="block"
    error=true
    }

    if(!error) {
    alert('Your details have been saved successfully!')
    document.getElementById('first name').value = ''
    document.getElementById('last name').value = ''
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
    document.getElementById('confirm-password').value = ''
    document.getElementById('t-and-c').checked = false

    document.getElementById('first-name-valid').style.display = 'none'
    document.getElementById('last-name-valid').style.display = 'none'
    document.getElementById("username-valid").style.display = "none"
    document.getElementById("password-valid").style.display = "none"
    document.getElementById('confirm-password-valid').style.display='none'
    document.getElementById('confirm-password-invalid').style.display='none'
    }
}