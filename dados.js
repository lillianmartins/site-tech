const dados = [
    {
        titulo: "API",
        linkTexto: "https://aws.amazon.com/pt/what-is/api/#:~:text=API%20significa%20Application%20Programming%20Interface,de%20servi%C3%A7o%20entre%20duas%20aplica%C3%A7%C3%B5es.",
        descricao: "API significa Application Programming Interface (Interface de Programação de Aplicação). A interface pode ser pensada como um contrato de serviço entre duas aplicações.",
        linkVideo: "https://www.youtube.com/watch?v=vGuqKIRWosk",
        tags: "api"
    },
    {
        titulo: "HTML",
        linkTexto: "https://www.alura.com.br/artigos/html",
        descricao: "HTML (HyperText Markup Language) é a linguagem de marcação utilizada para estruturar o conteúdo de uma página web. Ele define os elementos básicos como cabeçalhos, parágrafos, listas, imagens e links, formando o esqueleto da página.",
        linkVideo: "https://www.youtube.com/watch?v=4dQtz1PpY9A&list=PLVc5bWuiFQ8GgKm5m0cZE6E02amJho94o&index=92&pp=iAQB",
        tags: "html"
    },
    {
        titulo: "CSS",
        linkTexto: "https://www.alura.com.br/artigos/css",
        descricao: "CSS (Cascading Style Sheets) é a linguagem de estilo utilizada para definir a apresentação visual de uma página web. Com o CSS, você controla as cores, fontes, layout, espaçamento e outros aspectos visuais dos elementos HTML, dando vida e estilo à sua página.",
        linkVideo: "https://www.youtube.com/watch?v=229xfk3EEM8&list=PLVc5bWuiFQ8GgKm5m0cZE6E02amJho94o&index=50&pp=iAQB",
        tags: "css",
    },
    {
        titulo: "JavaScript",
        linkTexto: "https://www.alura.com.br/artigos/javascript",
        descricao: "JavaScript é uma linguagem de programação que adiciona interatividade e dinamismo às páginas web. Com JavaScript, você pode criar animações, manipular o conteúdo da página, responder a ações do usuário e muito mais.",
        linkVideo: "https://www.youtube.com/watch?v=Ri76yOpLrNg&list=PLVc5bWuiFQ8GgKm5m0cZE6E02amJho94o&index=103&pp=iAQB",
        tags: "javascript"
    },
    {
        titulo: "Front-end",
        linkTexto: "https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end",
        descricao: "De forma geral, o Front-end compreende a parte visual de sites e aplicações. Ou seja, a área das páginas em que as pessoas podem interagir. A interface gráfica é desenvolvida através de tecnologias bases da Web: HTML, CSS e JavaScript",
        linkVideo: "https://www.youtube.com/watch?v=ZY3-MFxVdEw",
        tags: "frontend front end"
    },
    {
        titulo: "Back-end",
        linkTexto: "https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end",
        descricao: "Back-end compreende tudo aquilo que tem por trás de uma aplicação. As pessoas desenvolvedoras de Back-end trabalham principalmente para fazer uma ponte entre os dados do navegador rumo ao banco de dados e vice-versa",
        linkVideo: "https://www.youtube.com/watch?v=fiPfvylj6rk",
        tags: "backend back end"
    },
    {
        titulo: "Hardware",
        linkTexto: "https://pt.wikipedia.org/wiki/Hardware",
        descricao: "O hardware é um termo técnico que foi traduzido para a língua portuguesa como equipamento, que se refere à parte física de computadores e outros sistemas microeletrônicos",
        linkVideo: "https://www.youtube.com/watch?v=RM8bBzHggu8",
        tags: "hardware equipamento componentes" 
    },
    {
        titulo: "Software",
        linkTexto: "https://pt.wikipedia.org/wiki/Software",
        descricao: "Software é uma coleção de programas e dados que dizem a um computador como executar tarefas específicas. Isso contrasta com o hardware, a partir do qual o sistema é construído e que realmente executa o trabalho.",
        linkVideo: "https://www.youtube.com/watch?v=RM8bBzHggu8",
        tags: "software aplicativos aplicação sistemas"
    },
    {
        titulo: "Framework",
        linkTexto: "https://www.alura.com.br/artigos/framework-o-que-e-pra-que-serve-essa-ferramenta?srsltid=AfmBOoou8pDn2e_lnXrxU7WVC0ZbaudBM2jIQOreYpeUJanBMct7Z6zr",
        descricao: "Framework é uma ferramente que se refere a estratégias e ações que visam solucionar um tipo de problema através de abordagens prontas.",
        linkVideo: "https://www.youtube.com/watch?v=2zqzzTnfa0E",
        tags: "framework"
    },
    {
        titulo: "Linguagem de Programação",
        linkTexto: "https://www.alura.com.br/artigos/linguagem-programacao?srsltid=AfmBOopezm7c5dF3Nc5CydWvAMF8OktjdeJkb43m2_ZUlSWmChvvxowf",
        descricao: "A linguagem é um conjunto de regras e símbolos que o programador ou programadora usa para “conversar” com o computador.",
        linkVideo: "https://www.youtube.com/watch?v=Uh-GNH-t89w",
        tags: "linguagem programação"
    },
    {
        titulo: "Lógica de Programação",
        linkTexto: "https://www.devmedia.com.br/logica-de-programacao-o-que-e-e-como-aprender/",
        descricao: "O estudo dos métodos e processos para a construção de algoritmos e programas de computador.",
        linkVideo: "https://www.youtube.com/watch?v=543210fedcba",
        tags: "lógica algoritmos programação raciocínio"
    },
    {
        titulo: "React",
        linkTexto: "https://www.alura.com.br/artigos/react-js",
        descricao: "React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web.",
        linkVideo: "https://www.youtube.com/watch?v=NhUr8cwDiiM&t=416s", 
        tags: "react framework frontend"
    },
    {
        titulo: "Angular",
        linkTexto: "https://www.alura.com.br/artigos/como-comecar-com-angular",
        descricao: "Um framework TypeScript para desenvolvimento de interfaces e ferramentas para testar, atualizar e fazer o build do projeto.",
        linkVideo: "https://www.youtube.com/watch?v=Yf0rC7dERjg", 
        tags: "angular framework frontend"
    },
    {
        titulo: "Vue",
        linkTexto: "https://pt.wikipedia.org/wiki/Vue.js",
        descricao: "Vue é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
        linkVideo: "https://www.youtube.com/watch?v=bEl6yN3vd-U", 
        tags: "vue framework frontend"
    },
    {
        titulo: "Node.js",
        linkTexto: "https://www.alura.com.br/artigos/node-js",
        descricao: "O Node.js é um ambiente de execução do código JavaScript do lado servidor (server side), que na prática se reflete na possibilidade de criar aplicações, sem a necessidade do navegador. ",
        linkVideo: "https://www.youtube.com/watch?v=vYekSMBCCiM&t=296s", 
        tags: "node.js node backend servidor"
    },
    {
        titulo: "Python",
        linkTexto: "https://www.alura.com.br/artigos/python",
        descricao: "Python é uma linguagem de programação de uso geral - não especializada em nenhum problema específico. Isso significa que é uma linguagem que funciona para criar uma grande variedade de aplicações diferentes.",
        linkVideo: "https://www.youtube.com/watch?v=uOgDa1rlqjE", 
        tags: "python linguagem"
    },
    {
        titulo: "Java",
        linkTexto: "https://www.alura.com.br/artigos/java",
        descricao: "Uma linguagem de programação orientada a objetos, robusta e de propósito geral, amplamente utilizada em desenvolvimento web, aplicativos móveis e sistemas empresariais.",
        linkVideo: "https://www.youtube.com/watch?v=sZAxLRMxEUo",
        tags: "java linguagem jvm jre jdk"
    },
    {
        titulo: "C",
        linkTexto: "https://www.alura.com.br/artigos/comecando-a-programar-com-c",
        descricao: "Uma linguagem de programação procedural, de baixo nível, utilizada para desenvolver sistemas operacionais, drivers de dispositivos e aplicações de alto desempenho.",
        linkVideo: "https://www.youtube.com/watch?v=6mUCcsnCn08", 
        tags: "c linguagem"
    },
    {
        titulo: "C#",
        linkTexto: "https://www.alura.com.br/artigos/historia-e-futuro-do-c",
        descricao: "Uma linguagem de programação orientada a objetos, desenvolvida pela Microsoft para a plataforma .NET.",
        linkVideo: "https://www.youtube.com/watch?v=NXVQasys0B8",
        tags: "c# linguagem"
    },
    {
        titulo: "C++",
        linkTexto: "https://www.alura.com.br/artigos/formacao-linguagem-c-plus-plus",
        descricao: "Uma linguagem de programação orientada a objetos, de alto nível, com características de baixo nível, utilizada para desenvolvimento de jogos, sistemas operacionais e aplicações de alto desempenho.",
        linkVideo: "https://www.youtube.com/watch?v=AQdABlihlGs",
        tags: "c++ linguagem"
    },
    {
        titulo: "PHP",
        linkTexto: "https://www.alura.com.br/artigos/php-uma-introducao-linguagem",
        descricao: "Uma linguagem de script de propósito geral, especialmente adequada para desenvolvimento web.",
        linkVideo: "https://www.youtube.com/watch?v=AqDj3OSV0mM",
        tags: "php linguagem"
    },
    {
        titulo: "Banco de Dados",
        linkTexto: "https://www.alura.com.br/artigos/banco-de-dados?srsltid=AfmBOooQc95wcZYXq486Kym5AoYQjbGr9OMPstbwkiskq3XtjrLBAQF3",
        descricao: "Um banco de dados é um sistema de armazenamento de informações que permite a coleta, o armazenamento, a recuperação e a manipulação de dados de maneira estruturada e eficiente.",
        linkVideo: "https://www.youtube.com/watch?v=XfO3TRvESBo", 
        tags: "banco de dados sql nosql armazenamento"
    },
    {
        titulo: "SQL",
        linkTexto: "https://www.alura.com.br/artigos/o-que-e-sql?srsltid=AfmBOoo92HYFr8ZmrIO9IwiiqB3DI-s3gg7gu1deGuEZKHs3W29sFBGQ",
        descricao: "O SQL é uma linguagem padrão para trabalhar com bancos de dados relacionais, amplamente utilizada por profissionais em diversas áreas, desde cientistas de dados até pessoas usuárias de Excel.",
        linkVideo: "https://www.youtube.com/watch?v=kMznyI7r2Tc", 
        tags: "sql banco de dados armazenamento"
    },
    {
        titulo: "NoSQL",
        linkTexto: "https://www.alura.com.br/artigos/sql-nosql-bancos-relacionais-nao-relacionais?srsltid=AfmBOooh1AJ1RzIUn7VSGIQ5vB0jiqhEKv2611BgvgTjYUxpPNFQPxSl",
        descricao: "NoSQL é um termo que referencia tipos de bancos de dados não relacionais, ou seja, que não seguem o modelo de tabelas e relacionamentos utilizado pelos bancos de dados relacionais tradicionais.",
        linkVideo: "https://www.youtube.com/watch?v=1B64oqE8PLs", 
        tags: "nosql banco de dados armazenamento"
    },
    {
        titulo: "Bootstrap",
        linkTexto: "https://www.alura.com.br/artigos/bootstrap",
        descricao: "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.",
        linkVideo: "https://www.youtube.com/watch?v=zEi62PpFezU", 
        tags: "bootstrap frontend framework"
    },
    {
        titulo: "DOM",
        linkTexto: "https://www.alura.com.br/artigos/o-que-e-o-dom",
        descricao: "Uma interface de programação (API) que trata um documento HTML como uma estrutura de objetos, permitindo que scripts manipulem o conteúdo, estrutura e estilo do documento.",
        linkVideo: "https://www.youtube.com/watch?v=HOv9CqqAZk0",
        tags: "dom"
    },
    {
        titulo: "HTTP",
        linkTexto: "https://www.alura.com.br/artigos/http",
        descricao: "É um protocolo, uma forma de conversa entre duas máquinas, que permite transferir um hipertexto de um lado a outro. E aí está a razão do nome “Hyper Text Transport Protcolo”.",
        linkVideo: "https://www.youtube.com/watch?v=hwttZtWkXTk",
        tags: "http protocolo requsição resposta"
    },
    {
        titulo: "Go",
        linkTexto: "https://blog.casadodesenvolvedor.com.br/linguagem-go/",
        descricao: "Uma linguagem de programação compilada, de código aberto, projetada para ser simples, eficiente e confiável, ideal para desenvolvimento de sistemas distribuídos e serviços na nuvem.",
        linkVideo: "https://www.youtube.com/watch?v=2kyNEf9IsBQ",
        tags: "go linguagem"
    },
    {
        titulo: "Kotlin",
        linkTexto: "https://www.alura.com.br/artigos/kotlin",
        descricao: "Kotlin é uma linguagem de programação orientada a objetos compatível com a plataforma Java e que pode ser executada em máquinas virtuais Java (JVM), além de outras plataformas, como o Android.",
        linkVideo: "https://www.youtube.com/watch?v=BfjRYBN7Ur8",
        tags: "kotlin linguagem jvm"
    },
    {
        titulo: "REST",
        linkTexto: "https://www.alura.com.br/artigos/rest-conceito-e-fundamentos", 
        descricao: "REST(Representational State Transfer, que significa Transferência Representacional de Estado) é um modelo de arquitetura, que fornece diretrizes para que os sistemas distribuídos se comuniquem diretamente",
        linkVideo: "https://www.youtube.com/watch?v=S7MduKwvVGk", 
        tags: "rest modelo"
    },
];
