import{S as l,i as c}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const d="44399697-8bf9b3cb5b10277b4ea62d601",p="https://pixabay.com/api/";async function u(n){const e=`${p}?key=${d}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const o=await fetch(e);if(!o.ok)throw new Error("Network response was not ok");return(await o.json()).hits}catch(o){throw console.error("Fetching images failed:",o),o}}const f=document.getElementById("gallery");let a;function m(n){f.innerHTML=n.map(e=>`
    <li>
      <a href="${e.largeImageURL}" data-lightbox="gallery">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <div class="labels">
          <p>Likes</p>
          <p>Views</p>
          <p>Comments</p>
          <p>Downloads</p>
        </div>
        <div class="values">
          <p>${e.likes}</p>
          <p>${e.views}</p>
          <p>${e.comments}</p>
          <p>${e.downloads}</p>
        </div>
      </div>
    </li>
  `).join(""),a?a.refresh():a=new l('[data-lightbox="gallery"]',{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function g(){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function y(){document.getElementById("loader").style.display="block"}function h(){document.getElementById("loader").style.display="none"}document.getElementById("search-form").addEventListener("submit",async n=>{n.preventDefault();const e=document.getElementById("search-input").value.trim();if(!e){iziToast.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}y(),document.getElementById("gallery").innerHTML="";try{const o=await u(e);o.length===0?g():m(o)}catch{iziToast.error({title:"Error",message:"Something went wrong while fetching images. Please try again later.",position:"topRight"})}finally{h()}});
//# sourceMappingURL=commonHelpers.js.map
