function toggleCollapse(e){switch(e){case 1:document.getElementById("bio-paragraph").classList.toggle("active");break;case 2:document.getElementById("experience").classList.toggle("active");break;case 3:document.getElementById("community").classList.toggle("active");break;case 4:document.getElementById("examples").classList.toggle("active")}}function change(e,t){e.classList.toggle("change"),toggleCollapse(t)}