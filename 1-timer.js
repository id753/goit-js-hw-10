import"./assets/styles-DBGmBy95.js";import{f as y,i as g}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("[data-start]"),a=document.getElementById("datetime-picker"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),E=document.querySelector("[data-seconds]");let u=null,d=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t.getTime()<Date.now()?(g.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),s.disabled=!0):(u=t,s.disabled=!1)}};y(a,b);s.addEventListener("click",()=>{C(),s.disabled=!0,a.disabled=!0});function C(){d=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(d),i({days:0,hours:0,minutes:0,seconds:0}),a.disabled=!1;return}const o=r(t);i(o)},1e3)}function i({days:e,hours:t,minutes:o,seconds:c}){p.textContent=n(e),S.textContent=n(t),D.textContent=n(o),E.textContent=n(c)}function n(e){return String(e).padStart(2,"0")}function r(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=1-timer.js.map
