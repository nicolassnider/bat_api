import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

const port = process.env.PORT || 3000;

app.use(
	cors({
		credentials: true,
	})
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

const MONGO_URL = `mongodb+srv://nicolassnider:XliSFWtjPASsXcbH@cluster0.tcsvlhg.mongodb.net/`;
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('connected', () => {
	console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
	console.log(`Mongoose connection error: ${err}`);
});
app.use('/', router());
