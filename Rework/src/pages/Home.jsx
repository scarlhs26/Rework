import Gordito from '../assets/Home/Recurso6.png'
import imgia from '../assets/Home/Recurso4.png'
import boton from '../assets/Home/Recurso9.png'
import { Navbar } from "../components/navbar.jsx";

export function Home(){
    return(
        <>
        <Navbar />
        <div className='flex flex-col justify-center items-center mt-10'>
            <img className='w-72' src={Gordito} alt="" />
            <h1>¡Bienvenidos!</h1>
            <button >Profesionales en Remoto</button>
            <p className='w-3/4	mt-10 mb-10 text-center	'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, laudantium laborum. Voluptas reprehenderit nobis eligendi debitis, illum, molestias, minima quos corporis ipsa distinctio magni odio beatae deleniti quibusdam quaerat exercitationem.
            </p>
            <div className='flex flex-col justify-center items-center gap-10' >
                <div className='flex flex-col justify-center items-center bg-[#192E4D] w-[25rem] p-10 gap-5 rounded-[15px]'>
                    <img className='w-20' src={imgia} alt="" />
                    <h2 className='text-[#75C5C3]	'>Filtrado inicial po IA</h2>
                    <p className='text-center text-white	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore ipsum vel nam recusandae modi omnis sint commodi animi magni quisquam cumque non consequatur quasi, doloremque laboriosam, blanditiis obcaecati tempore.</p>

                </div>
                <div className='flex flex-col justify-center items-center bg-[#192E4D] w-[25rem] p-10 gap-5 rounded-[15px]'>
                    <img className='w-20' src={imgia} alt="" />
                    <h2 className='text-[#F4B313]'>Entrevistas a tiempo real</h2>
                    <p className='text-center text-white	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore ipsum vel nam recusandae modi omnis sint commodi animi magni quisquam cumque non consequatur quasi, doloremque laboriosam, blanditiis obcaecati tempore.</p>

                </div>
                <div className='flex flex-col justify-center items-center bg-[#192E4D] w-[25rem] p-10 gap-5 rounded-[15px]'>
                    <img className='w-20' src={imgia} alt="" />
                    <h2 className='text-[#E9521D] text-center'>Seleccion de candidatos destacados</h2>
                    <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore ipsum vel nam recusandae modi omnis sint commodi animi magni quisquam cumque non consequatur quasi, doloremque laboriosam, blanditiis obcaecati tempore.</p>

                </div>
            </div>

            <div className='bg-[#39B7B5] w-full flex justify-center p-16' >
                <button> registro <img src={boton} alt="" /> </button>
            </div>
        </div>
        </>
    )
}