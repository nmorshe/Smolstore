import Link from 'next/link';


const SuccessPage = () => {
    return (
        <div className='page-container'>
            <h2 className='text-large'>Thank you for your purchase!</h2>
            <Link href={'/'}>
                <button>Continue Shopping &rarr;</button>
            </Link>
        </div>
    )
}

export default SuccessPage;
