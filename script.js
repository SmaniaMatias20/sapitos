const data = {
    Enzo: ["img/enzo/1.jpeg", "img/enzo/2.jpeg", "img/enzo/3.jpeg", "img/enzo/4.jpeg", "img/enzo/5.jpeg", "img/enzo/6.jpeg", "img/enzo/7.jpeg"],
    Samuel: [],
    Lionel: ["img/lionel/1.jpeg", "img/lionel/2.jpeg"],
    Lucas: [],
    Emmanuel: ["img/emma/1.jpeg", "img/emma/2.jpeg", "img/emma/3.jpeg", "img/emma/4.jpeg", "img/emma/5.jpeg", "img/emma/6.jpeg", "img/emma/7.jpeg", "img/emma/8.jpeg", "img/emma/9.jpeg", "img/emma/10.jpeg", "img/emma/11.jpeg"],
    Eithan: ["img/eithan/1.jpeg", "img/eithan/2.jpeg", "img/eithan/3.jpeg", "img/eithan/4.jpeg", "img/eithan/5.jpeg", "img/eithan/6.jpeg", "img/eithan/7.jpeg", "img/eithan/8.jpeg"],
    Santino: ["img/santino/1.jpeg", "img/santino/2.jpeg", "img/santino/3.jpeg", "img/santino/4.jpeg", "img/santino/5.jpeg", "img/santino/6.jpeg", "img/santino/7.jpeg", "img/santino/8.jpeg", "img/santino/9.jpeg"],
    Thiago: ["img/thiago/1.jpeg", "img/thiago/2.jpeg", "img/thiago/3.jpeg", "img/thiago/4.jpeg", "img/thiago/5.jpeg", "img/thiago/6.jpeg", "img/thiago/7.jpeg", "img/thiago/8.jpeg", "img/thiago/9.jpeg", "img/thiago/10.jpeg", "img/thiago/11.jpeg"],
    GianLuca: ["img/gian/1.jpeg", "img/gian/2.jpeg", "img/gian/3.jpeg", "img/gian/4.jpeg"],
    Patricio: ["img/patricio/1.jpeg", "img/patricio/2.jpeg", "img/patricio/3.jpeg", "img/patricio/4.jpeg", "img/patricio/5.jpeg", "img/patricio/6.jpeg", "img/patricio/7.jpeg", "img/patricio/8.jpeg"],
    Geronimo: ["img/gero/1.jpeg", "img/gero/2.jpeg", "img/gero/3.jpeg", "img/gero/4.jpeg", "img/gero/5.jpeg", "img/gero/6.jpeg", "img/gero/7.jpeg", "img/gero/8.jpeg", "img/gero/9.jpeg", "img/gero/10.jpeg", "img/gero/11.jpeg", "img/gero/12.jpeg", "img/gero/13.jpeg", "img/gero/14.jpeg", "img/gero/15.jpeg", "img/gero/16.jpeg", "img/gero/17.jpeg", "img/gero/18.jpeg", "img/gero/19.jpeg"],
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
