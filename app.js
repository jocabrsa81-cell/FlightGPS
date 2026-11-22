'use strict';
// ---------- Cidades (nome, lat, lon, importância 1-3) ----------
const CITIES = [
["Lisboa",38.72,-9.14,1],["Porto",41.15,-8.61,1],["Faro",37.02,-7.93,2],["Funchal",32.65,-16.91,2],["Ponta Delgada",37.74,-25.67,2],["Coimbra",40.21,-8.43,3],["Braga",41.55,-8.42,3],["Lajes (Terceira)",38.76,-27.09,3],["Porto Santo",33.07,-16.34,3],
["Madrid",40.42,-3.70,1],["Barcelona",41.39,2.17,1],["Sevilha",37.39,-5.98,2],["Valência",39.47,-0.38,2],["Bilbau",43.26,-2.93,2],["Málaga",36.72,-4.42,2],["Santiago de Compostela",42.88,-8.54,3],["Saragoça",41.65,-0.89,3],["Palma de Maiorca",39.57,2.65,2],["Las Palmas",28.12,-15.43,2],["Santa Cruz de Tenerife",28.46,-16.25,2],["Salamanca",40.97,-5.66,3],["Badajoz",38.88,-6.97,3],["Vigo",42.24,-8.72,3],
["Luxemburgo",49.61,6.13,1],["Esch-sur-Alzette",49.50,5.98,3],["Metz",49.12,6.18,2],["Nancy",48.69,6.18,3],["Estrasburgo",48.57,7.75,2],["Paris",48.86,2.35,1],["Lyon",45.76,4.84,2],["Marselha",43.30,5.37,2],["Bordéus",44.84,-0.58,2],["Toulouse",43.60,1.44,2],["Nantes",47.22,-1.55,2],["Lille",50.63,3.06,2],["Nice",43.70,7.27,2],["Biarritz",43.48,-1.56,3],["Clermont-Ferrand",45.78,3.08,3],["Limoges",45.83,1.26,3],["Dijon",47.32,5.04,3],["Reims",49.26,4.03,3],["Rennes",48.11,-1.68,3],["Montpellier",43.61,3.88,3],["Perpignan",42.70,2.90,3],["Brest",48.39,-4.49,3],["Tours",47.39,0.69,3],["Ajaccio",41.92,8.74,3],
["Bruxelas",50.85,4.35,1],["Liège",50.63,5.57,3],["Antuérpia",51.22,4.40,3],["Amesterdão",52.37,4.90,1],["Roterdão",51.92,4.48,2],["Colónia",50.94,6.96,2],["Frankfurt",50.11,8.68,1],["Saarbrücken",49.24,7.00,3],["Trier",49.75,6.64,3],["Berlim",52.52,13.40,1],["Munique",48.14,11.58,1],["Hamburgo",53.55,9.99,2],["Estugarda",48.78,9.18,2],["Düsseldorf",51.23,6.78,2],["Nuremberga",49.45,11.08,3],["Leipzig",51.34,12.37,3],["Hanôver",52.37,9.73,3],["Dresden",51.05,13.74,3],["Bremen",53.08,8.80,3],
["Londres",51.51,-0.13,1],["Manchester",53.48,-2.24,2],["Birmingham",52.49,-1.89,3],["Edimburgo",55.95,-3.19,2],["Glasgow",55.86,-4.25,3],["Dublin",53.35,-6.26,1],["Cork",51.90,-8.47,3],["Belfast",54.60,-5.93,3],
["Zurique",47.38,8.54,2],["Genebra",46.20,6.14,2],["Berna",46.95,7.45,3],["Basileia",47.56,7.59,3],["Viena",48.21,16.37,1],["Innsbruck",47.27,11.39,3],["Salzburgo",47.81,13.04,3],
["Roma",41.90,12.50,1],["Milão",45.46,9.19,1],["Nápoles",40.85,14.27,2],["Veneza",45.44,12.32,2],["Florença",43.77,11.26,2],["Turim",45.07,7.69,2],["Palermo",38.12,13.36,2],["Bolonha",44.49,11.34,3],["Bari",41.12,16.87,3],["Cagliari",39.22,9.12,3],["Catânia",37.50,15.09,3],["Génova",44.41,8.93,3],["Malta (Valeta)",35.90,14.51,2],
["Copenhaga",55.68,12.57,1],["Oslo",59.91,10.75,1],["Estocolmo",59.33,18.07,1],["Helsínquia",60.17,24.94,1],["Gotemburgo",57.71,11.97,3],["Bergen",60.39,5.32,3],["Reiquiavique",64.15,-21.94,1],["Tromsø",69.65,18.96,3],
["Varsóvia",52.23,21.01,1],["Cracóvia",50.06,19.94,2],["Gdansk",54.35,18.65,3],["Praga",50.08,14.44,1],["Bratislava",48.15,17.11,2],["Budapeste",47.50,19.04,1],["Liubliana",46.06,14.51,2],["Zagrebe",45.81,15.98,2],["Split",43.51,16.44,3],["Dubrovnik",42.65,18.09,3],["Belgrado",44.79,20.45,1],["Sarajevo",43.86,18.41,2],["Podgorica",42.44,19.26,3],["Tirana",41.33,19.82,2],["Escópia",41.99,21.43,3],["Sófia",42.70,23.32,1],["Bucareste",44.43,26.10,1],["Cluj-Napoca",46.77,23.59,3],["Chisinau",47.01,28.86,3],["Kiev",50.45,30.52,1],["Lviv",49.84,24.03,3],["Odessa",46.48,30.73,3],["Minsk",53.90,27.57,2],["Vilnius",54.69,25.28,2],["Riga",56.95,24.11,2],["Talin",59.44,24.75,2],
["Atenas",37.98,23.73,1],["Salónica",40.64,22.94,3],["Heraclião (Creta)",35.34,25.13,3],["Rodes",36.43,28.22,3],["Nicósia",35.17,33.36,2],["Istambul",41.01,28.98,1],["Ancara",39.93,32.86,2],["Antália",36.90,30.70,3],["Esmirna",38.42,27.14,3],
["Moscovo",55.76,37.62,1],["São Petersburgo",59.93,30.34,2],["Tbilisi",41.72,44.79,2],["Erevan",40.18,44.51,2],["Baku",40.41,49.87,2],
["Cairo",30.04,31.24,1],["Casablanca",33.57,-7.59,1],["Marraquexe",31.63,-8.01,2],["Rabat",34.02,-6.84,3],["Tânger",35.77,-5.80,3],["Agadir",30.43,-9.60,3],["Argel",36.75,3.06,1],["Tunes",36.81,10.18,2],["Trípoli",32.89,13.19,2],["Dakar",14.72,-17.47,1],["Praia",14.93,-23.51,2],["Sal (Cabo Verde)",16.74,-22.94,3],["Mindelo",16.89,-24.98,3],["Bissau",11.86,-15.60,2],["São Tomé",0.34,6.73,2],["Luanda",-8.84,13.23,1],["Maputo",-25.97,32.57,1],["Beira",-19.84,34.84,3],["Lagos",6.52,3.38,1],["Abuja",9.08,7.40,3],["Acra",5.60,-0.19,2],["Abidjan",5.36,-4.01,2],["Bamako",12.64,-8.00,3],["Nouakchott",18.08,-15.98,3],["Kinshasa",-4.44,15.27,1],["Nairobi",-1.29,36.82,1],["Adis Abeba",9.03,38.74,1],["Cartum",15.50,32.56,2],["Dar es Salaam",-6.79,39.21,2],["Joanesburgo",-26.20,28.05,1],["Cidade do Cabo",-33.92,18.42,1],["Durban",-29.86,31.02,3],["Windhoek",-22.56,17.08,3],["Antananarivo",-18.88,47.51,3],["Maurícia",-20.16,57.50,3],
["Dubai",25.20,55.27,1],["Abu Dhabi",24.45,54.38,2],["Doha",25.29,51.53,1],["Riade",24.71,46.68,1],["Jeddah",21.49,39.19,2],["Kuwait",29.38,47.99,2],["Mascate",23.59,58.41,2],["Teerão",35.69,51.39,1],["Bagdade",33.31,44.37,2],["Amã",31.95,35.93,2],["Telavive",32.09,34.78,1],["Beirute",33.89,35.50,2],["Damasco",33.51,36.29,3],
["Deli",28.61,77.21,1],["Bombaim",19.08,72.88,1],["Bangalore",12.97,77.59,2],["Calcutá",22.57,88.36,2],["Chennai",13.08,80.27,2],["Goa",15.49,73.83,3],["Carachi",24.86,67.01,1],["Islamabade",33.68,73.05,2],["Cabul",34.56,69.21,3],["Daca",23.81,90.41,2],["Catmandu",27.72,85.32,2],["Colombo",6.93,79.86,2],["Malé",4.18,73.51,3],["Tashkent",41.30,69.24,2],["Almaty",43.24,76.95,2],["Astana",51.17,71.43,3],
["Pequim",39.90,116.41,1],["Xangai",31.23,121.47,1],["Hong Kong",22.32,114.17,1],["Macau",22.20,113.54,2],["Cantão",23.13,113.26,2],["Chengdu",30.57,104.07,2],["Urumqi",43.83,87.62,3],["Taipé",25.03,121.57,1],["Seul",37.57,126.98,1],["Tóquio",35.68,139.69,1],["Osaca",34.69,135.50,2],["Sapporo",43.06,141.35,3],["Ulan Bator",47.89,106.91,3],["Banguecoque",13.76,100.50,1],["Phuket",7.88,98.39,3],["Hanói",21.03,105.85,2],["Ho Chi Minh",10.82,106.63,2],["Singapura",1.35,103.82,1],["Kuala Lumpur",3.14,101.69,1],["Jacarta",-6.21,106.85,1],["Bali",-8.65,115.22,2],["Manila",14.60,120.98,1],["Díli",-8.56,125.57,3],
["Sydney",-33.87,151.21,1],["Melbourne",-37.81,144.96,1],["Brisbane",-27.47,153.03,2],["Perth",-31.95,115.86,1],["Darwin",-12.46,130.84,3],["Auckland",-36.85,174.76,1],["Wellington",-41.29,174.78,3],["Nadi (Fiji)",-17.80,177.42,3],["Honolulu",21.31,-157.86,1],["Taiti",-17.54,-149.57,3],
["Nova Iorque",40.71,-74.01,1],["Boston",42.36,-71.06,2],["Washington",38.91,-77.04,1],["Filadélfia",39.95,-75.17,3],["Miami",25.76,-80.19,1],["Orlando",28.54,-81.38,2],["Atlanta",33.75,-84.39,2],["Chicago",41.88,-87.63,1],["Detroit",42.33,-83.05,3],["Dallas",32.78,-96.80,2],["Houston",29.76,-95.37,2],["Denver",39.74,-104.99,2],["Phoenix",33.45,-112.07,3],["Las Vegas",36.17,-115.14,2],["Los Angeles",34.05,-118.24,1],["São Francisco",37.77,-122.42,1],["Seattle",47.61,-122.33,2],["Anchorage",61.22,-149.90,3],["Newark",40.74,-74.17,3],["Fall River",41.70,-71.16,3],
["Toronto",43.65,-79.38,1],["Montreal",45.50,-73.57,1],["Vancouver",49.28,-123.12,1],["Calgary",51.05,-114.07,3],["Halifax",44.65,-63.57,3],["St. John's",47.56,-52.71,3],["Nuuk",64.18,-51.72,3],
["Cidade do México",19.43,-99.13,1],["Cancún",21.16,-86.85,2],["Havana",23.11,-82.37,1],["Punta Cana",18.58,-68.40,2],["São Domingos",18.49,-69.93,3],["São João (Porto Rico)",18.47,-66.11,3],["Panamá",8.98,-79.52,1],["São José (Costa Rica)",9.93,-84.08,3],
["Bogotá",4.71,-74.07,1],["Caracas",10.49,-66.88,1],["Lima",-12.05,-77.04,1],["Quito",-0.18,-78.47,2],["Santiago do Chile",-33.45,-70.67,1],["Buenos Aires",-34.60,-58.38,1],["Montevideu",-34.90,-56.16,2],["Assunção",-25.26,-57.58,3],["La Paz",-16.50,-68.15,3],
["São Paulo",-23.55,-46.63,1],["Rio de Janeiro",-22.91,-43.17,1],["Brasília",-15.79,-47.88,1],["Salvador",-12.97,-38.50,2],["Recife",-8.05,-34.88,2],["Fortaleza",-3.72,-38.54,2],["Natal",-5.79,-35.21,3],["Belém",-1.46,-48.49,3],["Manaus",-3.12,-60.02,2],["Belo Horizonte",-19.92,-43.94,2],["Porto Alegre",-30.03,-51.23,2],["Curitiba",-25.43,-49.27,3],["Florianópolis",-27.60,-48.55,3]
];

