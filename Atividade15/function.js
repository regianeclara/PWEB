function novaJanela() {

    var cursoSelecionado = document.getElementById("cursos").value;
    var confirmacao = confirm("Deseja abrir a página do curso: " + cursoSelecionado + "?");

    if (confirmacao) {
        var url = ""; 
        var janela = window.open(url, "_blank", "width=600,height=300");
        janela.document.write("<h1>Informações sobre o curso: </br>" + cursoSelecionado + "</h1>");

        switch(cursoSelecionado){
            case "Análise e Desenvolvimento de Sistemas":
                janela.document.write("<p>O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação</p>");
                break;

                case "Eletrônica Automotiva":
                janela.document.write("<p>O tecnólogo em Eletrônica Automotiva: participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva;</p>");  
                break;

                case "Fabricação Mecânica":
                janela.document.write("<p>O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos.</p>");  
                break;

            case "Gestão Empresarial":
                janela.document.write("<p>O Tecnólogo em Gestão Empresarial elabora e implementa planos de negócios, utilizando métodos e técnicas de gestão na formação e organização empresarial especificamente nos processos de comercialização, suprimento, armazenamento, movimentação de materiais e no gerenciamento de recursos financeiros e humanos.</p>");  
                break;

            case "Gestão da Qualidade":
                janela.document.write("<p>O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade.</p>");
                break;

                case "Logística":
                janela.document.write("<p>O tecnólogo em Logística é o profissional especializado em armazenagem, distribuição e transporte.</p>");
                break;

            case "Manufatura Avançada":
                janela.document.write("<p>O aluno aprenderá a transformar ambientes de manufatura convencional em ambientes mais tecnológicos.</p>");
                break;

                case "Processos Metalúrgicos":
                janela.document.write("<p>O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície </p>");
                break;

                case "Polímeros":
                    janela.document.write("<p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem. </p>");
                    break;

                    case "Projetos Mecânicos":
                    janela.document.write("<p> O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas. </p>");
                    break;
            case "Sistemas Biomédicos":
                janela.document.write("<p>O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletro-médicos. </p>");
                break;
            
        }

    }
}