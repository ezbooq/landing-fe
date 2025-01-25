import NavLink from "../navLink/NavLink";

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-black mb-4">{title}</h3>
      <div className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
