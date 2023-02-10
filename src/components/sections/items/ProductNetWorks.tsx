import Mail from '../../icons/Mail';
import Twitter from '../../icons/Twitter';
import NetWorkLink from './NetworkLink';

const ProductNetWorks: React.FC = () => (
  <article className="m-auto w-11/12 flex items-center justify-center gap-5 mt-4">
    <NetWorkLink link="#">
      <Twitter className="w-4 text-gray-400 group-hover:text-primary" />
    </NetWorkLink>
    <NetWorkLink link="#">
      <Mail className="w-4 text-gray-400 group-hover:text-primary" />
    </NetWorkLink>
  </article>
);
export default ProductNetWorks;
