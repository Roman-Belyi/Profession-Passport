import TogoTopImg from '../images/TogoTop.png'
import MealsAmerica from '../images/Delivery.png'
import KaiserCommerce from '../images/KaiserCommerce.png'

export default function Portfolio(){
    return(
        <section id="portfolio" className="py-20 px-6 bg-[#0A0A0A]">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
            Моє <span className="bg-gradient-to-r from-teal-300 to-green-400 bg-clip-text text-transparent">Портфоліо</span>
           </h2>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-10">
             <div className="text-gray-300 text-lg mb-8">
                <p>ТОП-проекти 2025 рік.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition">
                 <div className="aspect-video bg-white/5 flex items-center justify-center text-gray-500">
                  <img src={TogoTopImg} alt="TogoTop" className="w-full h-full object-cover" />
                 </div>

                 <div className="p-4">
                    <h3 className="text-white font-bold mb-2">TogoTop Landing</h3>
                    <p className="text-gray-400 text-sm">TogoTop-Shop система просування товарів на маркетплейсах.</p>
                 </div>
                </div>


                <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition">
                 <div className="aspect-video bg-white/5 flex items-center justify-center text-gray-500">
                 <img src={MealsAmerica} alt="MealsAmerica" className="w-full h-full object-cover" />
                 </div>

                 <div className="p-4">
                    <h3 className="text-white font-bold mb-2">MealsAmerica Delivery</h3>
                    <p className="text-gray-400 text-sm">Meals America multipage доставка їжі швидка та зручна!</p>
                 </div>
                </div>


                <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition">
                 <div className="aspect-video bg-white/5 flex items-center justify-center text-gray-500">
                   <img src={KaiserCommerce} alt="KaiserCommerce" className="w-full h-full object-cover" />
                 </div>

                 <div className="p-4">
                    <h3 className="text-white font-bold mb-2">Kaiser 2XL</h3>
                    <p className="text-gray-400 text-sm">Розробка модального вікна для польського інтернет-магазину крісла Kaiser 2XL</p>
                 </div>
                </div>

             </div>
            </div>
         </div>
        </section>
    )
}