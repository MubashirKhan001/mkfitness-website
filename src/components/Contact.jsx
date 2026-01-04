import contactImage from "../assets/image/contact-img01.webp";

function Contact() {

    const userContact = (e) => {
        e.preventDefault();
        const form = e.target
        console.log("form Detail", {
            name: form[0].value,
            email: form[1].value,
            phone: form[2].value,
            comment: form[3].value,
        });

    };

    return (
        <>
            <div className="bg-cover bg-center h-200 pt-30 flex justify-around items-center "
                style={{ backgroundImage: `url(${contactImage})` }}>
                <div className="flex flex-col  gap-y-10">
                    <h1 className="text-orange-600  text-2xl font-bold">Contact Us</h1>
                    <h1 className="text-white text-3xl font-bold">GET IN TOUCH</h1>
                    <div className="flex justify-center items-center gap-x-4">
                        <div className="flex justify-center items-center text-orange-500 bg-[#363636] w-[30px] h-[30px] rounded-[50%] p-6 text-[20px]">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="text-[#a9a9a9]">
                            <h1>333 Middle Winchendon Rd, Rindge,</h1>
                            <h1>NH 03461</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-4 -scroll-ps-6 snap-x -ml-15">
                        <div className=" flex justify-center items-center text-orange-500 p-6  w-[30px] h-[30px] rounded-[50%]  bg-[#363636] text-[20px]">
                            <i className="fa-solid fa-mobile-button"></i>
                        </div>
                        <div className="flex justify-center items-center gap-x-2 text-[#a9a9a9]">
                            <h1>125-711-811</h1>
                            <h1>125-668-886</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-4 -ml-5">
                        <div className="text-orange-500  flex justify-center items-center  bg-[#363636] w-[30px] h-[30px] rounded-[50%] p-6 text-[20px]">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h1 className="text-[#a9a9a9]">Support.gymcenter@gmail.com</h1>
                    </div>
                </div>
                <form
                    className="flex flex-col justify-center items-center gap-y-4"
                    onSubmit={userContact}>
                    <input
                        type="text"
                        placeholder="Name"
                        className=" border border-gray-300 rounded shadow-sm w-full p-4 text-white placeholder:[#c4c4c4]"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className=" border border-gray-300 rounded shadow-sm w-full p-4 text-white placeholder:[#c4c4c4]"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className=" border border-gray-300 rounded shadow-sm w-full p-4 text-white placeholder:[#c4c4c4]"
                        required
                    />
                    <textarea
                        rows="4"
                        cols="80"
                        placeholder="Comment"
                        className="placeholder:text-[#c4c4c4] p-3 text-sm text-white border border-gray-300 rounded-md shadow-sm  resize-none">
                    </textarea>
                    <button
                        type="submit"
                        className="text-white bg-orange-500 font-medium w-full p-3 rounded cursor-pointer">
                        SUBMIT
                    </button>
                </form >
            </div>
            <div className="bg-[#0b0e0f] h-[400px] flex justify-around items-center">
                <div className="border-5 border-orange-400 text-white h-52 w-52 shadow-xl bg-orange-500 p-4 rounded-sm  flex justify-center items-center">
                    <i className="fa-solid fa-user  text-8xl"></i>
                </div>
                <div className="border-5 text-white border-orange-400  h-52 w-52 shadow-xl bg-orange-500 p-4 rounded-sm  flex justify-center items-center">
                    <i className="fa-solid fa-phone text-8xl"></i>
                </div>
                <div className="border-5 border-orange-400  h-52 w-52 shadow-xl bg-orange-500 p-4   rounded-sm flex justify-center items-center text-white">
                    <i className="fa-solid fa-envelope text-8xl"></i>
                </div>
            </div>
        </>
    )
};
export default Contact;