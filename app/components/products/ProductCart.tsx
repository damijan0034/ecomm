"use client"

import { formatPrice } from "@/app/utils/FormatPrice"
import { truncateText } from "@/app/utils/TruncateText"
import { Rating } from "@mui/material"
import Image from "next/image"

interface ProductCartProps{
    data:any
}

const ProductCart:React.FC<ProductCartProps> = ({data}) => {
  console.log(data)
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px]
                border-slate-200 bg-slate-50 rounded-sm p-2
                transition hover:scale-105 text-center text-sm
    ">
        <div className="flex flex-col items-center w-full gap-1">
            <div className="relative aspect-square w-full h-full overflow-hidden">
                <Image fill src={data.images[0].image} 
                alt={truncateText(data.name)}
                
                className=" object-cover w-full h-full"
                />
            </div>
            <div className="mt-4">
              {truncateText(data.name)}
            </div>
            <div>
              <Rating />
            </div>
            <div>{data.reviews.length} {data.reviews.length === 1 ? "review" :
             "reviews"}
             </div>
            <div className="font-semibold">
              {formatPrice(data.price)}
            </div>
        </div>
    </div>
  )
}

export default ProductCart