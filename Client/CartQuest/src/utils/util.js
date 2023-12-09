export const validateFormData=(formValues)=>{
    const errors={}
    const emailRegex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(!formValues.userName.trim()){
        errors.userName='User Name is required'
    }
    if(!formValues.email.trim()){
        errors.email='Email is required'
    }
    else if(!emailRegex.test(formValues.email)){
        errors.email='Email is invalid'
    }
    if(!formValues.password.trim()){
        errors.password='Password is required'
    }
    else if(formValues.password.length<8){
        errors.password='Password must be 8 characters long'
    }
    else if(formValues.password.length>20){
        errors.password='Password must be less than 20 characters'
    }
    else if(!passwordRegex.test(formValues.password)){
        errors.password='Password must contain atleast one uppercase, one lowercase, one number and one special character'
    }
    if(!formValues.confirmPassword.trim()){
        errors.confirmPassword='Confirm Password is required'
    }
    else if(formValues.confirmPassword!==formValues.password){
        errors.confirmPassword='Password and Confirm Password must be same'
    }
    if(!formValues.phoneNumber.trim()){
        errors.phoneNumber='Phone Number is required'
    }
    else if(formValues.phoneNumber.length!==10){
        errors.phoneNumber='Phone Number must be 10 digits long'
    }
    return errors
}