
const breadCrumbsLink = ["Home", "Sale", "Shoes"];

function BreadCrumbs() {
  return (
    <nav className="text-custom-gray-700  text-sm flex gap-2">
      {breadCrumbsLink.map((link) => (
        <a
          href={`/${link}`}
          className="before:content-['/'] hover:text-custom-gray-900 before:text-custom-gray-300 before:mr-2 first:before:content-none"
          key={link}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

export default BreadCrumbs;
