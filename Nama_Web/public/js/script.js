// let prevScrollpos = window.pageYOffset; window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//         document.getElementById("sticky").style.top = "50px";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//         document.getElementById("sticky").style.top = "0";
//     } prevScrollpos = currentScrollPos;
// }

document.addEventListener("DOMContentLoaded",()=>{
    const buttonNav=document.getElementById("buttonNav");
    const buttonSectionClose=document.getElementById("buttonSectionClose");
    const sectionFlyer=document.getElementById("sectionFlyer");
    
    const buttonClose=()=>{
        buttonSectionClose.addEventListener("click",()=>{
            sectionFlyer.parentNode.removeChild("sectionFlyer");
        });
    };
    buttonClose();
})