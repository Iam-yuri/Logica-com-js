var nota1 = +(prompt("Digite um número:"));
        var nota2 = +(prompt("Digite um número:"));
        var media = (nota1 + nota2) / 2;
        if (media >= 6) {
            alert("O aluno(a) foi aprovado(a) com média: " + media.toFixed(2));
        } else {
            alert("O aluno(a)foi reprovado(a) com média: " + media.toFixed(2));
        }