// ---------- utilidades ----------
const $ = id => document.getElementById(id);
const D2R = Math.PI/180, R_E = 6371008.8, EQ = 40075016.7;
const mx = lon => (lon+180)/360;
const my = lat => { lat=Math.max(-85.05,Math.min(85.05,lat)); const s=Math.sin(lat*D2R); return 0.5-Math.log((1+s)/(1-s))/(4*Math.PI); };
const unmx = x => x*360-180;
const unmy = y => Math.atan(Math.sinh(Math.PI*(1-2*y)))/D2R;
function hav(a,b,c,d){const p1=a*D2R,p2=c*D2R,dp=(c-a)*D2R,dl=(d-b)*D2R;const h=Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2;return 2*R_E*Math.asin(Math.min(1,Math.sqrt(h)));}
function brg(a,b,c,d){const p1=a*D2R,p2=c*D2R,dl=(d-b)*D2R;const y=Math.sin(dl)*Math.cos(p2),x=Math.cos(p1)*Math.sin(p2)-Math.sin(p1)*Math.cos(p2)*Math.cos(dl);return (Math.atan2(y,x)/D2R+360)%360;}
const PTS=['N','NE','E','SE','S','SO','O','NO'];
const card = b => PTS[Math.round(b/45)%8];
function gc(a,b,c,d,n){ // pontos da rota ortodrómica
  const p1=a*D2R,l1=b*D2R,p2=c*D2R,l2=d*D2R;
  const del=hav(a,b,c,d)/R_E; if(del<1e-9) return [[a,b]];
  const out=[];
  for(let i=0;i<=n;i++){const f=i/n,A=Math.sin((1-f)*del)/Math.sin(del),B=Math.sin(f*del)/Math.sin(del);
    const x=A*Math.cos(p1)*Math.cos(l1)+B*Math.cos(p2)*Math.cos(l2),y=A*Math.cos(p1)*Math.sin(l1)+B*Math.cos(p2)*Math.sin(l2),z=A*Math.sin(p1)+B*Math.sin(p2);
    out.push([Math.atan2(z,Math.hypot(x,y))/D2R,Math.atan2(y,x)/D2R]);}
  return out;
}
const store = {
  get(k,d){try{const v=localStorage.getItem('voo_'+k);return v==null?d:JSON.parse(v);}catch(e){return d;}},
  set(k,v){try{localStorage.setItem('voo_'+k,JSON.stringify(v));}catch(e){}}
};
function fmtDur(s){const h=Math.floor(s/3600),m=Math.round((s%3600)/60);return h?`${h} h ${String(m).padStart(2,'0')} min`:`${m} min`;}
function fmtCoord(v,p,n){const a=Math.abs(v),d=Math.floor(a),m=(a-d)*60;return `${d}°${m.toFixed(1).padStart(4,'0')}′${v>=0?p:n}`;}

