<template>
  <div class="table-responsive">
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-th class="purchase-history">Purchase history</b-th>
          <b-th class="header-content">Date</b-th>
          <b-th class="header-content">Total Price</b-th>
          <b-th class="header-content">Payment Type</b-th>
          <b-th class="header-content">Receipt</b-th>
          <b-th class="header-content">Invoice</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="i in 3" :key="i" class="data-row">
          <b-th class="flex flex-row purchase-history-column">
            <img
              src="~assets/svgs/yellow_korzinka.svg"
              alt="korzinka"
              class="w-7 h-7 mr-3 mt-2"
            />
            <div class="flex flex-column">
              <p class="context">1 Courses purchased</p>
              <nuxt-link class="all-courses-link mt-1 ml-1" to="#"
                >View all courses</nuxt-link
              >
            </div>
          </b-th>
          <b-td class="custom-text">Nov. 27, 2020</b-td>
          <b-td class="total-price">zł37.99</b-td>
          <b-td class="custom-text">zł37.99 MasterCard ****2236</b-td>
          <b-td><b-button variant="outline-primary">Receipt</b-button> </b-td>
          <b-td><b-button variant="outline-primary">Invoice </b-button></b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<style scoped>
.purchase-history {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
}
.header-content {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #333366;
}
.purchase-history-column .context {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #333366;
}
.purchase-history-column .all-courses-link {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #5d30db;
}
.total-price {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #333366;
}
.custom-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #333366;
}

tr.data-row {
  height: 130px;
}
</style>
