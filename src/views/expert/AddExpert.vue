<template>
  
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Expert"/>
     
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
                v-model="Especie"
                type="text"
                class="form-control form-control-lg"
                id="txtEspecie"
                placeholder="escreve a especie"
                
              />
            </div>
            <div class="form-group">
              <input
                v-model="Familia"
                type="text"
                class="form-control form-control-lg"
                id="txtFamilia"
                placeholder="escreve a familia"
                
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
import { ADD_EXPERT } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue"
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "AddExpert",
   components: {
    HeaderPage
  },
  data: () => {
    return {
      Nome: "",
      Contato: "",
      Especie: "",
      Familia: ""
    };
  },
  computed: {
    ...mapGetters("expert", ["getMessage"])
  },
  methods: {
    add() {
      this.$store.dispatch(`expert/${ADD_EXPERT}`, this.$data).then(
        () => {
          this.$alert(this.getMessage, "Expert adicionado!", "success");
          router.push({ name: "listExperts" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  }
};
</script>