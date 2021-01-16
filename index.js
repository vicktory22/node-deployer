require("dotenv").config();
const polka = require("polka");
const { json } = require("body-parser");
const logger = require("./middleware/logger");
const { deploy } = require("./services/deployer");
const config = require("./config");

const app = polka();

app.use(json(), logger);

app.post("/deploy", async (req, res) => {
    if (req.body.ref !== config.branch_name) {
        res.end("OK");
        return;
    }

    try {
        deploy(req.body.repository.name);
        req.log.info(`Deployment of ${req.body.repository.name} successful.`);
        res.end("OK");
    } catch (err) {
        req.log.error(err);
        res.statusCode = 500;
        res.end("Internal Server Error");
    }
});

app.listen(8888, (err) => {
    if (err) throw err;
});
