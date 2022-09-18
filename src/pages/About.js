import React from 'react'
import { Link } from 'react-router-dom'
import PersonCard from '../components/PersonCard'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

function About() {
    return (
        <div>
            <Header />

            <div className='mx-10 p-10 rounded-lg bg-white'>
                <p class="text-gray-700">
                    Palantir, piyasa hakkında derin araştırmalar yaparak, yapılan araştırmalar sonucunda kişilerin veya kurumların piyasayı domine etmesine karşın
                    piyasanın nasıl bir yol izleyeceğini ve kullanıcıların bu yola göre neye karar vermelerini destekleyen bir sistem yazılımıdır. Dominasyon ve doğruluk
                    oranlarıya beraber hangi süreçlerde yatırım yapmanız gerektiğine karar verebilirsiniz. Finans ve kripto üzerindeki bilginize göre
                    {<Link to={'/prices'}><span className='text-blue-400'> ücretlendirme </span></Link>}
                    sayfamızdaki paketleri inceleyip size uygun olanı satın alabilirsiniz.
                </p>
                <div class="inline-flex justify-center items-center w-full">
                    <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10" />
                </div>
                <p class="text-gray-700 mb-10">
                    Bizler, Teknasyon Hackathon 22 - Yüzük Kardeşliği'nde tanışmış bir ekip olarak sizlere geliştirdiğimiz Palantir'i sunuyoruz.
                </p>

                <PersonCard />

            </div>

            <Footer />
        </div>
    )
}

export default About