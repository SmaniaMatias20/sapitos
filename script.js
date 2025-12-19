const data = {
    Enzo: ["img/enzo/1.jpeg", "img/enzo/2.jpeg", "img/enzo/3.jpeg", "img/enzo/4.jpeg", "img/enzo/5.jpeg", "img/enzo/6.jpeg", "img/enzo/7.jpeg"],
    Samuel: [],
    Lionel: ["img/lionel/1.jpeg", "img/lionel/2.jpeg"],
    Lucas: [],
    Emmanuel: ["img/emma/1.jpeg", "img/emma/2.jpeg", "img/emma/3.jpeg", "img/emma/4.jpeg", "img/emma/5.jpeg", "img/emma/6.jpeg", "img/emma/7.jpeg", "img/emma/8.jpeg", "img/emma/9.jpeg", "img/emma/10.jpeg", "img/emma/11.jpeg"],
    Eithan: [],
    Santino: [],
    Thiago: [],
    GianLuca: [],
    Patricio: [],
    Geronimo: [],
    Aaron: [],
    Giovanni: [],
    Bruno: [],
    Milo: [],
    Martina: [],
    Lucia: [],
    Edixa: [],
    Isabella: [],
    Sofia_M: [],
    Sofia_G: [],
    Regina: [],
    Maite: [],
    Olivia: [],
    Jade: [],
    Alisson: [],
    Giselle: []
};


const names = document.getElementById("names");
const gallery = document.getElementById("gallery");
const backBtn = document.getElementById("backBtn");
const title = document.getElementById("title");

/* Render nombres */
Object.keys(data).forEach(name => {
    const btn = document.createElement("button");
    btn.className = "name-btn";
    btn.textContent = name;
    btn.onclick = () => openGallery(name);
    names.appendChild(btn);
});

function openGallery(name) {
    // 🔥 OCULTA COMPLETAMENTE EL LISTADO
    names.classList.add("hidden");

    // 🔥 MUESTRA GALERÍA Y FLECHA
    gallery.classList.remove("hidden");
    backBtn.classList.remove("hidden");

    title.textContent = name;

    gallery.innerHTML = "";
    data[name].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.onclick = () => openImage(src); // 👈 fullscreen
        gallery.appendChild(img);
    });

}

backBtn.onclick = () => {
    // 🔁 VOLVER ATRÁS
    gallery.classList.add("hidden");
    names.classList.remove("hidden");
    backBtn.classList.add("hidden");

    gallery.innerHTML = "";
    title.textContent = "Sapitos";
};

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

function openImage(src) {
    modalImg.src = src;
    modal.classList.remove("hidden");
}

closeModal.onclick = () => {
    modal.classList.add("hidden");
    modalImg.src = "";
};

// Cerrar tocando el fondo
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        modalImg.src = "";
    }
};
