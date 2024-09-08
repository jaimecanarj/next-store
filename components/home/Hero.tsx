import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Una forma diferente de comprar
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores
          qui, doloribus perspiciatis tempora id unde repudiandae repellendus
          praesentium voluptas.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Productos</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
