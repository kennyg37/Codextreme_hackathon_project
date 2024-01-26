
let names = {
    name: "Johnson Tuyishime",
    phoneNumber: "+2507888888"
}
document.getElementById("my-connect").addEventListener("click", myProfile);
function myProfile() {
    document.getElementById("p").innerHTML = `Name:${names.name} \n Phone:${names.phoneNumber}`;
}


