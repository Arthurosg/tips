'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQPage() {
  // Estado para controlar qual pergunta está aberta
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  // Lista de perguntas frequentes
  const faqs = [
    {
      id: 1,
      question: "O que é nossa plataforma?",
      answer: "Nossa plataforma é onde você joga seus jogos preferidos e ganha dinheiro de verdade com a sua vitória. A plataforma é baseada em habilidades, proporcionando a melhor experiência para os jogadores."
    },
    {
      id: 2,
      question: "Como jogo valendo?",
      answer: "Os primeiros passos são: criar sua conta, fazer o download da plataforma e adicionar saldo para começar a jogar. Na plataforma, basta vincular sua conta no jogo, escolher o modo e definir sua aposta. Depois é só jogar e confiar nas suas habilidades pra fazer uma grana!"
    },
    {
      id: 3,
      question: "Eu consigo jogar valendo nas minhas ranqueadas?",
      answer: "Basta escolher um desafio, dar fila no seu jogo e conseguir completar o que foi escolhido. Lembrando que é necessário ter o mínimo de 10 vitórias na Solo/Duo, na season atual do League of Legends."
    },
    {
      id: 4,
      question: "Como funciona o bônus?",
      answer: "Na oferta de entrada, ao criar a sua conta na plataforma você ganha 100% de bônus em cima do valor do seu primeiro depósito (válido somente a partir de R$ 50 e limitado a R$ 500) para poder jogar ainda mais e multiplicar sua grana! Fique atento: para receber o bônus você precisa fazer apostas com um valor total de 8x o valor depositado em um período de 30 dias."
    },
    {
      id: 5,
      question: "Como funcionam as ligas?",
      answer: "As ligas funcionam como campeonatos com uma duração limitada. Cada liga tem uma premiação, assim como regras específicas. Durante a liga, os participantes disputam para conseguirem as melhores pontuações e ao final os ganhadores são premiados conforme a sua colocação."
    },
    {
      id: 6,
      question: "Vou jogar com gente muito acima do meu nível ou com bots?",
      answer: "Não. Em nossa plataforma você joga com pessoas do mesmo nível competitivo que você, seja na sua ranqueada ou em nosso matchmaking nos modos exclusivos. A única exceção acontece nas ligas do tipo \"Todos contra todos\"."
    },
    {
      id: 7,
      question: "Sou menor de idade. Posso jogar?",
      answer: "Somente maiores de 18 podem jogar, sendo exigida a validação do documento pessoal."
    },
    {
      id: 8,
      question: "Não sou do Brasil. Consigo jogar?",
      answer: "Para jogar em nossa plataforma estando fora do Brasil, é necessário cumprir esses 3 requisitos: Possuir documento BR/ Ter conta PIX para sacar/ Jogar no server BR (ainda não estamos disponíveis em outros servidores)."
    },
    {
      id: 9,
      question: "A plataforma funciona em celular e Mac OS?",
      answer: "Não. A plataforma ainda não é compatível com Android, iOS e MacOS, funciona somente no Windows, a partir do Windows 8."
    },
    {
      id: 10,
      question: "Como a plataforma garante minha segurança?",
      answer: "Validação de CPF: garantimos que apenas maiores de idade possam jogar na plataforma além de também garantirmos que temos usuários reais jogando e com apenas uma conta cadastrada; Vinculação única de conta do jogo: permitimos apenas uma conta vinculada por usuário, prevenindo assim o uso de contas smurfs; Anti cheat/Anti fraude: temos uma política rigorosa de análise de denúncias, garantindo assim uma fila mais segura e com menos toxicidade."
    },
    {
      id: 11,
      question: "Como eu consigo realizar um saque?",
      answer: "Para realizar o saque na plataforma é necessário ter um saldo superior a 50 reais, além disso, para garantir a autenticidade da sua conta, realizamos a validação do seu documento através do nosso parceiro GamerSafer. O valor é depositado via PIX em até 3 dias úteis."
    },
    {
      id: 12,
      question: "É seguro vincular minha conta?",
      answer: "Sim, TOTALMENTE seguro! Nossa plataforma possui autorização e integração oficial com as plataformas necessárias, incluindo uma aplicação aprovada pela Riot Games e acesso à API oficial. Nosso app apenas acessa dados públicos das partidas, sem a possibilidade de manipulação ou modificação de qualquer informação da sua conta. Essa vinculação segue os mesmos princípios de plataformas conhecidas como OP.GG, por exemplo. Desde o lançamento da plataforma, em 2024, nenhum usuário jamais teve sua conta comprometida ao utilizar nossa plataforma. Priorizamos a segurança dos nossos jogadores em todas as etapas do processo."
    }
  ]

  // Função para alternar a abertura/fechamento de uma pergunta
  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        {/* Cabeçalho da página */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dúvidas Frequentes
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossa plataforma
          </p>
        </div>

        {/* Lista de perguntas e respostas */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden"
              >
                {/* Botão da pergunta */}
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-purple-400 transition-transform duration-200 ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Resposta (aparece quando a pergunta está aberta) */}
                {openQuestion === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-700/50 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Jogue com Responsabilidade */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-2xl p-8 border border-yellow-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Jogue com responsabilidade
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Boas práticas para manter o jogo leve
              </h3>
              
              <p className="text-gray-300 mb-6">
                Para manter a integridade da plataforma, nós só permitimos que maiores de idade joguem. 
                Validamos os documentos no cadastro para isso.
              </p>
              
              <p className="text-gray-300 mb-4">
                Aqui vão algumas dicas e precauções para manter sua saúde mental e não colocar suas finanças em risco:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Trate o jogo apenas como diversão. Veja o jogar valendo apenas como uma forma de entretenimento.</li>
                <li>Seja cuidadoso com suas despesas. Nunca use dinheiro de outras contas (como aluguel, comida ou boletos) para jogar valendo</li>
                <li>Coloque limites: Estabeleça um valor máximo para fazer suas apostas.</li>
                <li>Não tente recuperar perdas: Se você não está em um bom dia, tente novamente em outro momento.</li>
                <li>Jogue com responsabilidade: evite fazer apostas quando você estiver irritado, chateado ou se sentindo mal.</li>
                <li>Diversifique seu entretenimento: tenha outros hobbies, jogue outros jogos e faça outras atividades.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Seção de Ajuda */}
        <section className="mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de Ajuda?
            </h3>
            <p className="text-gray-300 mb-6">
              Saiba que se algum dia você precisar falar com alguém sobre problemas de Jogo você pode contatar centros de ajuda:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://jogadoresanonimos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Jogadores Anônimos
              </a>
              <a
                href="https://www.gamblersanonymous.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Gamblers Anonymous
              </a>
              <a
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Gamble Aware
              </a>
              <a
                href="https://www.gamblingtherapy.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Gambling Therapy
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}