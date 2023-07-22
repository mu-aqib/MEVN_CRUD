<template>
  <b-card :header="header" bg-variant="light" class="text-center custom-table">
    <v-client-table :data="data" :columns="columns" :options="table_option">
      <template #actions="props">
        <div class="actions text-center">
          <!-- <router-link to="/">Go to Home</router-link> -->
          <router-link :to="'edit/' + props.row.id" class="text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit-2"
            >
              <path
                d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
              ></path>
            </svg>
          </router-link>
          <a
            href="javascript:;"
            class="text-danger"
            @click.prevent="delRow(props.row.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x-circle table-cancel"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </a>
        </div>
      </template>
    </v-client-table>
  </b-card>
</template>

<script>
export default {
  name: "BaseBlock",
  emits: ["delRow"],
  props: ["header", "columns", "data"],
  data() {
    return {
      table_option: {
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table table-hover",
        columnsClasses: { action: "actions text-center" },
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
          count: "Showing {from} to {to} of {count}",
          filter: "",
          filterPlaceholder: "Search...",
          limit: "Results:",
        },
        sortable: ["name", "position", "office", "age", "start_date", "salary"],
        sortIcon: {
          base: "sort-icon-none",
          up: "sort-icon-asc",
          down: "sort-icon-desc",
        },
        resizableColumns: false,
      },
    };
  },

  methods: {
    delRow(id) {
      // Corrected the emit method to use the event name as a string
      this.$emit("delRow", id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
