import Plant from "../components/Plant";
import storage from "./storage";

export const savePlant = (
  keyName,
  idNumber,
  plantName,
  plantImage,
  irrigationCycle,
  fertilizationCycle,
  optimalTemperature
) => {
  storage.save({
    key: keyName,
    id: idNumber,
    data: {
      plantName: plantName,
      image: plantImage,
      irrigation: irrigationCycle,
      fertilizationCycle: fertilizationCycle,
      optimalTemperature: optimalTemperature,
    },
    expires: null,
  });
  console.log("Plant has been sucessfully saved!");
};

export const loadPlantName = (key, id) => {
  storage
    .load({
      key: key,
      id: id,
    })
    .then((res) => {
      console.log(res.plantName);
    })
    .catch((err) => {
      console.warn(err.message);
      switch (err.name) {
        case "NotFoundError":
          console.log("Data has not been found");
          break;
        case "ExpiredError":
          console.log("Data has expired");
          break;
      }
    });
};
export const loadPlantImage = (key, id) => {
  storage
    .load({
      key: key,
      id: id,
    })
    .then((res) => {
      console.log(res.plantName);
    })
    .catch((err) => {
      console.warn(err.message);
      switch (err.name) {
        case "NotFoundError":
          console.log("Data has not been found");
          break;
        case "ExpiredError":
          console.log("Data has expired");
          break;
      }
    });
};
export const loadPlantIrrigation = (key, id) => {
  storage
    .load({
      key: key,
      id: id,
    })
    .then((res) => {
      console.log(res.plantName);
    })
    .catch((err) => {
      console.warn(err.message);
      switch (err.name) {
        case "NotFoundError":
          console.log("Data has not been found");
          break;
        case "ExpiredError":
          console.log("Data has expired");
          break;
      }
    });
};
export const loadPlantFertilization = (key, id) => {
  storage
    .load({
      key: key,
      id: id,
    })
    .then((res) => {
      console.log(res.plantName);
    })
    .catch((err) => {
      console.warn(err.message);
      switch (err.name) {
        case "NotFoundError":
          console.log("Data has not been found");
          break;
        case "ExpiredError":
          console.log("Data has expired");
          break;
      }
    });
};
export const loadPlantTemperature = (key, id) => {
  storage
    .load({
      key: key,
      id: id,
    })
    .then((res) => {
      console.log(res.plantName);
    })
    .catch((err) => {
      console.warn(err.message);
      switch (err.name) {
        case "NotFoundError":
          console.log("Data has not been found");
          break;
        case "ExpiredError":
          console.log("Data has expired");
          break;
      }
    });
};

export const getIds = (key) => {
  storage.getIdsForKey(key).then((ids) => {
    console.log(ids);
  });
};

// export function LoadPlants(){
//   storage.getIdsForKey("Plants").then((ids) => {
//     ids.forEach((ids) => {
//       return <Plant id="0001"></Plant>;
//     });
//   });
// };
