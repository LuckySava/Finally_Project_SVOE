parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Q5MT":[function(require,module,exports) {
var e=150,t=225,c=310,n=document.querySelector("#tabs_land"),a=document.querySelector("#tabs_corp"),l=document.querySelector("#tabs_shop"),r=document.getElementsByClassName("add_service"),o=document.querySelector("#page_block"),s=document.getElementsByClassName("thumbs"),d=document.querySelectorAll(".fa-piggy-bank"),u=document.querySelectorAll("input"),i=document.querySelectorAll("input[type='checkbox']:not(.no)"),v=document.querySelectorAll("input[type='number']"),y=document.querySelectorAll(".thumbs"),h=document.querySelector("#total-value"),p=document.querySelector(".tasks"),m=document.querySelector(".tasks1"),f=document.querySelector(".tasks2"),k=document.querySelectorAll(".firlst_block"),g=document.querySelectorAll(".second_block"),L=document.querySelectorAll(".third_block"),q=document.querySelector("#profi_trip");console.log(k);for(var S=0;S<r.length;S++)r[S].classList.contains("page_land")?r[S].style.display="block":r[S].style.display="none";var b=150,E=225,_=310,A=function(){return d.forEach(function(e){return e.style.display="none"})};window.addEventListener("DOMContentLoaded",function(){n.addEventListener("click",function(){n.classList.add("active"),a.classList.remove("active"),l.classList.remove("active"),textTest=document.querySelector("#text-test"),A();for(var t=0;t<r.length;t++)r[t].classList.contains("page_land")?r[t].style.display="block":r[t].style.display="none";for(var c=0;c<u.length;c++)u[c].value="",u[c].checked&&(u[c].checked=!1);e=b,h.value=e}),a.addEventListener("click",function(){a.classList.add("active"),n.classList.remove("active"),l.classList.remove("active"),A();for(var t=0;t<r.length;t++)r[t].classList.contains("page_corp")?r[t].style.display="block":r[t].style.display="none";for(var c=0;c<u.length;c++)u[c].value="",u[c].checked&&(u[c].checked=!1);e=E,h.value=e}),l.addEventListener("click",function(){l.classList.add("active"),n.classList.remove("active"),a.classList.remove("active"),A();for(var t=0;t<r.length;t++)r[t].classList.contains("page_shop")?r[t].style.display="block":r[t].style.display="none";for(var c=0;c<u.length;c++)u[c].value="",u[c].checked&&(u[c].checked=!1);e=_,h.value=e});document.querySelectorAll(".fa-piggy-bank");y.forEach(function(e,t){e.addEventListener("change",function(){return e.value.length>=2?d[t].style.display="inline-block":d[t].style.display="none"})})});for(var x=function(t){i[t].addEventListener("change",function(){i[t].checked?(e+=+i[t].dataset.price,h.value=e):(e-=+i[t].dataset.price,h.value=e)})},C=0;C<i.length;C++)x(C);p.addEventListener("change",function(){for(var t=0;t<k.length;t++)p.checked?(k[t].checked="true",e+=+k[t].dataset.price,h.value=e):(k[t].checked="",e-=k[t].dataset.price,h.value=e)}),m.addEventListener("change",function(){for(var t=0;t<g.length;t++)m.checked?(g[t].checked="true",e+=+g[t].dataset.price,h.value=e):(g[t].checked="",e-=g[t].dataset.price,h.value=e)}),f.addEventListener("change",function(){for(var t=0;t<L.length;t++)f.checked?(L[t].checked="true",e+=+L[t].dataset.price,h.value=e):(L[t].checked="",e-=L[t].dataset.price,h.value=e)});var w=Array.from(v).map(function(t){t.addEventListener("input",function(){var t=e+B();h.value=t})});function B(){return Array.from(v).map(function(e){return+e.value*+e.dataset.price}).reduce(function(e,t){return e+t})}
},{}]},{},["Q5MT"], null)
//# sourceMappingURL=/section2.4416bfc0.map