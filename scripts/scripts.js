window.onload = function() {

    let arrFrasesAutores = [
        ["Você enfrentará muitas derrotas na vida, mas nunca se deixe ser derrotado.", "Maya Angelou"],
        ["A maior glória de viver não está em nunca cair, mas em nos levantar toda vez que caímos.", "Nelson Mandela"],
        ["No final das contas, não são os anos de sua vida que contam. É a vida em seus anos.", "Abraham Lincoln"],
        ["Eu quero sentir a minha vida enquanto eu estou nela.", "Meryl Streep"],
        ["O que vale na vida não é o ponto de partida e sim a caminhada. Caminhando e semeando, no fim terás o que colher. ", "Cora Coralina"],
        ["A vida é a arte do encontro, embora haja tanto desencontro pela vida.", "Vinicius de Moraes"],
        ["O sucesso geralmente vem para aqueles que estão ocupados demais para procurá-lo.", "Henry David Thoreau"],
        ["O verdadeiro teste não é se você evitará esse fracasso, porque não o fará. É se você deixa que isso endureça ou envergonhe-o pela inércia, ou se você aprende com ele; se você escolhe perseverar.", "Barack Obama"],
        ["A maneira de começar é parar de falar e começar a fazer.", "Walt Disney"],
        ["Você sabe que está no caminho do sucesso se fizer o seu trabalho e não for pago por ele.", "Oprah Winfrey"],
        ["Primeiro, tenha um ideal prático definido e claro; uma meta, um objetivo. Segundo, tenha os meios necessários para atingir seus fins; sabedoria, dinheiro, materiais e métodos. Terceiro, ajuste todos os seus meios para esse fim.", "Aristóteles"],
        ["Fracassar é parte crucial do sucesso. Toda vez que você fracassa e se recupera, exercita perseverança que é a chave da vida. Sua força está na habilidade de se recompor.", "Michelle Obama"],
        ["O amor eterno não existe. Mesmo a mais forte paixão tem o seu tempo de vida. Chega seu dia, se acaba, nasce outro amor. Por isso mesmo o amor é eterno. Porque se renova. Terminam as paixões, o amor permanece.", "Jorge Amado"],
        ["Acho que você não deve fazer nada que não o divirta, lhe dê prazer. Também não deve exercer um ofício, uma profissão para a qual é incompetente.", "Jorge Amado"],
        ["A maneira de começar é parar de falar e começar a fazer.", "Walt Disney"]
    ];
    
    function valores(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let resultado = valores(0, 14);

    document.getElementById("text").innerHTML = arrFrasesAutores[resultado][0];
    document.getElementById("author").innerHTML = arrFrasesAutores[resultado][1];
    document.getElementById("new-quote").onclick = function() {
        let resultado = valores(0, 14);

        document.getElementById("text").innerHTML = arrFrasesAutores[resultado][0];
        document.getElementById("author").innerHTML = arrFrasesAutores[resultado][1];
    }
}

    function fraseEscolhida() {
        document.getElementById('tweet-quote').setAttribute("href", 'https://twitter.com/intent/tweet?text=' + document.getElementById("text").innerHTML + " - " + document.getElementById("author").innerHTML);
    }
