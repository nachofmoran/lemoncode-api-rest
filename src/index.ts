import { createRestApiServer, dbServer } from "#core/servers/index.js";
import { houseApi } from "#pods/house/index.js";
import { securityApi } from "#pods/security/index.js";
import { ENV } from "#core/constants/index.js";
import { authenticationMiddleware } from "#core/security/index.js";

const app = createRestApiServer();

app.get("/", (req, res) => {
  res.send("My awesome house portal");
});

app.use("/api/security", securityApi);
app.use("/api/houses", authenticationMiddleware, houseApi);

app.listen(ENV.PORT, async () => {
  if (!ENV.IS_API_MOCK) {
    await dbServer.connect(ENV.MONGODB_URL);
    console.log("Running DataBase");
  } else {
    console.log("Running Mock API");
  }
  console.log(`Server ready at port ${ENV.PORT}`);
});
