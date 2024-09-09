export default function Main() {
    return (
        <div className="flex flex-wrap w-11/12 mx-auto gap-2.5 mb-8">
            <div className="w-[400px] h-[200px] rounded-lg mx-auto border-2 p-5 hover:border-orange-600 active:border-white-600 mt-5">
                <div className="flex gap-5 my-2.5">
                    <img className="rounded-full w-[40px] h-[40px] inline" src="/services/img6.png" alt="Photo" />
                    <div><b>Viezh Roberb</b>  <p >Warsaw, Poland</p></div>
                    <p className="ml-24 text-yellow-400">4.5 *</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam minima est inventore nesciunt et id. Perferendis ullam id veritatis.</p>
            </div>
            <div className="w-[400px] h-[200px] rounded-lg mx-auto border-2 p-5 hover:border-orange-600 active:border-white-600 mt-5" >
                <div className="flex gap-5 my-2.5">
                    <img className="rounded-full w-[40px] h-[40px] inline" src="/services/img5.png" alt="Photo" />
                    <div><b>Yessica Christy</b>  <p >Shanxi, China</p></div>
                    <p className="ml-24 text-yellow-400">4.5 *</p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
            <div className="w-[400px] h-[200px] rounded-lg mx-auto border-2 p-5 hover:border-orange-600 mt-5">
                <div className="flex gap-5 my-2.5">
                    <img  className="rounded-full w-[40px] h-[40px] inline" src="/services/img7.png" alt="Photo" />
                    <div><b>Kim Young Jou</b>  <p >Seoul, South Korea</p></div>
                    <p className="ml-24 text-yellow-400">4.5 *</p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>

    )
}