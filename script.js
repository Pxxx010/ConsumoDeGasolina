function calcconsumo() {
    var v1 = document.getElementById("qtdroda").value;
    var v2 = document.getElementById("qtdl").value;

    if (v1.trim() === '' || v2.trim() === '') {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    var resultado = parseFloat(v1) / parseFloat(v2); // Alterei parseInt para parseFloat para lidar com valores decimais
    var resultadoElement = document.getElementById("km/l");
    
    // Adiciona a classe correspondente ao resultado
    resultadoElement.classList.remove("positive", "negative"); // Remove qualquer classe de resultado anterior
    if (resultado > 0) {
        resultadoElement.classList.add("positive"); // Adiciona classe para resultado positivo
        console.log("Class positiva")
    } else if (resultado < 0) {
        resultadoElement.classList.add("negative"); // Adiciona classe para resultado negativo
    }
    
    resultadoElement.textContent = "Km/l: " + resultado.toFixed(2) + "Km"; // Utilizando toFixed(2) para limitar para duas casas decimais
}