// ---------- estado ----------
let units = store.get('units','metric'); // metric | aviation
let view = store.get('view',{x:mx(6.13),y:my(49.6),s:4000});
let follow = true;
let fix = null;            // última posição
let track = store.get('track',[]);
let dest = store.get('dest',null);
let countries = [];
let curCountry = null;
let demo = null, demoTrack = [];
let watchId = null, firstWait = Date.now();

// ---------- canvas ----------
const cv=$('map'), ctx=cv.getContext('2d');
let W=0,H=0,DPR=1,dirty=true;
function resize(){DPR=Math.min(window.devicePixelRatio||1,2.5);W=innerWidth;H=innerHeight;cv.width=W*DPR;cv.height=H*DPR;dirty=true;}
addEventListener('resize',resize);resize();
const minS=()=>Math.max(W,H)*0.9, MAXS=600000;
function clampView(){view.s=Math.max(minS(),Math.min(MAXS,view.s));view.x=((view.x%1)+1)%1;view.y=Math.max(0,Math.min(1,view.y));}

// ---------- mapa (TopoJSON) ----------
function loadWorld(t){
  const [sx,sy]=t.transform.scale,[tx,ty]=t.transform.translate;
  const arcs=t.arcs.map(a=>{let x=0,y=0;return a.map(p=>{x+=p[0];y+=p[1];return [x*sx+tx,y*sy+ty];});});
  const ring=idx=>{const o=[];idx.forEach((i,k)=>{let a=i<0?arcs[~i].slice().reverse():arcs[i];if(k)a=a.slice(1);for(const p of a)o.push(p);});return o;};
  for(const g of t.objects.countries.geometries){
    const polys=g.type==='Polygon'?[g.arcs]:g.type==='MultiPolygon'?g.arcs:[];
    const c={name:(g.properties&&g.properties.name)||'',rings:[],bb:[9,9,-9,-9]};
    for(const p of polys)for(const r of p){
      const ll=ring(r),f=new Float32Array(ll.length*2);
      let px=null;ll.forEach((q,i)=>{let x=mx(q[0]);const y=my(q[1]);if(px!=null){while(x-px>0.5)x-=1;while(x-px<-0.5)x+=1;}px=x;f[2*i]=x;f[2*i+1]=y;
        if(x<c.bb[0])c.bb[0]=x;if(y<c.bb[1])c.bb[1]=y;if(x>c.bb[2])c.bb[2]=x;if(y>c.bb[3])c.bb[3]=y;});
      c.rings.push(f);
    }
    countries.push(c);
  }
  dirty=true; if(fix){updateCountry();render();}
}
fetch('world.json').then(r=>r.json()).then(loadWorld).catch(e=>{$('status').textContent='Erro a carregar o mapa — abre a app uma vez com internet.';});

