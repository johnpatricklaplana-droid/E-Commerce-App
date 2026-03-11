
// get input field values in costumer sign up form
export function getSignupFormFields () {

    const costumer_first_name = document.getElementById("costumer_first_name");
    const costumer_last_name = document.getElementById("costumer_last_name");
    const costumer_street = document.getElementById("costumer_street");
    const costumer_city = document.getElementById("costumer_city");
    const costumer_postal_code = document.getElementById("costumer_postal_code");
    const costumer_province = document.getElementById("costumer_province");
    const costumer_country = document.getElementById("costumer_country");
    const costumer_email = document.getElementById("costumer_email");
    const costumer_password = document.getElementById("constumer_password");
    const costumer_confirm_password = document.getElementById("costumer_confirm_password");

    const costumer_signup_form_fields = {
        first_name: costumer_first_name.value.trim(),
        last_name: costumer_last_name.value.trim(),
        street: costumer_street.value.trim(),
        city: costumer_city.value.trim(),
        postal_code: costumer_postal_code.value.trim(),
        province: costumer_province.value.trim(),
        country: costumer_country.value.trim(),
        email: costumer_email.value.trim(),
        password: costumer_password.value.trim(),
        confirm_password: costumer_confirm_password.value.trim()
    };

    return costumer_signup_form_fields;
}