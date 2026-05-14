const portfolioView = {

    renderProjects(projects) {

        const container = document.getElementById("projects-container");

        container.innerHTML = "";

        projects.forEach(project => {

            const card = document.createElement("article");

            card.classList.add("project-card");

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;

            container.appendChild(card);
        });
    }
};