function pip(c,x,y){
  if(x<c.bb[0]||x>c.bb[2]||y<c.bb[1]||y>c.bb[3])return false;
  let ins=false;
  for(const f of c.rings){const n=f.length/2;for(let i=0,j=n-1;i<n;j=i++){const xi=f[2*i],yi=f[2*i+1],xj=f[2*j],yj=f[2*j+1];
    if(((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))ins=!ins;}}
  return ins;
}
function updateCountry(){const x=mx(fix.lon),y=my(fix.lat);curCountry=null;for(const c of countries)if(pip(c,x,y)||pip(c,x+1,y)||pip(c,x-1,y)){curCountry=c;break;}}

// ---------- desenho ----------
const sxp=(x,k)=>(x+k-view.x)*view.s+W/2, syp=y=>(y-view.y)*view.s+H/2;
function offsets(){const o=[];for(let k=-1;k<=1;k++){const l=sxp(-0.1,k),r=sxp(1.1,k);if(r>0&&l<W)o.push(k);}return o;}
function pathCountry(c,k){
  const l=sxp(c.bb[0],k),r=sxp(c.bb[2],k),t=syp(c.bb[1]),b=syp(c.bb[3]);
  if(r<0||l>W||b<0||t>H||(r-l<0.6&&b-t<0.6))return false;
  for(const f of c.rings){
    const n=f.length/2;let lx=sxp(f[0],k),ly=syp(f[1]);ctx.moveTo(lx,ly);
    for(let i=1;i<n;i++){const x=sxp(f[2*i],k),y=syp(f[2*i+1]);if(Math.abs(x-lx)+Math.abs(y-ly)>0.8||i===n-1){ctx.lineTo(x,y);lx=x;ly=y;}}
    ctx.closePath();
  }
  return true;
}
function draw(){
  dirty=false;
  ctx.setTransform(DPR,0,0,DPR,0,0);
  ctx.fillStyle='#0a2a4a';ctx.fillRect(0,0,W,H);
  const offs=offsets();
  // graticula
  const step=view.s<3000?30:view.s<15000?10:view.s<60000?5:1;
  ctx.strokeStyle='rgba(120,170,220,.13)';ctx.lineWidth=1;ctx.beginPath();
  for(const k of offs){for(let lon=-180;lon<=180;lon+=step){const x=sxp(mx(lon),k);if(x>=-1&&x<=W+1){ctx.moveTo(x,0);ctx.lineTo(x,H);}}}
  for(let lat=-80;lat<=80;lat+=step){const y=syp(my(lat));if(y>=0&&y<=H){ctx.moveTo(0,y);ctx.lineTo(W,y);}}
  ctx.stroke();
  // terra
  ctx.beginPath();for(const k of offs)for(const c of countries)pathCountry(c,k);
  ctx.fillStyle='#24384d';ctx.fill('evenodd');
  if(curCountry){ctx.beginPath();for(const k of offs)pathCountry(curCountry,k);ctx.fillStyle='#31506e';ctx.fill('evenodd');}
  ctx.beginPath();for(const k of offs)for(const c of countries)pathCountry(c,k);
  ctx.strokeStyle='rgba(200,220,240,.45)';ctx.lineWidth=view.s>20000?1.2:0.7;ctx.stroke();
  // nomes de países
  if(view.s>2500){ctx.font='600 11px system-ui,sans-serif';ctx.fillStyle='rgba(190,210,230,.55)';ctx.textAlign='center';
    for(const k of offs)for(const c of countries){const w=(c.bb[2]-c.bb[0])*view.s;if(w<90||w>W*3)continue;
      const x=sxp((c.bb[0]+c.bb[2])/2,k),y=syp((c.bb[1]+c.bb[3])/2);if(x>0&&x<W&&y>0&&y<H)ctx.fillText(c.name.toUpperCase(),x,y);}}
  // rota até destino
  if(dest){const from=fix?[fix.lat,fix.lon]:null;
    if(from){const pts=gc(from[0],from[1],dest.lat,dest.lon,128);polyline(pts,offs,'rgba(255,176,32,.85)',2,[8,6]);}
    for(const k of offs){const x=sxp(mx(dest.lon),k),y=syp(my(dest.lat));ctx.fillStyle='#ffb020';ctx.beginPath();ctx.arc(x,y,6,0,7);ctx.fill();ctx.strokeStyle='#08182b';ctx.lineWidth=2;ctx.stroke();}}
  // trajeto
  const tr=demo?demoTrack:track;
  if(tr.length>1)polyline(tr.map(p=>[p[0],p[1]]),offs,'#ff6b3d',3,[]);
  // cidades
  drawCities(offs);
  // avião
  if(fix){for(const k of offs)drawPlane(sxp(mx(fix.lon),k),syp(my(fix.lat)),fix.hdg);}
  // escala
  drawScale();
}
function polyline(pts,offs,col,w,dash){
  ctx.strokeStyle=col;ctx.lineWidth=w;ctx.setLineDash(dash);ctx.lineJoin='round';
  for(const k of offs){ctx.beginPath();let px=null,ux=0;
    for(const [la,lo] of pts){let x=mx(lo);if(px!=null){while(x-px>0.5)x-=1;while(x-px<-0.5)x+=1;}
      const X=sxp(x,k),Y=syp(my(la));px==null?ctx.moveTo(X,Y):ctx.lineTo(X,Y);px=x;}
    ctx.stroke();}
  ctx.setLineDash([]);
}
function drawCities(offs){
  const maxRank=view.s<2500?0:view.s<7000?1:view.s<20000?2:3; if(!maxRank)return;
  ctx.font='12px system-ui,sans-serif';ctx.textAlign='left';const boxes=[];
  for(let r=1;r<=maxRank;r++)for(const c of CITIES){if(c[3]!==r)continue;
    for(const k of offs){const x=sxp(mx(c[2]),k),y=syp(my(c[1]));if(x<-50||x>W+50||y<-20||y>H+20)continue;
      const tw=ctx.measureText(c[0]).width,b=[x-4,y-9,x+tw+10,y+7];
      if(boxes.some(o=>b[0]<o[2]&&b[2]>o[0]&&b[1]<o[3]&&b[3]>o[1]))continue;boxes.push(b);
      ctx.fillStyle=r===1?'#fff':'#cfe0f2';ctx.beginPath();ctx.arc(x,y,r===1?3.2:2.4,0,7);ctx.fill();
      ctx.lineWidth=3;ctx.strokeStyle='rgba(8,24,43,.85)';ctx.strokeText(c[0],x+6,y+4);ctx.fillText(c[0],x+6,y+4);}}
}
function drawPlane(x,y,h){
  if(fix.acc){const rpx=fix.acc/(EQ*Math.cos(fix.lat*D2R))*view.s;if(rpx>12){ctx.fillStyle='rgba(61,220,132,.12)';ctx.strokeStyle='rgba(61,220,132,.5)';ctx.lineWidth=1;ctx.beginPath();ctx.arc(x,y,rpx,0,7);ctx.fill();ctx.stroke();}}
  ctx.save();ctx.translate(x,y);ctx.rotate(((h??0))*D2R);
  const s=1.15;ctx.scale(s,s);
  ctx.beginPath();
  ctx.moveTo(0,-16);ctx.lineTo(2.2,-11);ctx.lineTo(2.2,-4);ctx.lineTo(15,3);ctx.lineTo(15,6);ctx.lineTo(2.2,2.5);ctx.lineTo(1.6,10);ctx.lineTo(6,13.5);ctx.lineTo(6,15.5);ctx.lineTo(0,14);
  ctx.lineTo(-6,15.5);ctx.lineTo(-6,13.5);ctx.lineTo(-1.6,10);ctx.lineTo(-2.2,2.5);ctx.lineTo(-15,6);ctx.lineTo(-15,3);ctx.lineTo(-2.2,-4);ctx.lineTo(-2.2,-11);ctx.closePath();
  ctx.fillStyle=h==null?'#9fb3c8':'#ffb020';ctx.strokeStyle='#08182b';ctx.lineWidth=1.6;ctx.fill();ctx.stroke();
  ctx.restore();
}
function drawScale(){
  const lat=unmy(view.y),mpp=EQ*Math.cos(lat*D2R)/view.s;const target=mpp*110;
  const nice=[1,2,5].flatMap(n=>[1e2,1e3,1e4,1e5,1e6].map(p=>n*p)).sort((a,b)=>a-b);
  let m=nice[0];for(const v of nice)if(v<=target)m=v;
  const px=m/mpp,x=14,y=H-$('panel').offsetHeight-16;
  ctx.strokeStyle='#e8f1fb';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y-5);ctx.lineTo(x,y);ctx.lineTo(x+px,y);ctx.lineTo(x+px,y-5);ctx.stroke();
  ctx.fillStyle='#e8f1fb';ctx.font='11px system-ui';ctx.textAlign='left';ctx.fillText(m>=1000?(m/1000)+' km':m+' m',x+4,y-6);
}
(function loop(){if(dirty)draw();requestAnimationFrame(loop);})();

