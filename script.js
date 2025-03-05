document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {
        project.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0 0 20px #0ff";
        });

        project.addEventListener("mouseleave", function () {
            this.style.boxShadow = "0 0 10px #00f";
        });
    });
});
