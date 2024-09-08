import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

const Page = async () => {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return (
      <SectionTitle text="No has añadido ningún producto a favoritos todavía" />
    );
  return (
    <div>
      <SectionTitle text="Favoritos" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
};

export default Page;