// ---------- interação ----------
const ptrs=new Map();let lastTap=0,saveT=0;
function setFollow(v){follow=v;$('bFollow').classList.toggle('on',v);if(v&&fix)center();}
function center(){view.x=mx(fix.lon);view.y=my(fix.lat);clampView();dirty=true;}
function zoomAt(f,px,py){const wx=view.x+(px-W/2)/view.s,wy=view.y+(py-H/2)/view.s;view.s*=f;clampView();
  if(!follow){view.x=wx-(px-W/2)/view.s;view.y=wy-(py-H/2)/view.s;}clampView();dirty=true;saveView();}
function saveView(){clearTimeout(saveT);saveT=setTimeout(()=>store.set('view',view),800);}
cv.addEventListener('pointerdown',e=>{cv.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(ptrs.size===1){const now=Date.now();if(now-lastTap<300)zoomAt(2,e.clientX,e.clientY);lastTap=now;}});
cv.addEventListener('pointermove',e=>{const p=ptrs.get(e.pointerId);if(!p)return;
  if(ptrs.size===1){const dx=e.clientX-p.x,dy=e.clientY-p.y;if(Math.abs(dx)+Math.abs(dy)>2&&follow)setFollow(false);
    if(!follow){view.x-=dx/view.s;view.y-=dy/view.s;clampView();dirty=true;saveView();}}
  else if(ptrs.size===2){const [a,b]=[...ptrs.values()];const d0=Math.hypot(a.x-b.x,a.y-b.y);
    const o=[...ptrs.entries()].find(([id])=>id!==e.pointerId)[1];const d1=Math.hypot(e.clientX-o.x,e.clientY-o.y);
    if(d0>10)zoomAt(d1/d0,(e.clientX+o.x)/2,(e.clientY+o.y)/2);}
  p.x=e.clientX;p.y=e.clientY;});
