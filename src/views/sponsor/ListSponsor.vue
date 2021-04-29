<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Gestão de Sponsors" />
      <!--MENU TOPO-->
      <b-row class="mb-4">
        <b-col cols="2"></b-col>
        <b-col>
          <router-link
            :to="{name:'addSponsor'}"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          >
            <i class="fas fa-plus-square"></i> ADICIONAR SPONSOR
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
                <th scope="col">ANIMAL</th>
                <th scope="col">VALOR</th>
              </tr>
            </thead>
            <tbody>
               <tr >
                <td class="pt-4">Sponsor1</td>
                <td class="pt-4">123456789</td>
                <td class="pt-4">Canguru</td>
                <td class="pt-4">500</td>
              </tr>
              <tr >
                <td class="pt-4">Sponsor2</td>
                <td class="pt-4">987654321</td>
                <td class="pt-4">Avestruz</td>
                <td class="pt-4">1000</td>
              </tr> 
            </tbody>
          </table>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

