import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data/about";

const Grid = () => {
  return (
    <section id="about" className="w-full p-10 dark:bg-neutral-900">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            titleClassName={item.titleClassName}
            img={item.img}
            imgClassName={item.imgClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