const up=e=>ptrs.delete(e.pointerId);
cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
cv.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.25:0.8,e.clientX,e.clientY);},{passive:false});
$('bIn').onclick=()=>zoomAt(2,W/2,H/2);
$('bOut').onclick=()=>zoomAt(0.5,W/2,H/2);
$('bFollow').onclick=()=>{setFollow(true);if(!fix)$('status').textContent='Ainda sem posição GPS…';};

// ---------- GPS ----------
function onPos(p){
  const c=p.coords,t=p.timestamp||Date.now();
  let spd=c.speed,hdg=(c.heading!=null&&!isNaN(c.heading))?c.heading:null;
  if(fix){const d=hav(fix.lat,fix.lon,c.latitude,c.longitude),dt=(t-fix.t)/1000;
    if((spd==null||isNaN(spd))&&dt>0)spd=d/dt;
    if(hdg==null)hdg=d>30?brg(fix.lat,fix.lon,c.latitude,c.longitude):fix.hdg;}
  fix={lat:c.latitude,lon:c.longitude,alt:c.altitude,acc:c.accuracy,spd:(spd==null||isNaN(spd))?null:spd,hdg,t};
  // gravar trajeto (a cada 15 s ou 1 km)
  const last=track[track.length-1];
  if(demo){demoTrack.push([fix.lat,fix.lon,t]);}
  else if((!last||t-last[2]>15000||hav(last[0],last[1],fix.lat,fix.lon)>1000)){
    if(c.accuracy==null||c.accuracy<500){track.push([+fix.lat.toFixed(5),+fix.lon.toFixed(5),t,fix.alt==null?null:Math.round(fix.alt)]);
      if(track.length>8000)track=track.filter((_,i)=>i%2===0);store.set('track',track);}}
  updateCountry();
  if(follow)center();
  setStatus('ok',(demo?'DEMO · ':'')+'GPS ativo · '+new Date(t).toLocaleTimeString('pt-PT',{hour:'2-digit',minute:'2-digit',second:'2-digit'}));
  render();dirty=true;
}
function onErr(e){
  if(e.code===1)setStatus('bad','Sem permissão de localização. Ativa-a nas definições do browser.');
  else setStatus('wait','À procura de sinal GPS… encosta o telemóvel à janela.');
}
function setStatus(cls,txt){$('dot').className=cls;$('status').textContent=txt;}
function startGPS(){
  if(!('geolocation' in navigator)){setStatus('bad','Este browser não tem GPS.');return;}
  setStatus('wait','À procura de sinal GPS… (sem internet pode demorar alguns minutos)');
  watchId=navigator.geolocation.watchPosition(p=>{if(!demo)onPos(p);},e=>{if(!demo)onErr(e);},{enableHighAccuracy:true,maximumAge:0});
}
setInterval(()=>{ // aviso se o sinal se perder
  if(demo)return;
  if(!fix){const m=Math.floor((Date.now()-firstWait)/60000);if(m>=1)setStatus('wait',`À procura de sinal GPS… ${m} min. Encosta o telemóvel à janela.`);}
  else if(Date.now()-fix.t>30000)setStatus('wait','Sinal GPS perdido há '+fmtDur((Date.now()-fix.t)/1000)+' — última posição mostrada.');
},5000);

