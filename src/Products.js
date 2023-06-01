const products = [
  {
    id: 0,
    name: "CPU intel core i5 8gb",
    price: 1199.0,
    description:
      "Computador CPU Intel Core i5 Com Hdmi 8GB HD 500GB Windows 10 Wifi Desktop Pc",
    urlImg: "https://i.zst.com.br/thumbs/12/28/13/1967454404.jpg",
    category: "computadores",
    isFeatured: false,
  },

  {
    id: 1,
    name: "Notebook Acer",
    price: 3199.0,
    description:
      "Acer Aspire 5 A515-56-72JY. Este laptop apresenta uma tela Full HD de 15,6 polegadas, processador Intel Core i7-1165G7, 8GB de memória RAM e um SSD de 256GB.",
    urlImg: "https://m.media-amazon.com/images/I/51WoeXh3JcL._AC_SL1280_.jpg",
    category: "notebooks",
    isFeatured: true,
  },

  {
    id: 2,
    name: "Iphone 14",
    price: 8399.0,
    description:
      "Tela Super Retina XDR de 6,1 polegadas com tela Sempre Ativa e ProMotion",
    urlImg:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617559",
    category: "celulares",
    isFeatured: true,
  },

  {
    id: 3,
    name: "Teclado multilaser",
    price: 109.99,
    description: "=Teclado Basico Slim Laser USB Preto, Multilaser, TC193BU",
    urlImg:
      "https://cdn.awsli.com.br/600x450/763/763482/produto/97138915/7483731c0a.jpg",
    category: "periféricos",
    isFeatured: false,
  },

  {
    id: 4,
    name: "CPU intel core i7 16gb",
    price: 2599.0,
    description:
      "PC Gamer ITX Arena, Ryzen 5 5600G, Radeon™ Graphics Vega 7, 16GB Ram, SSD 480GB, Gabinete RGB",
    urlImg:
      "https://images.tcdn.com.br/img/img_prod/1042614/gabinete_gamer_hoopson_preto_cpu_017g_pt_1817_6_2bed896b93b68d4a81f7499e9f2a710c.jpg",
    category: "computadores",
    isFeatured: true,
  },

  {
    id: 5,
    name: "Notebook Asus",
    price: 3199.0,
    description:
      'Notebook Asus Intel Celeron 15,6" 128 Gb Ssd 4Gb Mem Windows 11 PRO X515MA-BR623X',
    urlImg:
      "https://images.tcdn.com.br/img/img_prod/1066780/notebook_asus_intel_celeron_15_6_128_gb_ssd_4gb_mem_windows_11_pro_x515ma_br623x_5541_1_dd93ccd0a50404cc28502e553c40df3e.jpg",
    category: "notebooks",
    isFeatured: false,
  },

  {
    id: 6,
    name: "Xiaomi 12",
    price: 2999.0,
    description:
      "Smartphone Xiaomi 12 Lite 256GB/8GB Dual Chip - Preto - Mi 12 Lite no Brasil",
    urlImg: "https://i.zst.com.br/thumbs/12/d/17/-978656993.jpg",
    category: "celulares",
    isFeatured: true,
  },

  {
    id: 7,
    name: "Mouse gamer",
    price: 329.99,
    description: "Mouse Gamer 12000 Dpi Space Com Led E 7 Botões Gt Gamer",
    urlImg:
      "https://lojagoldentec.vteximg.com.br/arquivos/ids/161080-1000-1000/mouse-gamer-12000-dpi-space-com-led-e-7-botoes-gt-gamer-48211-01-min.jpg?v=637919593478900000",
    category: "periféricos",
    isFeatured: false,
  },

  {
    id: 8,
    name: "Notebook Lenovo",
    price: 4199.0,
    description:
      'Notebook Lenovo Ideapad Intel i5 1135G7, RAM 16GB, SSD 1TB, Tela 15.6" Full HD, Windows 11',
    urlImg:
      "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/fagmyzat/file.png",
    category: "notebooks",
    isFeatured: false,
  },

  {
    id: 9,
    name: "Notebook Philco",
    price: 2199.0,
    description: "Notebook Philco Core i5-5257U 8GB 1TB ",
    urlImg: "https://imgs.casasbahia.com.br/55051035/1g.jpg?imwidth=500",
    category: "notebooks",
    isFeatured: false,
  },

  {
    id: 10,
    name: "Notebook Samsung",
    price: 2999.0,
    description:
      "Notebook Samsung Book X20 Np550 Core I5-10210u Ram 8gb Hd 1tb Ssd 128gb Tela 15.6'",
    urlImg:
      "https://images.tcdn.com.br/img/img_prod/740836/notebook_samsung_book_x20_np550_core_i5_10210u_memoria_8gb_ssd_128gb_tela_15_6_fhd_windows_10_home_6719_1_8e834b0f82445d1f5c27ade615f62915.jpg",
    category: "notebooks",
    isFeatured: false,
  },

  {
    id: 11,
    name: "Notebook Vaio",
    price: 2299.0,
    description:
      "Notebook VAIO FE15 Linux 8GB 256GB, SSD HD, i5 - Cinza Escuro",
    urlImg:
      "https://vaiobr.vteximg.com.br/arquivos/ids/159617-1000-1000/Notebook-VAIO%C2%AE-FE15-Core--1-.jpg?v=637919499503230000",
    category: "notebooks",
    isFeatured: false,
  },

  {
    id: 12,
    name: "CPU intel core i7 8gb",
    price: 1199.0,
    description: "Cpu Gamer 8gb+monitor 19 Led + Estabilizador 500va Ddr3",
    urlImg:
      "https://a-static.mlcdn.com.br/800x560/cpu-gamer-8gb-monitor-19-led-estabilizador-500va-ddr3-imperiums/lojaoficialimperiums/16643/94535f28627d2d1dfc90b16143ab7fae.jpg",
    category: "computadores",
    isFeatured: false,
  },

  {
    id: 13,
    name: "CPU intel core i5 8gb 1tb",
    price: 1499.0,
    description:
      "Cpu Pc Gamer Computador Intel I5 2400 Mem 8gb Hd 1tb em Promoção na Americanas",
    urlImg:
      "https://images-americanas.b2w.io/produtos/4856068011/imagens/cpu-pc-gamer-computador-intel-i5-2400-mem-8gb-hd-1tb/4856068011_1_large.jpg",
    category: "computadores",
    isFeatured: false,
  },

  {
    id: 14,
    name: "Computador completo",
    price: 2799.0,
    description:
      "Computador Completo PC CPU Monitor 19.5 Intel Core i5 memória 6GB com HD 500GB saída HDMI",
    urlImg:
      "https://a-static.mlcdn.com.br/800x560/computador-completo-pc-cpu-monitor-19-5-intel-core-i5-memoria-6gb-com-hd-500gb-saida-hdmi-full-hd-quantum-plus-desktop/3greentechnology/43473/06a70b0c0f759b6a8f092cd93c5639b6.jpg",
    category: "computadores",
    isFeatured: false,
  },

  {
    id: 15,
    name: "CPU intel core i9 32gb",
    price: 6999.0,
    description:
      "Gabinete Gamer CPU para Computador Hoopson intel core i9 32gb RAM",
    urlImg:
      "https://images.kabum.com.br/produtos/fotos/sync_mirakl/300994/Cpu-Pc-Game-Intel-Core-I5-3-2ghz-16gb-Ssd120gb-500w-Gt-730-4-Gb-_1681217898_gg.jpg",
    category: "computadores",
    isFeatured: false,
  },

  {
    id: 16,
    name: "Moto G22",
    price: 1099.0,
    description: "Celular Motorola Moto G22 Xt2231 1 128gb Azul",
    urlImg:
      "https://static.lojasmoveletro.com.br/public/lojamoveletro/imagens/produtos/celular-motorola-moto-g22-xt2231-1-128gb-azul-5157.jpg",
    category: "celulares",
    isFeatured: false,
  },

  {
    id: 17,
    name: "Galaxy A14",
    price: 1399.0,
    description: "Smartphone Galaxy A14 5G 128GB - 4gb - Prata - Samsung",
    urlImg:
      "https://dleyjack4mlu0.cloudfront.net/Custom/Content/Products/49/38/4938_smartphone-samsung-galaxy-a14-128gb-4g-octa-core-4gb-ram-6-6-cam-tripla-selfie-13mp_m4_638161378298299652.jpg",
    category: "celulares",
    isFeatured: false,
  },

  {
    id: 18,
    name: "Xiaomi M11",
    price: 1899.0,
    description: "celular Mi 11 LITE 128gb 6Ggb RAM PEACH PINK",
    urlImg:
      "https://m.media-amazon.com/images/I/51ILPk3RaHL._AC_UF1000,1000_QL80_.jpg",
    category: "celulares",
    isFeatured: false,
  },

  {
    id: 19,
    name: "Galaxy A22",
    price: 1999.0,
    description:
      "Smartphone Samsung Galaxy A22 128GB Branco 4G - 4GB RAM Tela 6,4” Câm. Quádrupla",
    urlImg:
      "https://a-static.mlcdn.com.br/450x450/smartphone-samsung-galaxy-a22-128gb-branco-4g-4gb-ram-tela-64-cam-quadrupla-selfie-13mp/magazineluiza/231143800/78765d6cd40d05a820e8ff663a29bc20.jpg",
    category: "celulares",
    isFeatured: false,
  },

  {
    id: 20,
    name: "HeadPhone Edifier",
    price: 229.0,
    description: "Fone Bluetooth 5.1 EDIFIER W600BT",
    urlImg:
      "https://edifier.com.br/pub/media/catalog/product/f/o/fone-bluetooth-edifier-w600bt-pret.jpg",
    category: "periféricos",
    isFeatured: false,
  },

  {
    id: 21,
    name: "Teclado Multilaser",
    price: 69.0,
    description:
      "Teclado usb Mini slim comfort preto TC154 Multi CX 1 UN - Informática - Kalunga",
    urlImg: "https://img.kalunga.com.br/fotosdeprodutos/671829z_1.jpg",
    category: "periféricos",
    isFeatured: false,
  },

  {
    id: 22,
    name: "Teclado Motospeed",
    price: 189.0,
    description: "Teclado Mecânico Gamer Motospeed CK61, RGB, Switch Red, ANSI",
    urlImg:
      "https://cdn.awsli.com.br/600x700/2306/2306739/produto/148826899/f201483487.jpg",
    category: "periféricos",
    isFeatured: false,
  },

  {
    id: 23,
    name: "Mouse logitech",
    price: 129.0,
    description:
      "Mouse Gamer Logitech G203 LIGHTSYNC RGB, Efeito de Ondas de Cores, 6 Botões Programáveis",
    urlImg: "https://m.media-amazon.com/images/I/41zEY42v1tL.jpg",
    category: "periféricos",
    isFeatured: false,
  },
];

export default products;
