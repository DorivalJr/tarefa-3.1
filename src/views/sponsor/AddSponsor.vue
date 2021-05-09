<template>
  
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Sponsor"/>
     
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
            <div class="form-group">
              <input
                v-model="Nome"
                type="text"
                class="form-control form-control-lg"
                id="txtNome"
                placeholder="escreve o nome"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="Contato"
                type="text"
                class="form-control form-control-lg"
                id="txtContato"
                placeholder="escreve o contato"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="Animal"
                type="text"
                class="form-control form-control-lg"
                id="txtAnimal"
                placeholder="escreve o animal"
                
              />
            </div>
            <div class="form-group">
              <input
                v-model="Valor"
                type="text"
                class="form-control form-control-lg"
                id="txtValor"
                placeholder="escreve o valor"
                
              />
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-plus-square"></i> ADICIONAR
            </button>
            <router-link
              :to="{name: 'listSponsor'}"
              tag="button"
              class="btn btn-outline-danger btn-lg"
            >
            <i class="fas fa-window-close"></i> CANCELAR
            </router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue"


export default {
  name: "AddSponsor",
   components: {
    HeaderPage
  }
};
</script>