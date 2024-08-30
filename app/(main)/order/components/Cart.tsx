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
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";

const Cart: React.FC = () => {
  const { cart, removeFromCart, addToCart, submitOrder, deleteFromCart } =
    useOrder();

  return (
    <div className='p-4 bg-white rounded mb-14'>
      {cart.length > 0 ? (
        <div>
          <Table>
            <TableCaption>
              <div>⬆️</div>
              <div className='flex items-center justify-center'>
                Your current items
                <ShoppingCart size={16} className='ml-1' />
              </div>
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
                  <TableCell>
                    <div className='flex justify-between items-center'>
                      {item.description}
                      {
                        <Image
                          alt='item'
                          src={item.imgSrc || "/no-image.jpg"}
                          width={50}
                          height={50}
                        />
                      }
                    </div>
                  </TableCell>
                  <TableCell>{item.price}$</TableCell>
                  <TableCell>{item.quantity}</TableCell>
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
        <div className='flex items-center justify-center '>
          <p className='text-center text-gray-500'>Your cart is empty</p>
          <ShoppingCart size={16} className='ml-1' />
        </div>
      )}
    </div>
  );
};

export default Cart;
