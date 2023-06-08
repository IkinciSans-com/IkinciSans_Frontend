import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useApiProgress } from "../../shared/ApiProgress";
import Spinner from "../toolbox/Spinner";
//import { getProducts, createProduct, updateProduct, removeProduct } from "../../../../IkinciSans_Backend/app/controllers/productController";

const UserOrders = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const pendingApiCall = useApiProgress("get", "/api/products");

  useEffect(() => {
    setLoading(true);
    loadProducts();
  }, []);

  const loadProducts = async () => {
    // Backend'den ürünleri almak için gerekli API çağrısını burada yapabilirsiniz.
    /*
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error while loading products:", error);
    } finally {
      setLoading(false);
    }
    */
    // Örnek olarak, burada sabit bir ürün listesi oluşturuyorum.
    const exampleProducts = [
      { id: 1, name: "Ürün 1" },
      { id: 2, name: "Ürün 2" },
      { id: 3, name: "Ürün 3" },
    ];
    setProducts(exampleProducts);
    setLoading(false);
  };

  const handleDelete = (productId) => {
    // Ürünü silmek için gerekli API çağrısını burada yapabilirsiniz.
    /*
    removeProduct(productId)
    .then(() => {
      // Silme işlemi başarılı olduğunda ürünleri yeniden yükle
      loadProducts();
    })
    .catch((error) => {
      console.error("Error while deleting product:", error);
    });
    */
    // Örnek olarak, ürünü silmek yerine sadece konsola log yazıyorum.
    console.log(`Ürün (${productId}) silindi.`);
  };

  const handleUpdate = (productId) => {
    // Ürünü güncellemek için gerekli API çağrısını burada yapabilirsiniz.
    /*
    updateProduct(productId)
    .then(() => {
      // Güncelleme işlemi başarılı olduğunda ürünleri yeniden yükle
      loadProducts();
    })
    .catch((error) => {
      console.error("Error while updating product:", error);
    });
    */
    // Örnek olarak, ürünü güncellemek yerine sadece konsola log yazıyorum.
    console.log(`Ürün (${productId}) güncellendi.`);
  };

  const { t } = useTranslation();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h3>{t("Takas Etmek İstediğim Ürünler")}</h3>
      {products.length === 0 ? (
        <div className="alert alert-danger text-center">{t("No products found")}</div>
      ) : (
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>{t("Ürün Adı")}</th>
                <th>{t("Sil")}</th>
                <th>{t("Güncelle")}</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      {t("Sil")}
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleUpdate(product.id)}
                    >
                      {t("Güncelle")}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <button className="btn btn-secondary">{t("Ürün Ekle")}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOrders;
