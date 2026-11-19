const U=()=>sessionStorage.getItem('aur_session')||'';
const LS={get:(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch{return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
const DB={get:(k,d)=>LS.get('aur_'+U()+'_'+k,d),set:(k,v)=>LS.set('aur_'+U()+'_'+k,v)};
const fmt=(n,c='USD')=>new Intl.NumberFormat('es-MX',{style:'currency',currency:c}).format(n);
const sha=async s=>{if(!(window.crypto&&crypto.subtle))return btoa(s);const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')};
const day=n=>new Date(Date.now()-n*864e5).toISOString();
function seed(){ if(DB.get('accounts'))return;
 DB.set('accounts',[{id:'a1',name:'Cuenta corriente',num:'4021889011220',bal:12480.55},{id:'a2',name:'Cuenta de ahorro',num:'4021773100450',bal:34200},{id:'a3',name:'Inversión Aureum',num:'4021550933180',bal:8900.2}]);
 DB.set('tx',[[27,'Nómina','Ingresos',3200],[25,'Renta','Vivienda',-950],[22,'Supermercado','Alimentos',-134.2],[19,'Freelance','Ingresos',640],[16,'Streaming','Ocio',-14.99],[13,'Restaurante','Alimentos',-62.4],[10,'Gasolina','Transporte',-48],[8,'Nómina','Ingresos',3200],[6,'Farmacia','Salud',-27.5],[3,'Compra en línea','Ocio',-89.9],[1,'Café','Alimentos',-6.5]].map((x,i)=>({id:i+1,date:day(x[0]),desc:x[1],cat:x[2],amt:x[3],acc:'a1'})));
 DB.set('notes',[{id:1,t:'Bienvenido a AUREUM BANK. Explora tu panel.',d:day(0),r:0},{id:2,t:'Activa la verificación en dos pasos en el Centro de seguridad.',d:day(0),r:0}]);
 DB.set('cards',[{id:1,name:'Aureum Signature',num:'5312 4480 9021 7734',exp:'09/29',cvv:'418',frozen:false}]);}
