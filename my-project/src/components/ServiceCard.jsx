

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <section className="flex-1 sm:w-[350ppx] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl py-16 px-10">
        <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL}
        alt={label}
        width={24}
        height={24}
        />
        </div>
        <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-slate-gray text-lg leading-normal">{subtext}</p>
    </section>
  )
}

export default ServiceCard