//El scroll
var secundario = document.getElementById("secundario").offsetHeight;
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if (scroll > secundario + 10) {
        document.getElementById("principal").classList.add("fixed-top");
    } else {
        document.getElementById("principal").classList.remove("fixed-top");
    }
});
//La API
fetch("https://sheet.best/api/sheets/2664c7c7-57e9-456c-bfb3-dd5bca1751cd")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    var portfolio = data;
 
    portfolio.forEach(function (trabajo) {
        if (trabajo.tipo.includes("tierra")) {
        especialidad = 'terrestre';
        } else {
        especialidad = 'maritimo';
        }
        document.getElementById("portfolio").innerHTML += 
            '<div class="col-sm-6 col-lg-4 col-xxl-3 ' + especialidad + '"><div class="card shadow-sm border-0"><img src="' +
            trabajo.image +
            '" class="card-img-top" alt="' +
            trabajo.title +
            '"><div class="card-body"><h5 class="card-title">' +
            trabajo.title +
            '</h5><p class="card-text">' +
            trabajo.text +
            "</p></div></div></div></article>";
        }); 

// filtros
$('#opciones').change(function(){
                valor = $("input[name='animal']:checked").val();
                if(valor == "tierr"){
                    $(".terrestre").fadeTo("slow",1);
                    $(".maritimo").fadeTo("slow",0.1);
                } else if(valor == "mar"){
                    $(".terrestre").fadeTo("slow",0.1);
                    $(".maritimo").fadeTo("slow",1);
                } else {
                    $(".terrestre").fadeTo("slow",1);
                    $(".maritimo").fadeTo("slow",1);
                }
            }); 

/*    
    portfolio.forEach(function (trabajo) {
        if (trabajo.tipo.includes("tierra")) {
        especialidad = ' data-especialidad="tierra" ';
        } else {
        especialidad = ' data-especialidad="mar" ';
        }
        document.getElementById("portfolio").innerHTML +=
            '<div class="col-sm-6 col-lg-4 col-xxl-3"'+
            especialidad
            +'><div class="card shadow-sm border-0"><img src="' +
            trabajo.image +
            '" class="card-img-top" alt="' +
            trabajo.title +
            '"><div class="card-body"><h5 class="card-title">' +
            trabajo.title +
            '</h5><p class="card-text">' +
            trabajo.text +
            "</p></div></div></div>";
        }); */
    })
.catch((err) => {
    console.log("Pucha, algo falló", err);
    document.getElementById("portfolio").innerHTML +=
    '<div class="error text-center fs-1"><p>Ups! Ocurrió un error :-(</p></div>';
});