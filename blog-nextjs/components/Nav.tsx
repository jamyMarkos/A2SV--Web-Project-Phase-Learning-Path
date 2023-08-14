// Import required styles and components
import navStyles from '@/styles/Nav.module.css';
import Link from 'next/link';

// The navigation component
const Nav = () => {
    return (
        <nav className={`${navStyles.nav} py-5 mb-3`}>
            {/* Website title */}
            <div className='text-[20px] font-bold ml-5'>WebDev Newz</div>
            <ul>
                {/* Home link */}
                <li className='border rounded-md px-2 py-1 border-slate-300 transform hover:scale-110'>
                    <Link href='/'>Home</Link>
                </li>
                {/* About link */}
                {/* <li>
                    <Link href='/about' className='border rounded px-2 py-1 border-slate-300 transform hover:scale-109'>About</Link>
                </li> */}
                {/* Add Blog link */}
                <li>
                    <Link href='/create' className='border rounded-md px-3 py-2 border-slate-300 transform hover:scale-109'>Add Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
