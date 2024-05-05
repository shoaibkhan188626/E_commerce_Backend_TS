import express from 'express';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
import Stripe from 'stripe';
import cors from 'cors';

config({
    path: './.env',
});

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";

export const stripe = new Stripe(stripeKey)
export const myCache = new NodeCache()

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());