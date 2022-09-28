//Posts dos usuários
const posts = [
  {
    id_post: 1,
    user: "Samuel Persuhn",
    stack: "Front end Engineer",
    img: "./assets/img/user2.svg",
    title: "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
  },
  {
    id_post: 2,
    user: "Carla Maria",
    stack: "Back end Engineer",
    img: "./assets/img/user4.svg",
    title: "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
    text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
  },
  {
    id_post: 3,
    user: "Júlia Martins",
    stack: "Devop's",
    img: "./assets/img/user5.svg",
    title: "O que é programação orientada a objetos e programação funcional",
    text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
    
  },
];

let listPosts = document.querySelector(".posts")

function postPublicado(post) {
  let idPost = post.id_post
  let userName = post.user
  let profissao = post.stack
  let photoPerfil = post.img

  let title = post.title
  let text = post.text
  

  let tagLi = document.createElement('li')
  tagLi.classList.add("post-User")
  tagLi.id = idPost
  tagLi.innerHTML = `
  <div class="user-Post">
      <img class="photo-User" src="${photoPerfil}" alt="">
      <div class="name-user">
          <h4>${userName}</h4>
          <span>${profissao}</span>
      </div>
  </div>
  <div class="post">
      <h3>${title}</h3>
      <p>${text}</p>
  </div>
  <div class="buttons-post">
      <button class="open_post" >Abrir Post</button>
    <div class="likes">
      <button class="button-like" ><img class="heart" src="./assets/img/coracao-72.png" alt=" heart like"></button>
      <p>0</p>
    </div>
  </div>
  `
  listPosts.appendChild(tagLi)
  return tagLi
}




function renderizaPosts(lista, referenciaHtml) {
  for (let i = 0; i < lista.length; i++) {
    let postUser = lista[i]
    let sectionPost = postPublicado(postUser)
    referenciaHtml.appendChild(sectionPost)
  }
}
renderizaPosts(posts, listPosts)
