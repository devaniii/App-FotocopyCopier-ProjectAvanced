import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { MercadoPagoConfig, Preference } from 'mercadopago';
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}); 

app.post("/create_preference"), async (req,res) => {
  try {
    const body = {
      items:[{
        title: req.body.title,
        quantity: Number(req.body.quantity),
        unit_price: Number(req.body.price),
        currency_id: "ARS",
      }],
      back_urls: {
        success:"https://github.com/mercadopago/checkout-payment-sample",
        failure:"https://github.com/mercadopago/checkout-payment-sample",
        pending:"https://github.com/mercadopago/checkout-payment-sample",
      },
      auto_return:"approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({body});
    res.json({
      id: result.id,
    });
  } catch {
    console.log(error)
    res.status(500).json({
      error: "Error al crear la preferencia"
    })
  }
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
