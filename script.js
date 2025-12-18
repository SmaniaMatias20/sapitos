const data = {
    Enzo: ["img/enzo/1.jpeg", "img/enzo/2.jpeg", "img/enzo/3.jpeg", "img/enzo/4.jpeg", "img/enzo/5.jpeg", "img/enzo/6.jpeg", "img/enzo/7.jpeg"],
    Samuel: [],
    Lionel: [],
    Emmanuel: [],
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
