const sr = ScrollReveal({
    origin: 'top',
    distance: '500px',
    duration: 2000,
    reset: true
});

sr.reveal('.container-post', { delay: 200 });
sr.reveal('.date', { delay: 400 }); // Corrigi a seleção do segundo elemento
sr.reveal('.title', { delay: 500 });
sr.reveal('.description', { delay: 600 });
