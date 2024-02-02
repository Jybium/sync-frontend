// export const setCookie = (cookiesValue) => {
//     const cookieName = "token"
//     const cookieValue = cookiesValue


//     const expirationDate = new Date()
//     expirationDate.setFullYear(expirationDate.getFullYear() - 1)

//     document.cookie = `${cookieName} = ${cookieValue};
//     HttpOnly; expires= ${expirationDate.toUTCString()}; path=/`;
// }

// export const setCookie = (cookiesValue) => {
//   const cookieName = "token";
//   const cookieValue = cookiesValue;

//   const expirationDate = new Date();
//   expirationDate.setFullYear(expirationDate.getFullYear() - 1);

//   document.cookie = `${cookieName}=${cookieValue}; HttpOnly; expires=${expirationDate.toUTCString()}; path=/`;
// };



// export const getCookie = () => {
//     const cookies = document.cookie.split(";").map(cookie => cookie.trim())

//     const desiredCookie = cookies.find(cookie => cookie.startsWith("token"))

//     if(desiredCookie){

//         return desiredCookie.split("=")[1];

//     } else {

//         return "Cookie not found"
        
//     }
// }


// Function to set a cookie with an access token
export const setCookie = (accessToken, expirationDays = 7) => {
    const cookieName = 'access_token';
    
    // Calculate the expiration date
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    // Format the cookie string
    const cookieString = `${cookieName}=${encodeURIComponent(accessToken)}; expires=${expirationDate.toUTCString()}; path=/`;

    // Set the cookie
    document.cookie = cookieString;
};

// Function to get the access token from the cookie
export const getCookie = () => {
    const cookieName = 'access_token';
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());

    const accessTokenCookie = cookies.find(cookie => cookie.startsWith(`${cookieName}=`));

    if (accessTokenCookie) {
        return decodeURIComponent(accessTokenCookie.split('=')[1]);
    } else {
        return null; // No access token found in cookies
    }
};
