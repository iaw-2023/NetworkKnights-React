'use client' ;
import DonationForm from "../components/DonationForm";
import CardPaymentBrick from "../components/MercadoPago";
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react';




function donar() {
  initMercadoPago('TEST-6b3952a1-158a-46b6-8524-ddf57654222e');
  return(
    <CardPayment
      initialization={{ amount: 100 }}
      onSubmit={async (param) => {
        console.log(param);
      }}
    />
  )
}
export default donar;