import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-10-28.acacia",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") { // Allow POST requests
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { paymentIntentId } = req.body;

  if (!paymentIntentId) {
    return res.status(400).json({ message: "Payment Intent ID is required" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId as string);

    console.log({ paymentIntent });

    if (paymentIntent.status === "succeeded") {
      res.status(200).json({ status: "success", paymentIntent });
    } else {
      res.status(200).json({ status: "pending", paymentIntent });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ message: "Error verifying payment", error });
  }
}
