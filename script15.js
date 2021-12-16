const time = new Date().getHours();
        let greeting;
        if (time < 10) {
            greeting = "Bom Dia";
        } else if (time < 20) {
            greeting = "Bom dia"
        } else {
            greeting = "Boa Noite";
        }
        document.getElementById("demo").innerHTML = greeting;