import React from 'react';
import ArrowDown from '../../icons/ArrowDown';





const HeaderBottom: React.FC = () => (

    <div className='mt-1 border-b border-gray-300'>
        <ul className='uppercase text-1xs text-gray-400 tracking-widest flex justify-center'>
          <li className='hover:text-primary border-b-4 border-b-white hover:border-yellowmenu transition-all duration-300'>
            <a href='https://www.medicapanamericana.com/es/general/libros' className='h-16 flex items-center'>libros
            <ArrowDown strokeWidth={4} className='ml-2 w-4 h-4'/>
            </a>
          </li>
          <li className='ml-12 hover:text-primary border-b-4 border-b-white hover:border-yellowmenu transition-all duration-300'>
            <a href='https://www.medicapanamericana.com/es/general/formacion' className='h-16 flex items-center'>formación
            <ArrowDown strokeWidth={4} className='ml-2 w-4 h-4'/>
            </a>
          </li>
          <li className='ml-12 hover:text-primary border-b-4 border-b-white hover:border-yellowmenu transition-all duration-300'>
            <a href='https://www.medicapanamericana.com/es/oposiciones' className='h-16 flex items-center'>oposiciones
            <ArrowDown strokeWidth={4} className='ml-2 w-4 h-4'/>
            </a>
          </li>
          <li className='ml-12 hover:text-primary border-b-4 border-b-white hover:border-yellowmenu transition-all duration-300'>
            <a href='https://www.medicapanamericana.com/es/promir/inicio' className='h-16 flex items-center'>promir</a>
          </li>
          <li className='ml-12 hover:text-primary border-b-4 border-b-white hover:border-yellowmenu transition-all duration-300'>
            <a href='https://www.medicapanamericana.com/es/eureka' className='h-16 flex items-center'>eureka</a>
          </li>
        </ul>
      </div>

);
  
  export default HeaderBottom;