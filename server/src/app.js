import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";

const app = express();

//connectDB
// const connectDB = require("../db/connect");
// import authenticateUser from "./middleware/authentication.js";

// Importing routers using ES6 syntax
import EmployeeRouter from "./routes/employeeRoutes.js";
import RolesRouter from "./routes/roleDetailsRoutes.js";
import ClientPersonalDetailsRouter from "./routes/clientPersonalDtlsRoutes.js";
import ClientGuarentorRouter from "./routes/clientGuarentorRoutes.js";
import ClientBankDtlsRouter from "./routes/clientBankDetailsRoutes.js";
import ClientOtherExpensesRouter from "./routes/clientOtherExpensesRoutes.js";
import ClientVerificationIdRouter from "./routes/clientVerificationIdRoutes.js";
import CashFlowRouter from "./routes/cashFlowRoutes.js";
import centerDetailsRouter from "./routes/centerDetailsRoutes.js";

app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/employee", EmployeeRouter);
app.use("/api/v1/roles", RolesRouter);
app.use("/api/v1/client", ClientPersonalDetailsRouter);
app.use("/api/v1/client/guarantor", ClientGuarentorRouter);
app.use("/api/v1/client/bankdetails", ClientBankDtlsRouter);
app.use("/api/v1/client/household", ClientOtherExpensesRouter);
app.use("/api/v1/client/verification", ClientVerificationIdRouter);
app.use("/api/v1/cashFlow", CashFlowRouter);
app.use("/api/v1/center", centerDetailsRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`LenderApp Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
