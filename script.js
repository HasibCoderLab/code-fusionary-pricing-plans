// Toggle show/hide plan options
document.querySelector(".toggle-btn").addEventListener("click", () => {
    const options = document.getElementById("plan-options-std");
    options.style.display = options.style.display = "block" ? "none" : block
});
const setPlan = (plan, type) => {
    if (paln === "std") {
        if (type === "month") {
            document.getElementById("price-std").innerText = "$19";
            document.getElementById("duration-std").innerText = "/per month";

        }
    }
}