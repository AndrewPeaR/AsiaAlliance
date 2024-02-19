const someObj = {
    ".main__content-title" : {
        "ru-RU" : 'Надежные решения для вашей ИТ-инфраструктуры',
        "en" : 'Reliable solutions for your IT infrastructure',
        "ch" : '为您的 IT 基础设施提供可靠的解决方案'
    },
    ".main__content-text" : {
        "ru-RU" : "Asia Alliance - ваш надежный партнер<br />в мире IT-технологий",
        "en" : "Asia Alliance - your reliable partner<br />in the world of IT technologies",
        "ch" : "亚洲联盟 - 您在 IT 技术领域的可靠合作伙伴"
    },
}

const anotherObj = {
    ".about-text-lang" : {
        "ru-RU" : "Наша компания поставляет ИТ-оборудование, серверные решения и круглосуточную поддержку для предприятий любого масштаба. Мы предлагаем широкий спектр продуктов и услуг, от поставки компьютеров, серверов, сетевого оборудования и программного обеспечения до развертывания и поддержки ИТ-инфраструктуры.",
        "en" : `Our company supplies IT equipment, server solutions and 24/7 support for businesses of all sizes. We offer a wide range of products and services, from supplying computers, servers, networking equipment and software to deploying and supporting IT infrastructure.
        <br /><br />
        Why you should utilize our company's services:
        <br />
        1. Experience and expertise: We have many years of experience in IT and work with major suppliers, which allows us to provide high quality equipment and services.
        <br />
        2. Personalized approach: We understand that every business has unique needs, so we offer a personalized approach to each client, helping to find the best solutions for their tasks.
        <br />
        3. Round-the-clock support: Our company provides 24/7 technical support, which ensures the smooth operation of your IT infrastructure.
        <br />
        4. Competitive pricing: We offer competitive pricing on equipment and services, allowing our customers to save their budgets.
        <br /><br />
        If you need reliable hardware supplies, professional server solutions and dependable 24/7 support, our company is a great choice for you.`,
        "ch" : "我们公司为各种规模的企业提供 IT 设备、服务器解决方案和全天候支持。我们提供广泛的产品和服务，从提供计算机、服务器、网络设备和软件到部署和支持 IT 基础设施。",
    },
}

