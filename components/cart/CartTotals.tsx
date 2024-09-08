import { formatCurrency } from "@/utils/format";
import { Cart } from "@prisma/client";
import { Card, CardTitle } from "@/components/ui/card";
import FormContainer from "@/components/form/FormContainer";
import { createOrderAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import { Separator } from "@/components/ui/separator";

const CartTotals = ({ cart }: { cart: Cart }) => {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <>
      <Card className="p-8">
        <CartTotalRow label="Subtotal" amount={cartTotal} />
        <CartTotalRow label="Envío" amount={shipping} />
        <CartTotalRow label="Impuestos" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Total" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="Realizar pedido" className="w-full mt-8" />
      </FormContainer>
    </>
  );
};

const CartTotalRow = ({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) => {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
};

export default CartTotals;
