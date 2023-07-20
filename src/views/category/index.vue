<template>
  <div class="bg-light">
    <base-block
      header="Registered Cars"
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
          id: "1",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "1",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "1",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "1",
          name: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
      ],
    };
  },
};
</script>
