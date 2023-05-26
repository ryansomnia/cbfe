import React from 'react'

export default function Footer() {
    return (
        <div className='post' style={{bottom: 0, width: '100%'}}>

            {/* FOORTER START */}
            <section className=" bg-white overflow-hidden">
                    <hr/>
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between items-center ">

                        <div className="w-auto p-2">
                            <p className="text-sm text-gray-600 font-medium">Copyright &copy; {(new Date().getFullYear())} Yayasan Cerdas Bangsa. All Rights Reserved</p>
                        </div>
                        <div className="w-auto p-4">
                            <div className="flex flex-wrap -m-4">
                                <div className="w-auto p-4">
                                    <a className="text-blueGray-400 hover:text-blueGray-500" href="facebook.com/profile.php?id=100092733643908">
                                        <svg width="9" height="16" viewbox="0 0 9 16" fill="none">
                                            <path d="M5.68503 5.32446L5.68503 3.82446C5.68503 3.17446 5.84293 2.82446 6.94819 2.82446H8.31661V0.324463L6.21135 0.324463C3.57977 0.324463 2.52714 1.97446 2.52714 3.82446V5.32446H0.421875L0.421875 7.82446H2.52714L2.52714 15.3245H5.68503L5.68503 7.82446H8.00082L8.31661 5.32446H5.68503Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="w-auto p-4">
                                    <a className="text-indigo-600 hover:text-indigo-700" href="https://www.instagram.com/tk_sd_cerdasbangsa/">
                                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none">
                                            <path d="M7.81641 0.324463C5.78109 0.324463 5.52516 0.333838 4.72547 0.369463C3.92578 0.406963 3.38109 0.532588 2.90391 0.718213C2.40337 0.906481 1.94999 1.2018 1.57547 1.58353C1.19398 1.95824 0.898694 2.41156 0.710156 2.91196C0.524531 3.38821 0.397969 3.93384 0.361406 4.73071C0.325781 5.53228 0.316406 5.78728 0.316406 7.8254C0.316406 9.86165 0.325781 10.1167 0.361406 10.9163C0.398906 11.7151 0.524531 12.2598 0.710156 12.737C0.902344 13.2301 1.15828 13.6482 1.57547 14.0654C1.99172 14.4826 2.40984 14.7395 2.90297 14.9307C3.38109 15.1163 3.92484 15.2429 4.72359 15.2795C5.52422 15.3151 5.77922 15.3245 7.81641 15.3245C9.85359 15.3245 10.1077 15.3151 10.9083 15.2795C11.7061 15.242 12.2527 15.1163 12.7298 14.9307C13.2301 14.7424 13.6831 14.447 14.0573 14.0654C14.4745 13.6482 14.7305 13.2301 14.9227 12.737C15.1073 12.2598 15.2339 11.7151 15.2714 10.9163C15.307 10.1167 15.3164 9.86165 15.3164 7.82446C15.3164 5.78728 15.307 5.53228 15.2714 4.73165C15.2339 3.93384 15.1073 3.38821 14.9227 2.91196C14.7341 2.41155 14.4389 1.95822 14.0573 1.58353C13.6829 1.20166 13.2295 0.906318 12.7289 0.718213C12.2508 0.532588 11.7052 0.406025 10.9073 0.369463C10.1067 0.333838 9.85266 0.324463 7.81453 0.324463H7.81734H7.81641ZM7.14422 1.67634H7.81734C9.81984 1.67634 10.057 1.6829 10.8473 1.71946C11.5786 1.75228 11.9761 1.87509 12.2405 1.97728C12.5902 2.11321 12.8405 2.27634 13.103 2.53884C13.3655 2.80134 13.5277 3.05071 13.6636 3.40134C13.7667 3.66478 13.8886 4.06228 13.9214 4.79353C13.958 5.58384 13.9655 5.82103 13.9655 7.82259C13.9655 9.82415 13.958 10.0623 13.9214 10.8526C13.8886 11.5838 13.7658 11.9804 13.6636 12.2448C13.5434 12.5704 13.3514 12.8649 13.102 13.1063C12.8395 13.3688 12.5902 13.531 12.2395 13.667C11.977 13.7701 11.5795 13.892 10.8473 13.9257C10.057 13.9613 9.81984 13.9698 7.81734 13.9698C5.81484 13.9698 5.57672 13.9613 4.78641 13.9257C4.05516 13.892 3.65859 13.7701 3.39422 13.667C3.06844 13.5469 2.77371 13.3553 2.53172 13.1063C2.28211 12.8645 2.0899 12.5698 1.96922 12.2438C1.86703 11.9804 1.74422 11.5829 1.71141 10.8517C1.67578 10.0613 1.66828 9.82415 1.66828 7.82071C1.66828 5.81821 1.67578 5.58196 1.71141 4.79165C1.74516 4.0604 1.86703 3.6629 1.97016 3.39853C2.10609 3.04884 2.26922 2.79853 2.53172 2.53603C2.79422 2.27353 3.04359 2.11134 3.39422 1.9754C3.65859 1.87228 4.05516 1.7504 4.78641 1.71665C5.47828 1.68478 5.74641 1.6754 7.14422 1.67446V1.67634ZM11.8205 2.92134C11.7023 2.92134 11.5852 2.94462 11.4761 2.98985C11.3669 3.03508 11.2676 3.10137 11.1841 3.18494C11.1005 3.26851 11.0342 3.36773 10.989 3.47692C10.9437 3.58612 10.9205 3.70315 10.9205 3.82134C10.9205 3.93953 10.9437 4.05656 10.989 4.16575C11.0342 4.27495 11.1005 4.37416 11.1841 4.45773C11.2676 4.54131 11.3669 4.6076 11.4761 4.65283C11.5852 4.69806 11.7023 4.72134 11.8205 4.72134C12.0592 4.72134 12.2881 4.62652 12.4569 4.45773C12.6256 4.28895 12.7205 4.06003 12.7205 3.82134C12.7205 3.58264 12.6256 3.35372 12.4569 3.18494C12.2881 3.01616 12.0592 2.92134 11.8205 2.92134ZM7.81734 3.97321C7.30647 3.96524 6.79912 4.05898 6.32482 4.24897C5.85053 4.43896 5.41876 4.7214 5.05467 5.07986C4.69058 5.43832 4.40143 5.86562 4.20407 6.33689C4.0067 6.80817 3.90506 7.314 3.90506 7.82493C3.90506 8.33587 4.0067 8.84169 4.20407 9.31297C4.40143 9.78424 4.69058 10.2115 5.05467 10.57C5.41876 10.9285 5.85053 11.2109 6.32482 11.4009C6.79912 11.5909 7.30647 11.6846 7.81734 11.6767C8.82848 11.6609 9.79286 11.2481 10.5023 10.5275C11.2118 9.80689 11.6094 8.83619 11.6094 7.82493C11.6094 6.81368 11.2118 5.84297 10.5023 5.12235C9.79286 4.40173 8.82848 3.98899 7.81734 3.97321ZM7.81734 5.32415C8.48047 5.32415 9.11643 5.58758 9.58533 6.05648C10.0542 6.52537 10.3177 7.16134 10.3177 7.82446C10.3177 8.48759 10.0542 9.12355 9.58533 9.59245C9.11643 10.0613 8.48047 10.3248 7.81734 10.3248C7.15422 10.3248 6.51826 10.0613 6.04936 9.59245C5.58046 9.12355 5.31703 8.48759 5.31703 7.82446C5.31703 7.16134 5.58046 6.52537 6.04936 6.05648C6.51826 5.58758 7.15422 5.32415 7.81734 5.32415Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END OF FOOTER */}
        </div>
    )
}
