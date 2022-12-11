import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MDn8KSAQ44EWiXOdKyPF0d030pYxlt2IFalpIQfR502CUYToSDt4qD4hxu0YibpaKWKOhwnjyphKFnzy0OC6d5R00gFzuliek"
    );
  }

  return stripePromise;
};

export default getStripe;
