import type { Category as CategoryType } from "@/data/roster";
import MemberCard from "./MemberCard";

interface CategoryProps {
  category: CategoryType;
}

export default function Category({ category }: CategoryProps) {
  return (
    <section
      className="category"
      style={{ "--accent": category.accent } as React.CSSProperties}
    >
      <div className="category-heading">
        <span className="category-bar" />
        <h2 className="category-label">{category.label}</h2>
      </div>
      <div className="category-grid">
        {category.members.map((member) => (
          <MemberCard key={member.name} member={member} accent={category.accent} />
        ))}
      </div>
    </section>
  );
}
