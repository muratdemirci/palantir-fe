import React from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

function Price() {
    return (
        <div>
            <Header />

            <div className='mx-auto bg-white p-3 m-5 rounded-lg w-6/12'>
                <p>Sizin için en uygun paketi seçin ve hemen kazanmaya başlayın.</p>
            </div>

            <div name="prices" className='flex justify-center gap-8'>

                <div class="col-span-1 items-center shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
                    <p class="text-black dark:text-white text-3xl font-bold">
                        Giriş Seviye
                    </p>
                    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
                        Kripto tecrübesi olmayanlar için
                    </p>
                    <p class="text-black dark:text-white  text-3xl font-bold">
                        9₺
                    </p>
                    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
                        Aylık Olarak
                    </p>
                    <button type="button" class="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 ">
                        Demo İste
                    </button>
                    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            Günde 1M+ istek
                        </li>
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            Analitik Şablonlar
                        </li>
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            7/24 sistem desteği
                        </li>
                    </ul>
                    <span class="w-56 block bg-gray-100 h-1 rounded-lg my-2">
                    </span>
                    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
                        <li class="mb-3 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                </path>
                            </svg>
                            <div>
                                3 Aylık Veriler
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="col-span-1 shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
                    <p class="text-black dark:text-white text-3xl font-bold">
                        Üst Düzey
                    </p>
                    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
                        Kripto tecrübesi olanlar için
                    </p>
                    <p class="text-black dark:text-white  text-3xl font-bold">
                        49₺
                    </p>
                    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
                        Aylık Olarak
                    </p>
                    <button type="button" class="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 ">
                        Demo İste
                    </button>
                    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            Günde 5M+ istek
                        </li>
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            Analitik Şablonlar
                        </li>
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            7/24 sistem desteği
                        </li>
                    </ul>
                    <span class="w-56 block bg-gray-100 h-1 rounded-lg my-2">
                    </span>
                    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
                        <li class="mb-3 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                </path>
                            </svg>
                            <div>
                                Günlük Veriler
                            </div>
                        </li>
                        <li class="mb-3 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                </path>
                            </svg>
                            <div>
                                50GB'a kadar veri depolama
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="col-span-1 shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
                    <p class="text-black dark:text-white text-3xl font-bold">
                        Profesyonel
                    </p>
                    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
                        Üst düzey yatırımcılar için
                    </p>
                    <p class="text-black dark:text-white  text-3xl font-bold">
                        99₺
                    </p>
                    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
                        Aylık Olarak
                    </p>
                    <button type="button" class="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 ">
                        Demo İste
                    </button>
                    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            Günde 10M+ istek
                        </li>
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            Analitik Şablonlar
                        </li>
                        <li class="mb-3 flex items-center">
                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792">
                                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                            7/24 sistem desteği
                        </li>
                    </ul>
                    <span class="w-56 block bg-gray-100 h-1 rounded-lg my-2">
                    </span>
                    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
                        <li class="mb-3 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                </path>
                            </svg>
                            <div>
                                Saatlik veriler
                            </div>
                        </li>
                        <li class="mb-3 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                </path>
                            </svg>
                            <div>
                                En doğru sonuç
                            </div>
                        </li>
                        <li class="mb-3 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                </path>
                            </svg>
                            <div>
                                100 GB'a kadar veri depolama
                            </div>
                        </li>
                    </ul>
                </div>





            </div>

            <Footer />
        </div>
    )
}

export default Price