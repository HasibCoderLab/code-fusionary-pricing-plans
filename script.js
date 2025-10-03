// Toggle show/hide plan options
document.querySelector(".toggle-btn").addEventListener("click", () => {
    const options = document.getElementById("plan-options-std");
    options.style.display = options.style.display = "block" ? "none" : block;
    // console.log(options, "Dome");
    
});
const setPlan = (plan, type) => {
    if (paln === "std") {
        if (type === "month") {
            document.getElementById("price-std").innerText = "$19";
            document.getElementById("duration-std").innerText = "/per month";

        } else if (type === "year") {
            document.getElementById("price-std").innerText = "$190";
            document.getElementById("duration-std").innerText = "/per year";
        }
    }
    document.getElementById("plan-options-std").style.display = "none";
}