<template>
  <div class="bg-light">
    <base-block
      header="Registered Categories"
      :columns="columns"
      :data="data"
    ></base-block>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      columns: ["id", "name", "car_type", "wheel"],
      data: [
        {
          id: "1",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "2",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "3",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "4",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "5",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "6",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
      ],
    };
  },
};
</script>
