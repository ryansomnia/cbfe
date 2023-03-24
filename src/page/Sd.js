import React from 'react'
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
            {/* <section class="text-gray-600 body-font mt-10">
                <div class="container px-5 mx-auto">
                    <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                    Struktur Organisasi
                    </h1>
                        <p class="mt-3 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Berikut Struktur Organisasi dari SD Cerdas Bangsa</p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col text-center items-center">
                        <img className='h-44 w-44 rounded-full' src='/img/hendrawan.png' alt=''></img>
                        <h4 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Hendrawan</h4>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Kepala Yayasan</p>
                    </div>

                    <div class="p-4 flex flex-col text-center items-center">
                        <img className='h-44 w-44 rounded-full' src='/img/erly.png' alt=''></img>
                        <h4 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Yap Erly</h4>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Sekretaris Yayasan</p>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">


                        <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
                            <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0">
                                <img class="object-center object-cover rounded-full h-44 w-44" src='/img/tiarma.png' alt="photo" />
                            </div>
                            <p class="text-xl text-gray-700 font-bold mb-2">Tiarma Rosmauli S,Kom., S.Pd</p>
                        <p class="text-base text-gray-400 font-normal">Kepala Sekolah</p>
                        </div>
                        
                        <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
                            <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0">
                                <img className='h-44 w-44 rounded-full' src='/img/gurutk2.png' alt=''></img>
                            </div>
                            <h4 class="sm:text-xl text-2xl font-medium title-font text-gray-900">Anastasia A. Winarni S. Pd</h4>
                            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Guru TK A</p>
                        </div>




                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">


<div class="p-4 md:w-1/2 flex flex-col text-center items-center">
    <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0">
        <img class="object-center object-cover rounded-full h-44 w-44" src='/img/tiarma.png' alt="photo" />
    </div>
    <p class="text-xl text-gray-700 font-bold mb-2">Tiarma Rosmauli S,Kom., S.Pd</p>
<p class="text-base text-gray-400 font-normal">Kepala Sekolah</p>
</div>

<div class="p-4 md:w-1/2 flex flex-col text-center items-center">
    <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0">
        <img className='h-44 w-44 rounded-full' src='/img/gurutk2.png' alt=''></img>
    </div>
    <h4 class="sm:text-xl text-2xl font-medium title-font text-gray-900">Anastasia A. Winarni S. Pd</h4>
    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Guru TK A</p>
</div>




</div>

                </div>
            </section> */}
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
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/asri.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Asri Febriyanti</p>
                            <p class="text-base text-gray-400 font-normal">Guru Bahasa Sunda</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/calvin.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Calvin Yehezkiel</p>
                            <p class="text-base text-gray-400 font-normal">Guru Olahraga</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/afung.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Fransiska </p>
                            <p class="text-base text-gray-400 font-normal">Guru Bahasa Mandarin</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src='/img/herodes.png' alt="photo" />
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Herodes Lenamah, S.Th</p>
                            <p class="text-base text-gray-400 font-normal">Guru Pendidikan Agama Kristen</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-white text-gray-900 body-font mt-5">
                <div class="container px-5 mx-auto py-5">
                    <div class="text-center mb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 ">Fasilitas SD Cerdas Bangsa</h1>
                        {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Berikut Struktur Organisasi dari TK Cerdas Bangsa</p> */}
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>



                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">


                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="bg-indigo-100 h-44 w-72 rounded-md  inline-flex items-center justify-center flex-shrink-0">
                                <img className='h-44 w-72 rounded-md' src='/img/lt3.JPG' alt=''></img>
                            </div>
                            <h4 class="sm:text-xl text-2xl font-medium title-font mt-2 text-gray-900">Hall Lantai 3</h4>
                            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Guru TK B</p> */}
                        </div>
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="bg-indigo-100 h-44 w-72 rounded-md  inline-flex items-center justify-center flex-shrink-0">
                                <img className='h-44 w-72 rounded-md' src='/img/perpus.JPG' alt=''></img>
                            </div>
                            <h4 class="sm:text-xl text-2xl font-medium title-font mt-2 text-gray-900">Perpustakaan</h4>
                            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Kepala Sekolah</p> */}
                        </div>
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="bg-indigo-100 h-44 w-72 rounded-md  inline-flex items-center justify-center flex-shrink-0">
                                <img className='h-44 w-72 rounded-md' src='/img/lapangan.JPG' alt=''></img>
                            </div>
                            <h4 class="sm:text-xl text-2xl font-medium title-font mt-2 text-gray-900">Lapangan Olah Raga</h4>
                            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Guru TK B</p> */}
                        </div>


                        <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
                            <div className="bg-indigo-100 h-44 w-72 rounded-md  inline-flex items-center justify-center flex-shrink-0">
                                <img className='h-44 w-72 rounded-md' src='/img/ruangkomputer.JPG' alt=''></img>
                            </div>
                            <h4 class="sm:text-xl text-2xl font-medium title-font mt-2 text-gray-900">Lab Komputer</h4>
                            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Guru TK B</p> */}
                        </div>
                        <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
                            <div className="bg-indigo-100 h-44 w-72 rounded-md  inline-flex items-center justify-center flex-shrink-0">
                                <img className='h-44 w-72 rounded-md' src='img/uks.JPG' alt=''></img>
                            </div>
                            <h4 class="sm:text-xl text-2xl font-medium title-font mt-2 text-gray-900">UKS</h4>
                            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Kepala Sekolah</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
