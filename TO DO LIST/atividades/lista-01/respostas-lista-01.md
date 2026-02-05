# Lista de Exercícios 01 - Respostas Teóricas

### 1) Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript, responda o que se pede:

**a) O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre em linguagens com tipagem estática?**

É quando a gente precisa "avisar" o tipo de cada variável antes de rodar o programa (ex: int numero = 10;).

A verificação acontece antes do programa executar, na hora da compilação. O compilador olha o código e se você tentar fazer algo errado, tipo guardar um texto numa variável que era pra ser número, ele dá erro e nem deixa o programa rodar.

**b) Quais são os principais benefícios da tipagem estática em termos de performance e segurança?**

Performance: É mais rápido. Como o computador já sabe o tipo de tudo, ele não precisa ficar checando isso toda hora enquanto o programa está rodando.

Segurança: É mais seguro porque o compilador acha muitos bugs de tipo antes de você rodar. Por exemplo, se você escreveu o nome de uma função errado ou passou um número onde era pra ser um texto, ele te avisa na hora.

**c) Como funciona a tipagem dinâmica em relação à verificação de tipos em tempo de execução? Quais são os principais desafios de performance enfrentados por linguagens de tipagem dinâmica?**

Na tipagem dinâmica tipo JavaScript, você não precisa dizer o tipo. Uma variável pode ser um número agora e um texto depois (let x = 10; x = "oi";). A verificação só acontece na hora que o código está rodando.

O desafio de performance é que isso dá mais trabalho para o computador. Ele tem que ficar checando "o que é essa variável agora?" toda vez que vai fazer uma operação (tipo a + b), e isso deixa as coisas um pouco mais lentas.

**d) Quais são as diferenças entre linguagens com tipagem forte e fraca?**

Tipagem Forte: É rigorosa. Ela não deixa misturar tipos diferentes. Se você tentar somar um número com um texto, ela dá um erro e para o programa. Ela te força a converter o tipo manualmente.

Tipagem Fraca: É mais flexível tipo o JavaScript. Ela tenta converter os tipos sozinha para fazer a operação dar certo. Por exemplo, '5' - 1 dá 4 (ela converteu o '5' pra número). O problema é que às vezes ela faz coisas estranhas, tipo '5' + 1 que dá '51'.

**e) Como linguagens híbridas conseguem combinar características de tipagem estática e dinâmica? Qual o papel da inferência de tipos em linguagens de tipagem estática?**

Linguagens híbridas pelo que entendi, deixam você escolher. Elas rodam sobre uma linguagem dinâmica (JS), mas deixam você adicionar tipos estáticos onde quiser, pra ter mais segurança.

Inferência de tipos é quando a linguagem estática é esperta. Mesmo que você não escreva o tipo, ela adivinha pelo valor que você colocou. Se você faz let idade = 25;, ela já sabe que idade é um number e vai tratar como tal. Ajuda a escrever menos.

**Como a linguagem JavaScript lida com a tipagem de dados?**
Tipagem Dinâmica: As variáveis não têm tipo fixo, o tipo é do valor. Você pode mudar o tipo de uma variável a qualquer hora.

Tipagem Fraca: O JS tenta converter os tipos automaticamente o tempo todo. É por isso que 5 == '5' dá true.