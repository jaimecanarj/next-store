"use client";

import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import SelectProductAmount, { Mode } from "./SelectProductAmount";
import { ProductSignInButton, SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { addToCartAction } from "@/utils/actions";

const AddToCart = ({ productId }: { productId: string }) => {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton text="añadir al carrito" className="mt-8" />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
};

export default AddToCart;
