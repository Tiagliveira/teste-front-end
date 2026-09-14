import { useState } from 'react';
import {
  Banner,
  BrandList,
  CarrouselProducts,
  Categories,
  Footer,
  Header,
  Modal,
  Newsletter,
  PartnerBanners
} from "./components/index";
import type { Product } from "./types/types";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenBannerProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenCardProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='containerGeneral'>
      <Header />
      <Banner onOpenModal={handleOpenBannerProduct} />
      <Categories />

      <CarrouselProducts
        hasTabs={true}
        onOpenModal={handleOpenCardProduct}
      />

      <PartnerBanners />

      <CarrouselProducts
        sectionId="ver-todos"
        hasSimpleLink={true}
        onOpenModal={handleOpenCardProduct}
      />

      <PartnerBanners />
      <BrandList />

      <CarrouselProducts
        sectionId="ver-todos"
        hasSimpleLink={true}
        onOpenModal={handleOpenCardProduct}
      />

      <Newsletter />
      <Footer />

      <Modal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}