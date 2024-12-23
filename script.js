const sections = [
    { id: "intro", file: "/includes/intro.html" },
    { id: "review", file: "/includes/review.html" },
    { id: "audience", file: "/includes/audience.html" },
    { id: "engagement", file: "/includes/engagement.html" },
    { id: "accessibility", file: "/includes/accessibility.html" },
    { id: "design", file: "/includes/design.html" },
    { id: "code", file: "/includes/code.html" },
    { id: "tools", file: "/includes/tools.html" },
    { id: "highlight", file: "/includes/highlight.html" },
    { id: "looking-ahead", file: "/includes/looking-ahead.html" }
];

sections.forEach(section => {
    fetch(section.file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${section.file}`);
            }
            return response.text();
        })
        .then(content => {
            document.getElementById(section.id).innerHTML = content;
        })
        .catch(error => {
            console.error(error);
            document.getElementById(section.id).innerHTML = `<p>Error loading ${section.file}</p>`;
        });
});