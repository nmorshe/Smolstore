import Link from 'next/link';


const NotFound = () => {
    return (
        <div className='page-container'>
            <h2>Page not found</h2>
            <p className='text-large'>404</p>
            <Link href={'/'}>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default NotFound;
