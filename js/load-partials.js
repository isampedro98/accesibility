function getCurrentPage() {
    const path = window.location.pathname.split("/").pop();
    return path || "index.html";
}

function setActiveNavItem(root) {
    const currentPage = getCurrentPage();
    const currentLink = root.querySelector(`[data-nav-link="${currentPage}"]`);

    if (!currentLink) {
        return;
    }

    currentLink.classList.add("active");
    currentLink.setAttribute("aria-current", "page");

    const subnav = currentLink.closest(".subnav");
    if (subnav) {
        subnav.classList.add("has-active");
    }
}

function setupSubnav(root) {
    const subnav = root.querySelector(".subnav");

    if (!subnav) {
        return;
    }

    const button = subnav.querySelector(".subnavbtn");

    if (!button) {
        return;
    }

    function closeSubnav() {
        subnav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
    }

    function toggleSubnav() {
        const isOpen = subnav.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
    }

    button.addEventListener("click", toggleSubnav);

    document.addEventListener("click", (event) => {
        if (!subnav.contains(event.target)) {
            closeSubnav();
        }
    });

    subnav.addEventListener("focusout", (event) => {
        if (!subnav.contains(event.relatedTarget)) {
            closeSubnav();
        }
    });
}

async function loadHeaderPartial() {
    const placeholder = document.querySelector('[data-include="site-header"]');

    if (!placeholder) {
        return;
    }

    const response = await fetch("./partials/site-header.html");

    if (!response.ok) {
        throw new Error(`No se pudo cargar el header compartido: ${response.status}`);
    }

    placeholder.innerHTML = await response.text();
    setActiveNavItem(placeholder);
    setupSubnav(placeholder);
}

loadHeaderPartial().catch((error) => {
    console.error(error);
});
