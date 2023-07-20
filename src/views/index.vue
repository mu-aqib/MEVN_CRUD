<template>
  <div class="bg-light">
    <base-block
      header="Registered Cars"
      :columns="columns"
      :data="items"
    ></base-block>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      columns: ["id", "name", "position", "office", "age", "actions"],
      items: [
        {
          id: 1,
          name: "Tiger Nixon",
          position: "System Architect",
          office: "Edinburgh",
          age: 61,
          start_date: "2011/04/25",
          salary: "320,800",
        },
        {
          id: 2,
          name: "Garrett Winters",
          position: "Accountant",
          office: "Tokyo",
          age: 63,
          start_date: "2011/07/25",
          salary: "170,750",
        },
        {
          id: 3,
          name: "Ashton Cox",
          position: "Junior Technical Author",
          office: "San Francisco",
          age: 66,
          start_date: "2009/01/12",
          salary: "86,000",
        },
        {
          id: 4,
          name: "Cedric Kelly",
          position: "Senior Javascript Developer",
          office: "Edinburgh",
          age: 22,
          start_date: "2012/03/29",
          salary: "433,060",
        },
        {
          id: 5,
          name: "Airi Satou",
          position: "Accountant",
          office: "Tokyo",
          age: 33,
          start_date: "2008/11/28",
          salary: "162,700",
        },
        {
          id: 6,
          name: "Brielle Williamson",
          position: "Integration Specialist",
          office: "New York",
          age: 61,
          start_date: "2012/12/02",
          salary: "372,000",
        },
        {
          id: 7,
          name: "Herrod Chandler",
          position: "Sales Assistant",
          office: "San Francisco",
          age: 59,
          start_date: "2012/08/06",
          salary: "137,500",
        },
        {
          id: 8,
          name: "Rhona Davidson",
          position: "Integration Specialist",
          office: "Tokyo",
          age: 55,
          start_date: "2010/10/14",
          salary: "327,900",
        },
        {
          id: 9,
          name: "Colleen Hurst",
          position: "Javascript Developer",
          office: "San Francisco",
          age: 39,
          start_date: "2009/09/15",
          salary: "205,500",
        },
        {
          id: 10,
          name: "Sonya Frost",
          position: "Software Engineer",
          office: "Edinburgh",
          age: 23,
          start_date: "2008/12/13",
          salary: "103,600",
        },
        {
          id: 11,
          name: "Jena Gaines",
          position: "Office Manager",
          office: "London",
          age: 30,
          start_date: "2008/12/19",
          salary: "90,560",
        },
        {
          id: 12,
          name: "Quinn Flynn",
          position: "Support Lead",
          office: "Edinburgh",
          age: 22,
          start_date: "2013/03/03",
          salary: "342,000",
        },
      ],
    };
  },
};
</script>
