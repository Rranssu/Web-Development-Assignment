const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const colorInput = document.getElementById("colorInput");
const generateBtn = document.getElementById("generateBtn");
const profileCard = document.getElementById("profileCard");

generateBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const color = colorInput.value.trim();

    if (!name || !age || !color) {
        alert("Hoy Lagyan Mo lahat Bisaya!");
        return;
    }

    profileCard.innerHTML = `
        <div class="card" style="border-top: 6px solid ${color};">
            <h2>${name}</h2>
            <p>Age: ${age}</p>
            <p>Favorite Color: <span style="color:${color};">${color}</span></p>
        </div>
    `;
});