// ---------- painel ----------
function render(){
  if(!fix)return;
  const av=units==='aviation';
  if(fix.spd!=null){const kmh=fix.spd*3.6,kt=fix.spd*1.94384;$('vSpd').textContent=av?Math.round(kt)+' kt':Math.round(kmh)+' km/h';$('vSpd2').textContent=av?Math.round(kmh)+' km/h':Math.round(kt)+' nós';}
  else{$('vSpd').textContent='–';$('vSpd2').textContent='';}
  if(fix.alt!=null){const ft=fix.alt*3.28084;$('vAlt').textContent=av?(Math.round(ft/10)*10).toLocaleString('pt-PT')+' ft':Math.round(fix.alt).toLocaleString('pt-PT')+' m';$('vAlt2').textContent=av?Math.round(fix.alt)+' m':(ft>=1000?'FL'+String(Math.round(ft/100)).padStart(3,'0'):Math.round(ft)+' ft');}
  else{$('vAlt').textContent='–';$('vAlt2').textContent='';}
  if(fix.hdg!=null){$('vHdg').textContent=Math.round(fix.hdg)+'°';$('vHdg2').textContent=card(fix.hdg);}
  $('vPos').textContent=fmtCoord(fix.lat,'N','S')+' '+fmtCoord(fix.lon,'E','O');
  $('vAcc').textContent=fix.acc!=null?'±'+(fix.acc<1000?Math.round(fix.acc)+' m':(fix.acc/1000).toFixed(1)+' km'):'–';
  // onde estou
  let best=null,bd=1e12;for(const c of CITIES){const d=hav(fix.lat,fix.lon,c[1],c[2]);if(d<bd){bd=d;best=c;}}
  const over=curCountry?curCountry.name:'Sobre o mar';
  let near='';if(best){near=bd<8000?`Junto a ${best[0]}`:`${Math.round(bd/1000)} km a ${card(brg(best[1],best[2],fix.lat,fix.lon))} de ${best[0]}`;}
  $('where').innerHTML=`${esc(over)}<small>${esc(near)}</small>`;
  // destino
  const dr=$('destrow');
  if(dest){const d=hav(fix.lat,fix.lon,dest.lat,dest.lon),km=d/1000;let eta='';
    if(fix.spd!=null&&fix.spd>40){const s=d/fix.spd;const at=new Date(Date.now()+s*1000);eta=` · chegada ~<b>${at.toLocaleTimeString('pt-PT',{hour:'2-digit',minute:'2-digit'})}</b> (em ${fmtDur(s)})`;}
    const dist=av?Math.round(d/1852)+' NM':(km<10?km.toFixed(1):Math.round(km))+' km';
    dr.style.display='block';dr.innerHTML=`⚑ ${esc(dest.name)}: <b>${dist}</b>${eta}`;}
  else dr.style.display='none';
}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

