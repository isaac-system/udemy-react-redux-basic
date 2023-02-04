import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const { cartIsVisble } = useSelector((state) => state.ui);

  return (
    <Layout>
      {cartIsVisble && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
