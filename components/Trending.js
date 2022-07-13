import { DotsHorizontalIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Trending (props) {
    return(
            <div className="hover:bg-white hover:bg-opacity-[0.03] px-4
            py-3 cursor-pointer transition duration-200 ease-out items-center
            justify-between">
                <div className="inline-block lg:w-3/4">
                    <div className="space-y-0.5">
                        <p className="text-[#6e767d] text-xs font-medium">{props.heading}</p>
                    </div>
                    <h6 className="font-bold max-w-[250px] text-sm">{props.description}</h6>
                    <p className="text-[#6e767d] text-xs font-medium max-w-250px">
                        Trending with
                        <span 
                            className="tag"
                        >{props.tag}</span>
                    </p>
                </div>
                <div className="inline-block">
                    <Image
                        src={props.img}
                        width={70}
                        height={70}
                        objectFit="cover"
                        className="rounded-2xl"
                    />
                </div>
            </div>
    );
 }

 export default Trending;