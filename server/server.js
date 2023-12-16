const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
require('dotenv').config();
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Fix the typo here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/pay', async (req, res) => {
  console.log(req.body.token);
  try {
    const charge = await Stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd',
    });
    console.log(charge);
    res.status(200).send('Payment successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Payment failed');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
