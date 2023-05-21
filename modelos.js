/** obtener el valor del dolar */
const url='https://www.dolarsi.com/api/api.php?type=valoresprincipales'
let dolar_blue_venta=0
const fixie= 15000
const cruise=17000
const tandem=25000
const chopper=20000


fetch(url).then(res => res.json()).then((array) => {let cot_dolar = array[1]; dolar_blue_venta=Number(cot_dolar.casa.venta.replace(",","."));});

document.getElementById('mod1').addEventListener('click',function(){
    document.getElementById('mod_sel').src="https://www.seguroscatalanaoccidente.com/blog/assets/multimedia/2016/04/bicicleta-fixie.jpg"
    document.getElementById('tipo_modelo').innerHTML="Bicicleta Fixie"
    document.getElementById('precio_1Arg').innerHTML="$ 15000"
    document.getElementById('precio_U$S').innerHTML= (fixie/dolar_blue_venta).toFixed(2)
});
document.getElementById('mod2').addEventListener('click',function(){
    document.getElementById('mod_sel').src="https://www.seguroscatalanaoccidente.com/blog/assets/multimedia/2016/04/bicicleta-cruiser.jpg"
    document.getElementById('tipo_modelo').innerHTML="Bicicleta Cruise"
    document.getElementById('precio_1Arg').innerHTML="$ 17000"
    document.getElementById('precio_U$S').innerHTML=(cruise/dolar_blue_venta).toFixed(2)
});
document.getElementById('mod3').addEventListener('click',function(){
    document.getElementById('mod_sel').src="https://www.seguroscatalanaoccidente.com/blog/assets/multimedia/2016/04/bicicleta-tandem.jpg"
    document.getElementById('tipo_modelo').innerHTML="Bicicleta Tandem"
    document.getElementById('precio_1Arg').innerHTML="$ 25000"
    document.getElementById('precio_U$S').innerHTML=(tandem/dolar_blue_venta).toFixed(2)
});
document.getElementById('mod4').addEventListener('click',function(){
    document.getElementById('mod_sel').src="https://www.seguroscatalanaoccidente.com/blog/assets/multimedia/2016/04/bicicleta-chopper.jpg"
    document.getElementById('tipo_modelo').innerHTML="Bicicleta Chopper"
    document.getElementById('precio_1Arg').innerHTML="$ 20000"
    document.getElementById('precio_U$S').innerHTML=(chopper/dolar_blue_venta).toFixed(2)
});

