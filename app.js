function Calcula() {
    let valor = parseInt(document.getElementById("text").value);
    document.getElementById("text").value = valor + (valor / 10);
    console.log(valor + (valor / 10));
}