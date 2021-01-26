<template>
  <table class="table table-borderless">
    <thead>
      <tr class="table-header">
        <th class="col-md-6 col-sm-2" scope="col"></th>
        <th class="col-md-3 col-sm-1 header-title" scope="col">GreatSoft</th>
        <th class="col-md-3 col-sm-1 header-title" scope="col">Others</th>
      </tr>
    </thead>
    <tbody class="table-bordered table-striped">
      <tr>
        <td class="col col-start col-md-6 col-sm-2">Learn by doing</td>
        <td class="col col-md-3 col-sm-1 right-side left-top text-center">
          <b-icon icon="check-circle-fill" variant="warning"></b-icon>
        </td>
        <td class="col col-md-3 col-sm-1 right-side text-center">
          <b-icon icon="x-circle" variant="secondary"></b-icon>
        </td>
      </tr>
      <tr>
        <td class="col col-start col-md-6 col-sm-2">
          Practitional lever - skills
        </td>
        <td class="col col-md-3 col-sm-1 right-side left-top text-center">
          <b-icon icon="check-circle-fill" variant="warning"></b-icon>
        </td>
        <td class="col col-md-3 col-sm-1 right-side text-center">
          <b-icon icon="x-circle" variant="secondary"></b-icon>
        </td>
      </tr>
      <tr>
        <td class="col col-start col-md-6 col-sm-2">Job focused content</td>
        <td class="col col-md-3 col-sm-1 right-side left-top text-center">
          <b-icon icon="check-circle-fill" variant="warning"></b-icon>
        </td>
        <td class="col col-md-3 col-sm-1 right-side text-center">
          <b-icon icon="x-circle" variant="secondary"></b-icon>
        </td>
      </tr>
      <tr>
        <td class="col col-start col-md-6 col-sm-2">Real human help</td>
        <td class="col col-md-3 col-sm-1 right-side left-top text-center">
          <b-icon icon="check-circle-fill" variant="warning"></b-icon>
        </td>
        <td class="col col-md-3 col-sm-1 right-side text-center">
          <b-icon icon="x-circle" variant="secondary"></b-icon>
        </td>
      </tr>
      <tr>
        <td class="col col-start col-md-6 col-sm-2">
          Personalized code reviews
        </td>
        <td class="col col-md-3 col-sm-1 right-side left-top text-center">
          <b-icon icon="check-circle-fill" variant="warning"></b-icon>
        </td>
        <td class="col col-md-3 col-sm-1 right-side text-center">
          <b-icon icon="x-circle" variant="secondary"></b-icon>
        </td>
      </tr>
      <tr>
        <td class="col col-start col-md-6 col-sm-2">Real life projects</td>
        <td class="col col-md-3 col-sm-1 right-side left-top text-center">
          <b-icon icon="check-circle-fill" variant="warning"></b-icon>
        </td>
        <td class="col col-md-3 col-sm-1 right-side text-center">
          <b-icon icon="x-circle" variant="secondary"></b-icon>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 80%;
  margin-left: auto;
  padding: 0.5rem 0.5rem;
  position: relative;
  z-index: 9999 !important;
}
.table::after {
  position: absolute;
  content: '';
  top: 11%;
  right: -7%;
  width: 50px;
  height: 50px;
  background: #d4ecf5;
  border-radius: 50%;
  z-index: -1;
}
.table::before {
  position: absolute;
  content: '';
  bottom: -8%;
  left: -8%;
  width: 70px;
  height: 70px;
  background: rgba(255, 153, 0, 0.6);
  border-radius: 50%;
  z-index: -1;
}
.col {
  border: 1px solid rgba(243, 248, 255, 0.15);
}

tbody {
  margin: 2rem;
  background: #5d30db;
  color: white;
  border: 4px solid #5d30db;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 38px;
  white-space: nowrap;
}
.col-md-3 {
  background: #f3f8ff;
}
.header-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #5d30db;
  background: transparent;
}

.right-top {
  border-top-right-radius: 1rem;
}
.right-bottom {
  border-bottom-right-radius: 1rem;
}
.right-side {
  border: 1px solid #ccc;
  color: #ccc;
  z-index: 9999;
}

@media only screen and (max-width: 600px) {
  .table {
    margin-left: 0;
    margin: auto;
  }
  tbody {
    margin: 2rem;
    background: #5d30db;
    color: white;
    border: 4px solid #5d30db;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 38px;
    white-space: nowrap;
  }
}
</style>
