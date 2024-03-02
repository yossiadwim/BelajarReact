import Button from "../Elements/Button";


const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="max-w-80 mt-10 m-5 border-2 rounded overflow-hidden shadow-sm flex flex-col justify-between ">
            {children}
        </div>
    );
}

const Image = (props) => {
    const { image } = props;
    return (
        <img className="w-full" src={image} alt="Placeholder" />

    );
}

const Body = (props) => {
    const { title, children } = props;
    return (
        <div className="px-6 py-4">
            <div className="font-bold text-xl">{title}</div>
            <p className="text-gray-700 text-balance">
                {children}
            </p>
        </div>
    );
};

const Footer = (props) => {
    const { price, handleAddToCart, id} = props;
    return (
        <div className="px-5 mb-5">
            <div className="grid grid-cols-1">
                <div className="">
                    <p className="text-xl mx-auto font-bold">Rp {(price).toLocaleString('id-ID',{styles:'currency', currency:'IDR'})}</p>
                </div>
                <div className="mt-3 flex justify-center">
                    <Button classname="bg-blue-500 text-white text-sm w-40" onClick={()=>handleAddToCart(id)}>
                        Add to Chart</Button>
                </div>

            </div>
        </div>
    );

}

CardProduct.Image = Image;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;