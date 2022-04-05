import { Route, Routes } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'
import ContactData from './containers/Checkout/ContactData/ContactData';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>

          <Route path='orders' element={<Orders />} />
          <Route path='/checkout' element={<Checkout />}>
            <Route path="contact-data" element={<ContactData />} />
          </Route>
          <Route path='/' exact element={<BurgerBuilder />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
