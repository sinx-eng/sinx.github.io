document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            createProjectCards(data);
        })
        .catch(error => console.error('Error fetching projects:', error));
});

function createProjectCards(projects) {
    const container = document.getElementById('project-cards');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = project.name;

        const desc = document.createElement('p');
        desc.textContent = project.description;

        const link = document.createElement('a');
        link.href = project.githubLink;
        link.textContent = 'GitHub Link';

        desc.appendChild(document.createElement('br'));
        desc.appendChild(link);

        card.appendChild(title);
        card.appendChild(desc);

        container.appendChild(card);
    });
}
