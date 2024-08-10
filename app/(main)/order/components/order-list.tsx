import { useOrder } from "@/context/OrderContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

const OrderList: React.FC = () => {
  const { cart, removeFromCart, addToCart, submitOrder, deleteFromCart } =
    useOrder();

  return (
    <div className='p-4 bg-white rounded mb-14'>
      {cart.length > 0 ? (
        <div>
          <Table>
            <TableCaption>
              <div>⬆️</div>
              Your current items.
              <Button
                variant={"primary"}
                onClick={submitOrder}
                className='mt-4 flex justify-end'
              >
                Submit Order
              </Button>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>ID</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='font-medium'>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.price}$</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell className='flex items-center'>
                    <Button onClick={() => removeFromCart(item)}>-</Button>
                    <Button onClick={() => addToCart(item)}>+</Button>
                    <Trash2
                      size={20}
                      className='ml-2 cursor-pointer'
                      onClick={() => deleteFromCart(item)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className='text-center text-gray-500'>Your cart is empty</p>
      )}
    </div>
  );
};

export default OrderList;
