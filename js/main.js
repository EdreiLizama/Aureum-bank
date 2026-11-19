const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const toast=m=>{const t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2800)};
const modal=h=>{const m=document.createElement('div');m.className='modal';m.innerHTML='<div>'+h+'</div>';m.onclick=e=>{if(e.target===m)m.remove()};document.body.append(m);return m};
const page=document.body.dataset.page;
const nav=[['dashboard','Resumen'],['accounts','Cuentas'],['transfers','Transferencias'],['transactions','Movimientos'],['cards','Tarjetas'],['currency','Divisas'],['notifications','Notificaciones'],['security','Seguridad'],['profile','Perfil']];
const titles=Object.fromEntries(nav);
function shell(html){const un=DB.get('notes',[]).filter(n=>!n.r).length;
 document.body.innerHTML=`<div class="shell"><aside class="side"><div class="logo">AUREUM</div>${nav.map(([p,t])=>`<a class="${p==page?'on':''}" href="${p}.html">${t}</a>`).join('')}<a href="#" id="out">Cerrar sesión</a></aside><main><div class="top"><h1>${titles[page]}</h1><a class="btn alt" href="notifications.html">Avisos: ${un}</a></div><div id="v">${html}</div></main></div>`;
 $('#out').onclick=e=>{e.preventDefault();sessionStorage.removeItem('aur_session');location.href='login.html'}}
function line(cv,v){const d=devicePixelRatio||1,w=cv.clientWidth,h=220;cv.width=w*d;cv.height=h*d;const c=cv.getContext('2d');c.scale(d,d);
 const mn=Math.min(...v),mx=Math.max(...v),X=i=>20+i*(w-40)/(v.length-1||1),Y=y=>h-25-(y-mn)/((mx-mn)||1)*(h-50);
 const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#c9a24b66');g.addColorStop(1,'#c9a24b00');c.beginPath();v.forEach((y,i)=>i?c.lineTo(X(i),Y(y)):c.moveTo(X(i),Y(y)));
 c.strokeStyle='#0b1b3a';c.lineWidth=2.5;c.stroke();c.lineTo(X(v.length-1),h);c.lineTo(X(0),h);c.fillStyle=g;c.fill();v.forEach((y,i)=>{c.beginPath();c.arc(X(i),Y(y),3.5,0,7);c.fillStyle='#c9a24b';c.fill()})}
function bars(cv,l,v){const d=devicePixelRatio||1,w=cv.clientWidth,h=220;cv.width=w*d;cv.height=h*d;const c=cv.getContext('2d');c.scale(d,d);
 const mx=Math.max(...v,1),bw=(w-20)/v.length;c.font='11px system-ui';v.forEach((y,i)=>{const bh=y/mx*(h-50);c.fillStyle=i%2?'#c9a24b':'#14295a';c.fillRect(14+i*bw,h-25-bh,bw-12,bh);c.fillStyle='#6b7590';c.fillText(l[i],14+i*bw,h-8)})}
document.addEventListener('DOMContentLoaded',async()=>{
 const us=LS.get('aur_users',{});if(!us['demo@aureum.bank']){us['demo@aureum.bank']={name:'Cliente Demo',h:await sha('Demo1234'),phone:'+52 999 000 0000',city:'Mérida'};LS.set('aur_users',us)}
 if(!['login','register'].includes(page)){if(!U()){location.href='login.html';return}seed()}
 P[page]()});
