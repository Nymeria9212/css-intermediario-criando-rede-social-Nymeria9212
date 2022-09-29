/* Desenvolva a lógica da página aqui */
let botaoPost = document.querySelectorAll('.open_post')
let listaPostsUl = document.querySelector(".posts")
let postLi = document.querySelectorAll(".post-User")
let modal = document.querySelector('.modal')


function criandoModal(post) {
  let nome = post.user
  let profissao = post.stack
  let photo = post.img
  let id = post.id_post
  let title = post.title
  let text = post.text

  let textModal = document.createElement('div')
  textModal.classList.add('modal-post')

  textModal.id = id
  textModal.innerHTML = `
    <div class="header-modal">
      <div class="usuario-header">
          <img src=${photo}>
          <div class="name">
            <h2>${nome}</h2>
            <p>${profissao}</p>
          </div>
        </div>
        <button class="close-modal">X</button>
    </div>
      <div class="conteudo-post">
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    `


  modal.append(textModal)
  return textModal


}


for (let i = 0; i < botaoPost.length; i++) {

  botaoPost[i].addEventListener('click', function () {
    criandoModal(posts[i])
    modal.classList.remove('ativa-modal')
    closeModal1()
  }
  )
}

function closeModal1() {
  let closeModal = document.querySelector('.close-modal')
  let modalPost = document.querySelector('.modal-post')
  closeModal.addEventListener("click", function () {
    modal.classList.add('ativa-modal')
    modalPost.remove()
  })

}