// ---------- overlays ----------
function openOv(id){document.querySelectorAll('.ov').forEach(o=>o.classList.remove('show'));$(id).classList.add('show');}
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('.ov').classList.remove('show'));
const norm=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
function fillList(){
  const q=norm($('q').value.trim());
  const list=CITIES.filter(c=>!q||norm(c[0]).includes(q)).sort((a,b)=>q?0:(a[3]-b[3])||a[0].localeCompare(b[0],'pt')).slice(0,80);
  $('list').innerHTML=list.map(c=>{let extra='';if(fix)extra=` <small>· ${Math.round(hav(fix.lat,fix.lon,c[1],c[2])/1000)} km</small>`;
    return `<div data-n="${esc(c[0])}">${esc(c[0])}${extra}</div>`;}).join('')||'<div><small>Nenhuma cidade encontrada. Podes mover o mapa e usar o centro.</small></div>';
}
$('list').onclick=e=>{const d=e.target.closest('[data-n]');if(!d)return;const c=CITIES.find(c=>c[0]===d.dataset.n);setDest({name:c[0],lat:c[1],lon:c[2]});};
function setDest(d){dest=d;store.set('dest',d);$('ovDest').classList.remove('show');render();dirty=true;}
$('q').oninput=fillList;
$('bDest').onclick=()=>{$('q').value='';fillList();openOv('ovDest');};
$('dCenter').onclick=()=>{const la=unmy(view.y),lo=unmx(view.x);setDest({name:fmtCoord(la,'N','S')+' '+fmtCoord(lo,'E','O'),lat:la,lon:lo});};
$('dClear').onclick=()=>setDest(null);
$('bMenu').onclick=()=>openOv('ovMenu');
$('mHelp').onclick=()=>openOv('ovHelp');
$('mClear').onclick=()=>{track=[];store.set('track',track);dirty=true;$('ovMenu').classList.remove('show');};
function unitLabel(){$('unitTxt').textContent=units==='aviation'?'aviação (kt, ft, NM)':'métricas (km/h, m, km)';}
unitLabel();
$('mUnits').onclick=()=>{units=units==='metric'?'aviation':'metric';store.set('units',units);unitLabel();render();};

// manter ecrã ligado
let wake=null,wantWake=store.get('wake',false);
async function reqWake(){try{wake=await navigator.wakeLock.request('screen');wake.addEventListener('release',()=>{wake=null;});}catch(e){}}
function wakeUI(){$('wakeTxt').textContent=wantWake?'ligado':'desligado';}
$('mWake').onclick=async()=>{wantWake=!wantWake;store.set('wake',wantWake);if(wantWake)await reqWake();else if(wake){wake.release();wake=null;}wakeUI();};
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&wantWake&&!wake)reqWake();});
wakeUI();if(wantWake)reqWake();
if(!('wakeLock' in navigator))$('mWake').style.display='none';

// demonstração: voo Luxemburgo → Lisboa acelerado 30x
$('mDemo').onclick=()=>{
  $('ovMenu').classList.remove('show');
  if(demo){clearInterval(demo.iv);demo=null;$('mDemo').textContent='▶ Modo demonstração (simular voo)';fix=null;setStatus('wait','Demonstração terminada. À procura de GPS…');dirty=true;return;}
  $('mDemo').textContent='■ Parar demonstração';
  const pts=gc(49.63,6.20,38.77,-9.13,600),total=hav(49.63,6.20,38.77,-9.13),v=230;let i=0,t0=Date.now();
  if(!dest)setDest({name:'Lisboa',lat:38.72,lon:-9.14});
  fix=null;demoTrack=[];setFollow(true);
  demo={iv:setInterval(()=>{if(i>=pts.length){clearInterval(demo.iv);return;}
    const p=pts[i],alt=Math.min(11000,Math.min(i,pts.length-i)*180);
    onPos({timestamp:t0+i*(total/600/v)*1000,coords:{latitude:p[0],longitude:p[1],altitude:alt,accuracy:12,speed:v,heading:null}});i++;},100)};
};

// instalar
let deferred=null;
addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;$('mInstall').style.display='block';});
$('mInstall').onclick=async()=>{if(!deferred)return;deferred.prompt();await deferred.userChoice;deferred=null;$('mInstall').style.display='none';};

if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
if(!store.get('helped',false)){store.set('helped',true);setTimeout(()=>openOv('ovHelp'),400);}
startGPS();
