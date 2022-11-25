import { ContactPatch } from "../services/contact.service.js";


const formCreate = document.createElement('form')
formCreate.setAttribute('id', 'p-create')


const editarContato = async (event) => {
    event.preventDefault()

    const fd = new FormData(formCreate)
    const response = await ContactPatch(fd)

    if(response.status === 200) {
        window.open('#contatos', '_self')
        window.alert("Contato Atualizado com Sucesso!")
    }
    else
    {
        window.alert("Erro no edição! Verifique os dados inseridos!")
    }      
}



const events = async () => {
    formCreate.addEventListener('submit', editarContato)
}


export const EditarContato =  () => {

    formCreate.innerHTML = (`
        <div class="form_header">
            <h1>
                Editar Contato
            </h1>
            <a href="#contatos">
                <i class="fa fa-solid fa-reply">
            </i></a>
        </div>

        <div class="big_box">
            <h3>Contato</h3>
            <div class="form_idContato">
                <label for="idContato">Id do contato</label>
                <input id="idContato" name="idContato" value="${sessionStorage.getItem("@contactId")}">
            </div>
            <div class="form_nome">

                <label for="nome">Nome*</label>
                <input id="nome" name="nome" required>
            </div>
            <div class="form_apelido">
                <label for="apelido">Apelido</label>
                <input id="apelido" name="apelido">
            </div>

            <div class="form_email">
                <label for="email">Email</label>
                <input id="email" name="email">
            </div>
            <div class="form_notas">
                <label for="notas">Notas</label>
                <input id="notas" name="notas">
            </div>
            <div class="form_fotos">
                <label for="foto">Foto</label>
                <input type="file" accept="image/*" id="Foto" name="foto">
            </div>
            <div class="div_telefone">
                <h3>Telefones</h3>

                <div class="form_celular_numero">
                    <label for="celular">Celular: </label>
                    <input id="celular" name="celular" placeholder="(xx) xxxxxxxxx">
                </div>

                <div class="form_Casa_numero">
                    <label for="casa">Casa: </label>
                    <input id="casa" name="casa" placeholder="(xx) xxxxxxxx">
                </div>

                <div class="form_Trabalho_numero">
                    <label for="trabalho">Trabalho: </label>
                    <input id="trabalho" name="trabalho" placeholder="(xx) xxxxxxxx">
                </div>
            </div>
        </div>

        <div class="big_box">
            <div class="div_endereco">
                <h3>Endereço</h3>
                <div class="logradouro">
                    <label for="logradouro">Logradouro</label>
                    <input id="logradouro" name="logradouro">
                </div>
                <div class="cidade">
                    <label for="cidade">Cidade</label>
                    <input id="cidade" name="cidade">
                </div>
                <div class="estado">
                    <label for="estado">Estado</label>
                    <input id="estado" name="estado">
                </div>
                <div class="cep">
                    <label for="cep">Cep</label>
                    <input id="cep" name="cep">
                </div>
                <div class="pais">
                    <label for="pais">País</label>
                    <input id="pais" name="pais">
                </div>
            </div>
        </div>

        <div class="big_box">
            <button type="submit" id="btn_criarContato" form="p-create">Atualizar</button>
            <button type="button" onclick="window.open('#contatos', '_self')" id="btn_cancelar" form="p-create">Cancelar</button>
        </div>
    `)


    events()
    return formCreate
}
