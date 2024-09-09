import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
export default function Main() {
    return (
        <div className="w-4/5 mx-auto flex flex-wrap gap-5 p-8">
            <div className="w-[350px] h-[150px] m-auto flex justify-center items-center gap-8 text-lg">
                <div className="text-4xl">
                    <IoPerson />
                </div>
                <div>
                    <b>90+</b>
                    <p>Clients</p>
                </div>
            </div>
            <div className="w-[350px] h-[150px] m-auto flex justify-center items-center gap-8 text-lg border-l-4 border-r-4 border-red-600">

                <div className="text-4xl">
                    <FaLocationDot />
                </div>
                <div>
                    <b>30+</b>
                    <p>Countries</p>
                </div>
            </div>
            <div className="w-[350px] h-[150px] m-auto flex justify-center items-center gap-8 text-lg">

                <div className="text-4xl">
                    <FaHamburger />
                </div>
                <div>
                    <b>50+</b>
                    <p>Projects</p>
                </div>
            </div>
        </div>

    )
}