import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px]"/>
        <div className="mt-8 flex justify-start gap-3">
            <img
            src={star}
            alt="star"
            width={24}
            height={24}/>
            <p className="text-xl font-montserrat text-slate-gray leading-normal">(4.6)</p>
        </div>
        <h2 className="text-2xl font-semibold font-palanquin mt-2 leading-normal">{name}</h2>
        <p className="mt-2 font-semibold font-montserrat leading-normal text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard