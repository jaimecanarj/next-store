import SectionTitle from "@/components/global/SectionTitle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchUserOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";

const Page = async () => {
  const orders = await fetchUserOrders();
  return (
    <>
      <SectionTitle text="Tus pedidos" />
      <Table>
        <TableCaption>Pedidos : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Productos</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Impuestos</TableHead>
            <TableHead>Envío</TableHead>
            <TableHead>Fecha</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const { id, products, orderTotal, tax, shipping, createdAt } =
              order;
            return (
              <TableRow key={id}>
                <TableCell>{products}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{formatCurrency(tax)}</TableCell>
                <TableCell>{formatCurrency(shipping)}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Page;
