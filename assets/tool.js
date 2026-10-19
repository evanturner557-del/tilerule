(function(){var f=document.getElementById('calc'),o=document.getElementById('result');if(!f)return;
function run(){var v={};f.querySelectorAll('input[data-k]').forEach(function(i){var n=parseFloat(i.value);v[i.getAttribute('data-k')]=isNaN(n)?0:n;});
o.innerHTML=(function(v){var area=v.aw*v.ah;var t=(v.tw/1000)*(v.th/1000);var n=Math.ceil(area/Math.max(t,0.0001)*(1+v.waste/100));return 'Area <strong>'+area.toFixed(2)+' m²</strong>. Buy about <strong>'+n+' tiles</strong> including '+v.waste+'% wastage.';})(v);}
f.addEventListener('input',run);f.addEventListener('submit',function(ev){ev.preventDefault();run();});run();})();
