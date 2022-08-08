let express = require('express')

import { authRouter } from './login';
import { userRouter } from './user';

export const services = express.Router();

services.use('/auth', authRouter);
services.use('/users', userRouter);
