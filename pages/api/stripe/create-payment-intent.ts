import type { NextApiRequest, NextApiResponse } from 'next';
import stripe from '@/lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { amount, currency, email, tx_ref } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency,
      metadata: { email, tx_ref }, // Metadata for your reference
    });

    res.status(200).json({ 
      clientSecret: paymentIntent.client_secret,
      paymentIntent,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment intent', error });
  }
}
