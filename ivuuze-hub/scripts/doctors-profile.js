
document.getElementById("my-connect").addEventListener("click", myProfile);
function myProfile() {
    let firstNames = {
        name: "Johnson Tuyishime",
        phoneNumber: "+2507888888"
    }
    document.getElementById("p").innerHTML = `Name:${firstNames.name} \n Phone:${firstNames.phoneNumber}`;
}
