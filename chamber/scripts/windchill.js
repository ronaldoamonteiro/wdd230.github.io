const t = parseFloat(document.getElementById('high').textContent);
const s = parseFloat(document.getElementById('windspeed').textContent);

if (t<=50 && s>4.8){
const f = 35.74 + (0.6215*t) - 35.75*(Math.pow(s,0.16)) + 0.4275*t*(Math.pow(s,0.16));
document.getElementById('windchill').textContent = f.toFixed(1);
} else{
    document.getElementById('windchill').textContent = "N/A";
}