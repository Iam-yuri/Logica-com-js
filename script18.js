var num = +(prompt("Digite um número para saber a sua tabuada"));
        var cont = 1;
        let text = "";

        while (cont <= 10) {
            var result = num * cont;
            text += ("<br>" + num + " * " + cont + " = " + result);
            cont++;
        }
        document.getElementById("demo").innerHTML = text;