import type { WithChildren } from '../../../model/react';

interface AdminLinkProps {
    href: string;
    title: string;
}

const AdminLink: React.FC<WithChildren<AdminLinkProps>> = ({ children, href, title }) => (
  <a
    href={href}
    className="border w-1/4 border-gray-300 opacity-95 text-gray-500 py-5 flex flex-col items-center transition-all duration-150 group hover:bg-primary hover:border-primary"
  >
    {children}
    <p className='mt-5 mb-2 group-hover:text-white'>{title}</p>
  </a>
);
export default AdminLink;
