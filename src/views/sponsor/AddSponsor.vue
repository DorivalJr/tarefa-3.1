<template>
  
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Sponsor" />
     
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
              :to="{name: 'listSponsors'}"
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
import { ADD_SPONSOR } from "@/store/sponsor/sponsor.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "AddSponsor",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      Nome: "",
      Contato: "",
      Animal: "",
      Valor: ""
    };
  },
  computed: {
    ...mapGetters("sponsor", ["getMessage"])
  },
  methods: {
    add() {
      this.$store.dispatch(`sponsor/${ADD_SPONSOR}`, this.$data).then(
        () => {
          this.$alert(this.getMessage, "Sponsor adicionado!", "success");
          router.push({ name: "listSponsors" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  }
};
</script>