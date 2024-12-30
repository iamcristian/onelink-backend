import { Router } from "express";
import { createAccount, login } from './handlers/authUser';

const routerAuth = Router();

routerAuth.post("/auth/register", createAccount);
routerAuth.post("/auth/login", login);

export default routerAuth;