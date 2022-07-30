

const DataApI = {
    dbFrases: [
        {frase: `We Beautify Spaces`},
        {frase: `Improve Your Home With Fresh Paint`},
        {frase: `We Are Locally Known For Our High-Quality Standards`},
        {frase: `Cost-Effectiveness & High-Quality`},
        {frase: `You Are Our #1 Priority`},
    ],
    dbPrincipal: {
        name: "Interscope Media",
        logo: "logo.png",
        favicon: "favicon.png",
        exprYears: "50",
        licensed: "Lic. #123456789",
        miles: "200",
        emails: [
            { email: "yaderinterscope@gmail.com" },
            { email: "interscope@gmail.com" },
        ],
        phones: [
            { phone: "666-888-0000" },
            { phone: "123-888-0000" },
        ],
        addresses: [
            {
                address: "Minneapolis, MN",
                url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90325.28539543092!2d-93.3315185228664!3d44.97079704383932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20Minnesota%2C%20EE.%20UU.!5e0!3m2!1ses!2sni!4v1658380600660!5m2!1ses!2sni"
            },
        ],
        paymentMethod: "we accept cash & checks",
        workdays: [
            { day: "Monday - Friday" },
            { day: "Saturday" },
        ],
        workHours: [
            { hour: "9:00 AM - 5:00 PM" },
            { hour: "9:00 AM - 12:00 MD" },
        ],
    },
    dbSocialMedia: {
        redes: [
            { name: "facebook",icon: 'fab fa-facebook-f', url: "https://www.facebook.com/interscope/" },
            { name: "twitter", icon: 'fab fa-twitter',  url: "https://twitter.com/interscope" },
            { name: "instagram", icon: 'fab fa-instagram',  url: "https://www.instagram.com/interscope/" },
            { name: "youtube", icon: 'fab fa-youtube',  url: "https://www.youtube.com/" },
        ],
        directorio: [
            { name: "yelp", images: `yelp.png`, url: "https://www.yelp.com/" },
            { name: "manta", images: `manta.png`, url: "https://www.manta.com/" },
            { name: "buildzoom", images: 'buildzoom.png', url:"https://www.buildzoom.com"},
            { name: "buzzlife", images: 'buzzlife.png', url:"https://www.buzzlife.com"},
            { name: "home-advisor", images: 'home-advisor.png', url:"https://www.homeadvisor.com"},
            { name: "porch", images: 'porch.png', url:"https://www.porch.com"},
            { name: "yellow-place", images: 'yellow-place.png', url:"https://www.yellow-place.com"},
        ],
    },
    dbMenu: [
        {
            name: `Home`,
            link: `/`,
        },
        {
            name: `About`,
            link: `/about`,
        },
        {
            name: `Services`,
            link: `/services`,
        },
        {
            name: `Gallery`,
            link: `/gallery`,
        },
        {
            name: `Contact`,
            link: `/contact`,
        },
    ],
    dbHome: [
        {
            paragraph: `Welcome to AAG Painting LLC where you will find high-quality and cost-effective home painting services. Our team has over 10 years of experience and we are locally known for providing excellent results. Our company offers services of:`,
        },
        {
            paragraph: `In order to get superb and everlasting results, our team uses the best materials in the industry. Contact our team today and get a free estimate on any of the services that we offer. AAG Painting LLC is located in Minneapolis, MN and covers the states of Minnesota. Contact us today! Call us at 856-612-360-9449 to get a free estimate.`,
        }
    ],
    dbAbout: {
        description: [
            {
                paragraph: `AAG Painting LLC is a family-owned company that was established many years ago in Minneapolis, MN. Our company was built with the commitment to ensure cost-effectiveness and high-quality in every home painting project we are hired to work on for the community the states of Minnesota. Our company was founded under the great values of:`,
                list: [
                    `Professionalism`,
                    `Commitment`,
                    `Diligence`,
                    `Cost-Effectiveness`,
                ],
            },
            {
                paragraph: `Contact our team today and get a free estimate for any of the services that we offer. If you hire us to do the job we will work hard and smart until your expectations are exceeded. Contact our professional and reliable company today to save time and money on your upcoming painting project!`,
            },
        ],
    },
    dbValues: [
        {
            title: `Mission`,
            description: `Our mission is to deliver the best quality in every project that we are assigned to work on while offering cost-effectiveness for the community of Minneapolis, MN and the states of and Minnesota.`,
        },
        {
            title: `Vision`,
            description: `Our vision is to capture your dreams and enhance your lifestyle by adding color to your world!`,
        },
        {
            title: `Why Choose Us`,
            description: `If you choose our company, you will get a crew that will work hard and smart to exceed your expectations. You will also get cost-effectiveness in your projects.`,
        },
    ],
    dbServices: [
        {
            id: 1,
            name: `Residential Painting`,
            subtitle: `The Right Residential Company for House Painting in Park City, UT `,
            description: [
                {
                    imgText: `photo.jpg`,
                    paragraph: `AAG Painting LLC Company in Minneapolis, MN is a proud provider of quality residential interior and exterior painting services in Minneapolis, MN, and the surrounding areas. We have 10 years of experience working with home builders and homeowners to keep their new or existing houses and condos in excellent condition. We are experts in providing quality paint finishes on any house or condominium. If you need an affordable house painting or condo painting company, AAG Painting LLC Company is the right choice!`,
                    lists: [],
                },
            ],
        },
        {
            id: 2,
            name: `Interior Painting`,
            subtitle: ``,
            description: [
                {
                    imgText: `photo-1.jpg`,
                    paragraph: `Interior painting doesn't have to be a difficult, messy and out-of-control job, so hire the experts at AAG Painting LLC. Our interior paint jobs are known to be of high quality; due to our experience, we will enter and leave your residence in a very short time, always with the aim of exceeding your expectations.`,
                },
                {
                    imgText: `photo-2.jpg`,
                    paragraph: `There are many advantages to doing an interior paint job and the most recognized are:`,
                    lists: [
                        {list: `Increase the value of your property`},
                        {list: `Increases the exterior attractiveness of your property`},
                        {list: `Choose colors with designs and moods.`},
                        {list: `You can improve air quality by choosing Low VOC or ZERO`},
                        {list: `Protect your walls`},
                    ],
                }
            ],
        },
        {
            id: 3,
            name: `Exterior Painting`,
            subtitle: ``,
            description: [
                {
                    imgText: `photo-3.jpg`,
                    paragraph: `Exterior painting is also very important to your property because it has the potential to make great first impressions. The first thing your neighbors, friends and costumers see is the exterior of your property. That is why it is important that the quality of the exterior paint is of high quality.`,
                    lists: [],
                },
                {
                    imgText: `photo.jpg`,
                    paragraph: `Here at AAG Painting LLC, we use the best materials on the market to provide you with a high-quality, durable exterior painting solution. Exterior painting has the ability to:`,
                    lists: [],
                },
                {
                    imgText: `photo-4.jpg`,
                    paragraph: `Are you looking for a company to provide you with a high-quality and cost-effective drywall installation? Look no more! AAG Painting LLC is locally known in Minneapolis, MN to provide high-quality finishes along with friendly prices. AAG Painting LLC never sacrifices quality over lower prices; thus, we are passionate about our work and committed to customer satisfaction.  Call our team today for a free estimate on your upcoming project!`,
                    lists: [
                        {list: `Increase the value of your property`},
                        {list: `Increase the exterior attractiveness of your property`},
                        {list: `Protect the coating of your property`},
                    ],
                }
            ],
        },
        {
            id: 4,
            name: `Painting Finishing`,
            subtitle: ``,
            description: [
                {
                    imgText: `photo-3.jpg`,
                    paragraph: `When it’s time to paint a room in your home, color isn’t the only thing to consider. Choosing the right types of paint finishes will determine the final look of your room. With so many types of wall paint to choose from, it’s important to understand which finish or sheen works best in certain spaces. Contact us today and get a free estimate.`,
                    lists: [],
                },
            ],
        },
        {
            id: 5,
            name: `Texture Painting`,
            subtitle: ``,
            description: [
                {
                    imgText: `photo-7.jpg`,
                    paragraph: `Our teams know how to mix paints and primers to achieve the exact color and texture you want. We have the necessary tools to add texturing to interior walls. And we know the techniques to get the job done without drips, bubbles, or an uneven finish. No need to repaint before you’re ready, or to spend more time and money than you planned on repainting. Wall texturing is a great way to experiment with a new look, update your interior design to coordinate with your favorite pieces of decor or furniture, and make a great impression on guests, tenants, and visitors.`,
                    lists: [],
                },
            ],
        },
        {
            id: 6,
            name: `Wallpaper Removal`,
            subtitle: ``,
            description: [
                {
                    imgText: `photo-8.jpg`,
                    paragraph: `Wallpaper removal projects are planned for a number of reasons. Painting over wallpaper is going to make your paint finish more vulnerable to paint damage over time. It’s best to paint on a totally smooth surface. And you’ll only get that with complete wallpaper removal. When preparing for property or home sales, it’s often best to remove or redo any definitive design touches. That way, the new prospective owner or tenant is free to visualize their plans for the property. Wallpaper removal, followed by a fresh coat of neutral paint, leaves a sense of possibility for new occupants.`,
                    lists: [],
                },
            ],
        },
        {
            id: 7,
            name: `Drywall Repair`,
            subtitle: ``,
            description: [
                {
                    imgText: `photo-1.jpg`,
                    paragraph: `Are there holes and/or cracks on your drywall? This can decrease, not only the aesthetics of your residence, but also its value. No to worry! AAG Painting LLC is here to help! Our team has over 10 years of experience in the drywall industry and can assist your needs with high-quality, great customer service, and fair prices. Contact our team today for a free estimate!`,
                    lists: [],
                },
            ],
        },
        {
            id: 8,
            name: `Power Washing`,
            subtitle: ``,
            description: [
                {
                    imgText: `photo-3.jpg`,
                    paragraph: `Ready to clean the dirty and scum off your home’s exterior, driveway, or walkways? Boost your curb appeal with a pressure wash! Our team serves clients with excellence—it’s what we’re known for. When you choose us, you’re choosing the best in the business. That is a choice that you can be confident about.`,
                    lists: [],
                },
                {
                    imgText: `photo.jpg`,
                    paragraph: `Power washing lets your home look its best. No matter what surface your home has—painted or not—power washing is a safe and effective method of cleaning. It is customized to all types of surfaces. Power washing is important because it removes grime, dust, and dirt so that your house looks fresh and clean—it also helps protect from damage caused by build-up. Our team offers pressure washing services for the Minneapolis, MN and cover the states of Minnesota at cost-effective prices. Contact our team today to schedule an onsite visit.`,
                    lists: [],
                },
            ],
        },
        {
            id: 8,
            name: `Diseño de Interiores`,
            subtitle: ``,
            description: [
                {
                    imgText: `photo-6.jpg`,
                    paragraph: `Ready to clean the dirty and scum off your home’s exterior, driveway, or walkways? Boost your curb appeal with a pressure wash! Our team serves clients with excellence—it’s what we’re known for. When you choose us, you’re choosing the best in the business. That is a choice that you can be confident about.`,
                    lists: [],
                },
                {
                    imgText: `photo-2.jpg`,
                    paragraph: `Power washing lets your home look its best. No matter what surface your home has—painted or not—power washing is a safe and effective method of cleaning. It is customized to all types of surfaces. Power washing is important because it removes grime, dust, and dirt so that your house looks fresh and clean—it also helps protect from damage caused by build-up. Our team offers pressure washing services for the Minneapolis, MN and cover the states of Minnesota at cost-effective prices. Contact our team today to schedule an onsite visit.`,
                    lists: [],
                },
            ],
        },
    ],
}

export default DataApI;