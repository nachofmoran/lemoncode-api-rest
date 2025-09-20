import { createRestApiServer } from "#core/servers/index.js";
import { houseApi } from "#pods/house/house.api.js";
import { ENV } from "#core/constants/index.js";

const app = createRestApiServer();

app.get("/", (req, res) => {
  res.send("My awesome house portal");
});

app.use("/api/houses", houseApi);

app.listen(ENV.PORT, () => {
  console.log(`Server ready at port ${ENV.PORT}`);
});
