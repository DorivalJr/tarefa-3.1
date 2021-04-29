<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Sponsor" />

      <!-- Portfolio Grid Items -->
      <b-row>
        <!--FILTRO-->

       <div class="form-group mx-sm-3 mb-5">
          <select class="form-control form-control-lg" v-model="filterGroup">
            <option value="todos">todos os grupos</option>
            <option value="anfíbio">anfíbios</option>
            <option value="ave">aves</option>
            <option value="mamífero">mamíferos</option>
            <option value="peixe">peixes</option>
            <option value="réptil">répteis</option>
          </select>
        </div>
        <div class="form-group mx-sm-3 mb-5">
          <select class="form-control form-control-lg" v-model="filterLevel">
            <option value="todos">todos os níveis</option>
            <option value="1">nível 1</option>
            <option value="2">nível 2</option>
            <option value="3">nível 3</option>
            <option value="4">nível 4</option>
            <option value="5">nível 5</option>
          </select>
        </div>
        <div class="form-group mb-5">
          <button class="btn btn-success btn-lg" @click="sortAnimals">
            <i :class="classSorter"></i> ordenar
          </button>
        </div>
      </b-row>
      <div class="row">
        <Animal v-for="a in filteredAnimals" :key="a.id" :animal="a"></Animal>
      </div>
    </b-container>
  </section>
</template>
