function prepareFrame(frame, parentElement) {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", `https://codepen.io/avramu98/embed/${frame}?default-tab=js&editable=true&theme-id=dark&edtiors=1111`);
    ifrm.style.width = "640px";
    ifrm.style.height = "400px";
    parentElement.appendChild(ifrm);
}