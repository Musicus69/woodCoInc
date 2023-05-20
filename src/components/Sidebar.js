import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "Contact us", path: "/contactUs" },
    { label: "Testimonials", path: "/testimonials" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3 mr-4 text-2xl title"
        // activeClassName="font-bold pl-2"
        //activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <nav>
      {renderedLinks}
    </nav>
  );
}

export default Sidebar;
