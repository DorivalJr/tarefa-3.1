<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Gestão de Experts" />
      <!--MENU TOPO-->
      <b-row class="mb-4">
        <b-col cols="2"></b-col>
        <b-col>
          <router-link
            :to="{name:'addExpert'}"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          >
            <i class="fas fa-plus-square"></i> ADICIONAR EXPERT
          </router-link>
          <router-link :to="{name:'admin'}" tag="button" class="btn btn-outline-info mr-2 mt-2">
            <i class="fas fa-bars"></i> MENU PRINCIPAL
          </router-link>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>

      <!--TABLE-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">NOME</th>
                <th scope="col">CONTATO</th>
                <th scope="col">ESPÉCIE</th>
                <th scope="col">FAMILIA</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td class="pt-4">Expert1</td>
                <td class="pt-4">123456789</td>
                <td class="pt-4">Repteis</td>
                <td class="pt-4">Lagartos</td>
              </tr>
              <tr >
                <td class="pt-4">Expert2</td>
                <td class="pt-4">987654321</td>
                <td class="pt-4">Felinos</td>
                <td class="pt-4">Leões</td>
              </tr>              
            </tbody>
          </table>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

