function openProject(project) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const image = document.getElementById("modalImage");
    const desc = document.getElementById("modalDesc");

    if (project === "nutriboost") {
        title.innerText = "NUTRIBOOST";
        image.src = "nutri.jpg";
        desc.innerText =
            "Nutriboost provides personalized food and nutrition recommendations based on health conditions and wellness goals.";
    }

    if (project === "hateword") {
        title.innerText = "Hate Word Deletion System";
        image.src = "hateword.jpg";
        desc.innerText =
            "Automated system to detect and remove offensive or hateful words using rule-based filtering and NLP.";
    }

    modal.style.display = "block";
}

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}
