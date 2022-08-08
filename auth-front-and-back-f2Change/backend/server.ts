const bodyParser = require('body-parser')
import cors from 'cors'; //совместное использование ресурсов между источниками
let express = require('express')

import { services } from './services';

//это будут все методы для работы с сервером

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Mount REST on /api
app.use('/api', services);


const port = process.env.PORT || 8000; //собственно сам порт

//создаем порт, который бцдем слушать
app.listen(port, () =>
    console.log(`Express app listening on localhost:${port}`)
);