const langArr = {
    ".main__content-title" : {
        "ru" : 'Надежные решения для вашей ИТ-инфраструктуры',
        "en" : 'Reliable solutions for your IT infrastructure',
        "ch" : '为您的 IT 基础设施提供可靠的解决方案'
    },
    ".main__content-text" : {
        "ru" : "Asia Alliance - ваш надежный партнер<br />в мире IT-технологий",
        "en" : "Asia Alliance - your reliable partner<br />in the world of IT technologies",
        "ch" : "亚洲联盟 - 您在 IT 技术领域的可靠合作伙伴"
    },
    ".btn-active-product" : {
        "ru": "Товары",
        "en": "Products",
        "ch": "产品"
    },
    ".btn-accent-askForAPrice" : {
        "ru": "Спросить о цене",
        "en": "Ask for price",
        "ch": "询问价格"
    },
    ".btn-accent-askForAPrice2" : {
        "ru": "Спросить о цене",
        "en": "Ask for price",
        "ch": "询问价格"
    },
    ".btn-accent-askForAPrice3" : {
        "ru": "Спросить о цене",
        "en": "Ask for price",
        "ch": "询问价格"
    },
    ".btn-accent-learnMore" : {
        "ru": "Подробнее",
        "en": "Learn more",
        "ch": "了解更多"
    },
    ".btn-accent-learnMore2" : {
        "ru": "Подробнее",
        "en": "Learn more",
        "ch": "了解更多"
    },
    ".service-title" : {
        "ru": "Наши услуги",
        "en": "Our services",
        "ch": "我们的服务"
    },
    ".service-text" : {
        "ru": "Если вам нужны надежные поставки оборудования, профессиональные серверные решения и надежная круглосуточная поддержка, наша компания - отличный выбор для вас.",
        "en": "If you need reliable hardware supplies, professional server solutions and dependable 24/7 support, our company is a great choice for you.",
        "ch": "如果您需要可靠的硬件供应、专业的服务器解决方案和全天候的可靠支持，我们公司将是您的最佳选择。"
    },
    ".service__cards-item-text-warranty" : {
        "ru": "Гарантийное обслуживание<br />IT-оборудования",
        "en": "Warranty service of<br />IT equipment",
        "ch": "信息技术设备的保修服务"
    },
    ".service__cards-item-support" : {
        "ru": "Поддержка клиентов (колл-центр 24/7, выездная служба, инженеры)",
        "en": "Customer service support (Call center 24/7, field service, engineers)",
        "ch": "客户服务支持（全天候呼叫中心、现场服务、 工程师）"
    },
    ".service__cards-item-text-startup" : {
        "ru": "Пуск и наладка оборудования любой сложности",
        "en": "Start-up and adjustment of equipment of any complexity",
        "ch": "启动和调整各种复杂的设备"
    },
    ".service__cards-item-text-equip" : {
        "ru": "Предпродажа ИТ-решений на специализированном оборудовании",
        "en": "Presale of IT solutions on specialized equipment",
        "ch": "在专用设备上预售信息技术解决方案"
    },
    ".advantages-title" : {
        "ru": "Преимущества",
        "en": "Advantages",
        "ch": "优势"
    },
    ".advantages-text" : {
        "ru": "Почему вам стоит воспользоваться услугами нашей компании.",
        "en": "Why you should utilize our company's services.",
        "ch": "为什么要使用我们公司的服务。"
    },
    ".advantages__cards-item-experience" : {
        "ru": "Мы имеем многолетний опыт работы в сфере ИТ и сотрудничаем с крупнейшими поставщиками, что позволяет нам предоставлять высококачественное оборудование и услуги.",
        "en": "We have many years of experience in IT and work with major suppliers, which allows us to provide high quality equipment and services.",
        "ch": "我们在 IT 领域拥有多年经验，并与主要供应商合作，因此能够提供高质量的设备和服务。"
    },
    ".advantages__cards-item-personalized" : {
        "ru": "Мы понимаем, что каждый бизнес имеет уникальные потребности, поэтому предлагаем индивидуальный подход к каждому клиенту, помогая найти оптимальные решения для его задач.",
        "en": "We understand that every business has unique needs, so we offer a personalized approach to each client, helping to find the best solutions for their tasks.",
        "ch": "我们了解每个企业都有独特的需求，因此我们为每个客户提供个性化的服务，帮助他们找到最佳的解决方案。"
    },
    ".advantages__cards-item-offer" : {
        "ru": "Мы предлагаем конкурентоспособные цены на оборудование и услуги, что позволяет нашим клиентам экономить бюджет.",
        "en": "We offer competitive pricing on equipment and services, allowing our customers to save their budgets.",
        "ch": "我们为设备和服务提供有竞争力的价格，让客户节省预算。"
    },
    ".productsdemo-title" : {
        "ru": "Товары",
        "en": "Products",
        "ch": "产品"
    },
    ".productsdemo-text" : {
        "ru": "Мы предлагаем широкий ассортимент компьютеров, серверных решений, узкоспециализированного оборудования.",
        "en": "We offer a wide range of computers, server solutions, highly specialized hardware.",
        "ch": "我们提供各种计算机、服务器解决方案和高度专业化的硬件。"
    },
    ".productsdemo__cards-item__text-huaweidemo" : {
        "ru": "Серверы Huawei FusionServer X8000 - это высокопроизводительные устройства разработанные для кампусных сетей и центров обработки данных на базе новейших многоядерных процессоров системы IntelВ® HeopB®. на базе новейших многоядерных процессоров системы IntelВ® HeopB®. технологии.",
        "en": "Huawei FusionServer X8000 servers are high-performance devices that were developed for campus networks and data centers based on the latest IntelВ® HeopB® system multi-core processor technologies.",
        "ch": "华为 FusionServer X8000 服务器是面向园区网络和数据中心开发的高性能设备，基于最新的英特尔В® HeopB® 系统多核处理器技术。"
    },
    ".productsdemo__cards-item__text-ibmdemo" : {
        "ru": "IBM Lenovo System x3650 M5 отвечает требованиям к надежной и эффективной обработке корпоративных данных, снижает показатели задержки, оптимизирует производительность системы и поддерживает гибкие конфигурации хранения.",
        "en": "The IBM Lenovo System x3650 M5 fulfills the requirements for reliable and efficient enterprise data processing, reduces latency metrics, optimizes system performance, and supports flexible storage configurations.",
        "ch": "IBM Lenovo System x3650 M5 可满足可靠、高效的企业数据处理要求，降低延迟指标，优化系统性能，并支持灵活的存储配置。"
    },
    ".productsdemo__cards-item__text-juniperdemo" : {
        "ru": "MX104 обеспечивает пропускную способность 80 Гбит/с, резервирование плоскости управления для высокой доступности, четыре фиксированных порта 10GbE и четыре слота Modular Interface Card (MIC) для гибкого подключения к сети и виртуализированных сетевых сервисов.",
        "en": "The MX104 offers 80Gbps throughput, a redundant control plane for high availability, and four fixed 10GbE ports and four Modular Interface Card (MIC) slots for flexible network connectivity and virtualized network services.",
        "ch": "MX104 提供 80Gbps 吞吐量、用于高可用性的冗余控制平面、4 个固定 10GbE 端口和 4 个模块化接口卡 (MIC) 插槽，用于灵活的网络连接和虚拟化网络服务。"
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
    "" : {
        "ru": "",
        "en": "",
        "ch": ""
    },
}