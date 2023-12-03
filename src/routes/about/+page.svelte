<script>
    let data = [
        {
            name: 'HISTORY',
            description: "Traxnyc is originally a German gemstone jeweler from Berlin that started with a webshop and its own TV and online jewelry auction and expanded in 2014 with a Dutch webshop: www.Traxnyc.nl and an online jewelry auction for Dutch and Belgian customers. Today Traxnyc is one of the largest online jewelry jewelers in Europe specializing in real gemstone jewelry. Nowadays you can also bid via the online jewelry auction of Traxnyc. This is in German, but the jewelry information is shown on the page in Dutch. Of course, the order shipping information in Dutch is just like our customer service. If you have a question about jewelry in the webshop or the online jewelry auction, our Dutch-speaking customer service will be happy to help you.",
            img:"/b-4.png"
        },
        {
            name: 'GEMSTONE JEWELRY SPECIALIST',
            description: "Traxnyc is the specialist in the field of natural gemstones and aims to make gemstone jewelry accessible to everyone. You probably wonder 'how is it that Traxnyc jewelry is offered up to 50% more favorably?' This is because Traxnyc buys the gemstone jewelry himself and then sells it directly to the customer online. There is no intermediary involved, which means that the jewelry is sold at a fair and above all more favorable price. Traxnyc focuses on selling special gemstone jewelry for the best price. We also find the most important, a satisfied customer.",
            img:"/b-3.png"
        },
        {
            name: 'CUSTOMER SERVICE',
            description: "The customer is always central to us. Do you have any questions about a gemstone jewelry, shipping or a return? Then our customer service will be happy to help you. We are happy to help you advise on a gemstone piece of jewelry or help you answer a question. You can contact us by e-mail, chat or telephone.We are available by phone on weekdays between 09:00 and 17:00.",
            img:"/b-1.png"
        },
        {
            name: 'ONLINE JEWELRY AUCTION',
            description: "During the jewelry auctions of Juwelo www.juwelo.nl/auction jewelry is offered in a limited edition. The starting price drops until the last piece is sold. Ultimately, anyone who has made a bid pays the last and therefore lowest price offered, even if they have made a higher bid. The online jewelry auction is German-speaking, however the jewelery information and the order shipping information is in Dutch. Just like customer service, if you have any questions.",
            img:"/b-2.png"
        },
    ]
</script>
<div class="flex flex-col items-center justify-center gap-5">
    {#each data as {name,description,img},i}
         <div class="flex flex-col md:flex-row p-2 ">
            <img class={`w-full md:w-1/2 rounded ${i%2 == 0 && "md:order-2"}`}  src={img} alt={name}>
            <div class={`p-3 flex items-center  flex-col `}>
                <h3 class="text-lg md:text-xl font-semibold my-2 ">{name}</h3>
                <p class="text-justify opacity-70">{description}</p>
            </div>
         </div>
    {/each}
</div>
<div class="my-10">
    <h3 class="text-lg md:text-xl font-semibold my-2">RELIABLE ORIGIN</h3>
    <p class="p-2 text-justify opacity-70">Juwelo only gets its numerous gemstones from reliable sources; we strongly reject the trade in illegally obtained stones. We guarantee the origin of each gem on a specially crafted certificate - so you can be sure that your gemstones are not used to finance wars or support terrorism. In the case of diamonds, for example, this is possible thanks to the United Nations and the Kimberley Process. The guidelines of the CIBJO (Confédération Internationale de la Bijouterie, Joaillerie, Orfèvrerie, des Diamants, Perles et Pierres) for the treatment of precious stones also form guidelines for us, so that as a customer of Juwelo you have a clear insight into the possible treatment of our gemstones.
    </p>
    <div class="w-full  flex items-center justify-center">
        <img class="w-full md:w-[80%]" src="https://www.juwelo.nl/amg/c28813eb88055a8c4f74520a24cf06f5/746/media/banner/nl/common/newsletter/1e44f3de_2021-01-15_newsletter-nl-10.webp" alt="">
    </div>
</div>