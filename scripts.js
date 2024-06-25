document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: "Arduino Weather Station",
            description: "Build a weather station with Arduino to monitor temperature, humidity, and air pressure.",
            githubLink: "https://github.com/user/arduino-weather-station"
        },
        {
            name: "Raspberry Pi Smart Mirror",
            description: "Create a smart mirror using Raspberry Pi that displays weather, news, and calendar information.",
            githubLink: "https://github.com/user/raspberry-pi-smart-mirror"
        },
        {
            name: "IoT Home Automation System",
            description: "Develop an IoT-based home automation system to control lights, appliances, and security remotely.",
            githubLink: "https://github.com/user/iot-home-automation"
        },
        // Add more projects as needed
    ];

    createProjectCards(projects);
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
