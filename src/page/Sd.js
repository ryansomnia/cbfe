import React from 'react'
import Footer from '../component/Footer'
import Napbar from '../component/Napbar'
export default function Sd() {
    return (
        <div>
            <section className='bg-white overflow-hidden pt-10'>
                <div id="sejarah" className=" mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
                    <div className="w-full lg:w-6/12 pb-12">
                        <img className="w-full h-full" src="img/belajar.JPG" alt="A group of People" />
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-2">Visi </h1>
                        <p className="font-normal text-base leading-6 text-gray-800 ">Terwujudnya Sekolah yang unggul dalam berakhlak mulia, berprestasi, mandiri, dan Nasionalis.</p>
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-2 mt-5 ">Misi </h1>
                        <ul className='list-disc'>
                            <li> Menumbuhkan penghayatan dan pengalaman ajaran agama yang dianut.</li>
                            <li>Mengembangkan kurikulum sekolah sesuai dengan standar nasional.</li>
                            <li>Mengembangkan proses pembelajaran yang aktif, kreatif, dan inovatif.</li>
                            <li>Mengembangkan sistem penilaian autentik melalui pendekatan scientifik.</li>
                            <li>Meningkatkan kualitas pendidik dan tenaga pendidik.</li>
                            <li>Meningkatkan prestasi baik akademik maupun non akademik. </li>
                        </ul>
                    </div>

                </div>
                <div id="sejarah" className="mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Sejarah SD Cerdas Bangsa</h1>
                        <p className="font-normal text-base leading-6 text-gray-800 ">Sejarah singkat SD Cerdas bangsa,
                            SD Cerdas Bangsa didirikan Pada tanggal 01 Juli 2007, berdasarkan izin diknas Kabupaten Bogor Nomor : 421.2/243-Disdik/2010. Dengan Akreditasi A. Dan didirikan oleh Bapak Hendrawan. Tujuan didirikannya SD Cerdas Bangsa ini adalah untuk ikut berperan aktif mencerdaskan kehidupan bangsa dan negara khususnya di bidang pendidikan. Serta memajukan Desa cimandala dengan sarana pendidikan Sekolah Dasar.

                        </p>
                        <p className='mt-5'>
                            Sekolah Dasar (SD) memegang peranan yang sangat penting untuk mencapai suksesnya program pendidikan nasional wajib belajar 12 Tahun. mengingat strategisnya kedudukan pendidikan nasional dalam peningkatan kualitas sumber daya manusia Indonesia, SD Cerdas Bangsa sebagai salah satu sekolah yang peduli terhadap tercapainya tujuan pendidikan nasional. Peningkatan mutu pendidikan diarahkan untuk meningkatkan kualitas manusia Indonesia seutuhnya melalui olahhati, olah pikir, olahrasa, dan olahraga agar memiliki daya saing dalam menghadapi tantangan global.
                        </p>

                    </div>
                    <div className="w-full lg:w-6/12 ">
                        <img className="w-full h-full" src="/img/SD.JPG" alt="A group of People" />
                    </div>
                </div>
                <div id="sejarah" className="mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
                    <div className="w-full lg:w-6/12 ">
                        <img className="w-full h-full" src="/img/doaSD.JPG" alt="A group of People" />
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        {/* <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Sejarah SD Cerdas Bangsa</h1> */}
                        <p className="font-normal text-base leading-6 text-gray-800 ">Sejak didirikan antusias dari masyarakat sekitar begitu besar, bahkan bukan hanya masyarakat sekitar tetapi masyarakat dari luar desa Cimandala, yang jaraknya lumayan jauh juga ikut mendaftarkan anak - anaknya untuk di didik di SD Cerdas Bangsa. Dengan dukungan fasilitas yang memadai seperti Ruang kelas, Ruang Lab Komputer, Kelas dengan Full AC, LCD Proyektor, Perpustakaan, Ruang UKS,  Ekstrakulikuler, Lingkungan yang asri, serta lokasinya yang mudah di jangkau oleh kendaraan umum membuat peserta didik tahun ke tahun terus bertambah. Hingga tahun 2022 ini, SD Cerdas Bangsa telah meluluskan 10 angkatan.
                        </p>


                    </div>

                </div>
            </section>

            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div class="text-center pb-12">
                    {/* <h2 class="text-base font-bold text-indigo-600">
            We have the best equipment
        </h2> */}
                    <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        Tenaga Pengajar
                    </h1>
                </div>
                <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src='/img/tiarma.png' alt="photo" />
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-gray-700 font-bold mb-2">Tiarma Rosmauli S,Kom., S.Pd</p>
                        <p class="text-base text-gray-400 font-normal">Kepala Sekolah
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/garina.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Garina Austin S,Pd</p>
                            <p class="text-base text-gray-400 font-normal">Wali Kelas 1</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/fani.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Fanilisa Ernawati, S.Pd</p>
                            <p class="text-base text-gray-400 font-normal">Wali Kelas 2</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/ratna.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Ratna Juita S.Pd</p>
                            <p class="text-base text-gray-400 font-normal">Wali Kelas 3</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/marta.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Marta Simanullang, S.Pd</p>
                            <p class="text-base text-gray-400 font-normal">Wali Kelas 4</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/dame.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Dame Romiuli S, S.Pd</p>
                            <p class="text-base text-gray-400 font-normal">Wali Kelas 5</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/janson.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Janson Sitanggang, SE</p>
                            <p class="text-base text-gray-400 font-normal">Wali Kelas 6</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/yosephine.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Yosephine Margriet, S.Pd</p>
                            <p class="text-base text-gray-400 font-normal">Guru Bahasa Inggris</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/intan.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Intan Medina, S.Kom</p>
                            <p class="text-base text-gray-400 font-normal">Guru TIK</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/janson.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Janson Sitanggang, SE</p>
                            <p class="text-base text-gray-400 font-normal">Wali Kelas 6</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
