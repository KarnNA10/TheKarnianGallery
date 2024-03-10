function amp(imgDir, type, price, descr, descr2){
    const topCont = document.querySelector('.topCont')
    topCont.style.display = 'block'

    const imag = document.createElement('img')
    imag.src  = "static/img/"+imgDir // "static/img/prod/"+imgDir
    document.querySelector('.e1').appendChild(imag)
    imag.setAttribute("class","prodImgAmp")

    document.getElementById("type").innerHTML=type;
    document.getElementById("descrip").innerHTML=descr;
    if(price!==''){
        document.getElementById("prec").innerHTML=price;
    }
    if(descr2!==''){
        document.getElementById("descrip2").innerHTML=descr2;
    }
}

function cerrar() {
    // topCont.style.background = '#00ff00'
    const topCont = document.querySelector('.topCont');
    topCont.style.display = 'none'; 
    document.getElementById("type").innerHTML = '';
    document.getElementById("descrip").innerHTML = '';
    document.getElementById("descrip2").innerHTML = '';
    document.getElementById("prec").innerHTML = '';
    var imag = document.querySelector('.prodImgAmp')
    imag.remove()
}

function cambiarCss(a){
    const valor = a.value;
    const A = `static/styles/s${valor}.css`;
    document.querySelector('.liiink').setAttribute("href",A)
    if(valor==3){
        document.querySelector('.sss').remove()
    }
}

function loadComm(sectionId, dataArray){
    const articles = document.querySelectorAll(`#${sectionId} article`);

    articles.forEach((article, index) => {
        const data = dataArray[index];
            const [imgDir, type, price, descr] = data;
            const imgElement = article.querySelector('.prodImg');
            const figCaptionName = article.querySelector('figcaption:not(.price)');
            const figCaptionPrice = article.querySelector('.price');
            var precio=price;

            imgElement.src = `static/img/comm/${imgDir}`;

            figCaptionName.textContent = descr;
            if(price===''){
                figCaptionPrice.textContent = 'No disponible por el momento';
                var precio='No disponible por el momento';
            } else {
                figCaptionPrice.textContent = `$${price}`;
                var precio=`$${price}`;
            }
            article.querySelector('a').onclick = function() {
                const direct=`comm/${imgDir}`
                amp(direct, type, precio, descr, '');
            };

    });
}

function loadWorks(sectionId, dataArray){
    const articles = document.querySelectorAll(`#${sectionId} article`);

    articles.forEach((article, index) => {
        const data = dataArray[index];

        const [imgDir, type, descr, descr2] = data;
        const imgElement = article.querySelector('.prodImg');
        const figCaptionName = article.querySelector('figcaption');

        imgElement.src = `static/img/dib/${imgDir}`;

        figCaptionName.textContent = descr;
        article.querySelector('a').onclick = function() {
            const direct=`dib/${imgDir}`
            amp(direct, type, '', descr, descr2);
        };

    });
}