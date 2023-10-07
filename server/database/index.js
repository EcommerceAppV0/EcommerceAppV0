const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("coonected Done"))
  .catch((err) => console.log(err));

const User = require("../models/userModel")(sequelize, DataTypes)
const Product = require("../models/productModel")(sequelize, DataTypes)
const Category = require("../models/categoryModel")(sequelize, DataTypes)

User.hasMany(Product)
Product.belongsTo(User)

Category.hasMany(Product);
Product.belongsTo(Category);

// sequelize.sync({ force: true })
//     .then(() => console.log("tables synced"))
//     .catch(err => console.log(err));


const db = {};

db.User = User;
db.Product = Product;
db.Category = Category;
// console.log(db.Category);

const categories = [
  {
    name: "Phones",
    image:
      "https://res.cloudinary.com/daexsprzx/image/upload/v1696615672/lu3iswfyob3gs4yrq20m.png",
  },
  {
    name: "Computers",
    image:
      "https://res.cloudinary.com/daexsprzx/image/upload/v1696615914/yczsajlbt7adyr45ldey.png",
  },
  {
    name: "Clothes",
    image:
      "https://res.cloudinary.com/daexsprzx/image/upload/v1696616482/fcy8vpp6n2nyxrqvl5zd.png",
  },
  {
    name: "Camera",
    image:
      "https://res.cloudinary.com/daexsprzx/image/upload/v1696615780/ktaacizhkgpdbxfcxuja.png",
  },
  {
    name: "Gaming",
    image:
      "https://res.cloudinary.com/daexsprzx/image/upload/v1696615914/yczsajlbt7adyr45ldey.png",
  },
  {
    name: "Furnitue",
    image:
      "https://res.cloudinary.com/daexsprzx/image/upload/v1696616703/gkyz4bdltqzdvebifaen.png",
  },
  {
    name: "Food",
    image:
      "https://res.cloudinary.com/daexsprzx/image/upload/v1696616804/n5xc04iywdg18oxwfyik.png",
  },
];

const products = [
  {
    name: "The north coat",
    description: "this is the north coat",
    price: 260,
    colors: "red",
    size: "M",
    rate: 5,
    status: "sale",
    promo: 50,
    images: [
      "https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1697414400&Signature=IQqHAHLL3Gv9ceVIBIEitsgvynk5PLxyb7SJFg1kEBzCF~9Ybj~Pwt1D0THbOgRUJfocFaVkL5CEkN1sckEHyXxwBZolF3K5Md3sOV8PcIL0iHwnlrBjOkR3s5~bRHUtVuhooOPkbwByorztDAw6ZmU-1vy8vTPzRYd5Z1RvB2nvYjFV5oT7oFouKFfuZCy~B7FCWRD7tiyFaIIyToAVoPhBoiJZAkiYCWedh6jTbGmVFF3ra84r~N~sYXXTDrrUpgDfkP2EsggVT~KqbR8XfWUM9beYCKKqVycRmXNtat0aSvFPu0Zb9EjEsNMmPToQhEjsJ4bc1y6T6rKDyeVrbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 3,
  },
  {
    name: "Gucci duffle bag",
    description: "this is a gucci duffle bag",
    price: 960,
    colors: "blue",
    size: "M",
    rate: "4",
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1697414400&Signature=emhHAR0VktsudqtB4UJImwVXT6EVVJyCYkTx3LzR8-x3Tv60aqQF2SfTA-49aeybMVsrodLfcTi97c0IR35Et7S6FsB3f5LJh5pQwHDLEc0BqQOeISzjAedYssV4VtFepMzB-ctZ7rY~dwQrbKiqd9eElQGh3VysOShdiFTPQBeGlUPojQd1F8A3zFo4QpF3vGvfvV~qtx3laNtKaYJuRPgiylUZV7nzmb49xtl8PWWmz-RkOx64xzQVjwyhsQC8kJ0ZcuC06LSn32FGmADv2JKmDviOw~UUpd0iH0cQ6aXd66cSyJ5R8pU-0m8c0CeKClTyNvQe-2g1E1IutHA2Cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 3,
  },
  {
    name: "RGB liquid CPU Cooler",
    description: "this is the best liquid CPU cooler",
    price: 160,
    colors: "blue",
    rate: 4,
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1697414400&Signature=i499NmDLaZrM1FrJHddyyitxjABCwDrldpDEIrMgT68YPqAKVLpyZ2YdAo6dv7YxDFcRRhNVueaO6rhTEpKBGkUOZz41Mo--6d5e7lyucbS550G~-fGs3MyLtPCfD3MKiQvh5yEa2wxsVIhAA-D5iONregoA0nz9uJCKcl-a8zI288F2R9yFFx4qazum-Pe56dF57dS8zjNQe8vfbUFcxjhGjMcnrNgZvlgU8DfHXMhjuZ7RGDxoGpnPxQK1qT9KQ4h8hL-eGFCtPa5Qjwmou-ZqDUm0CltoRSmXkZXM5OWPu0C~V5cbKNisY4FEgGY1q8iajzhuQ7d-ec63bErwXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 2,
  },
  {
    name: "Small Bookshelf",
    description: "this is a small bookshelf of wood",
    price: 360,
    colors: "green",
    rate: 5,
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1697414400&Signature=Z-qUoNgi0ciFwW5JzmqPtAS8a9A34HHQDa15n86SnUhnwsEGf0h148XHZiUxhFD5OJ1pHS0IGqMOiiZf6jmASsDwvQ1AFnN~SEug0KdoKN4wWjtgbJ-DpAHPVL9c7YXnCdYlg-WrM85aQXBdqEV1pllpdbmSFGCXAAhvqyKxKeKMjFEUDLsfPvsB3kZfzReC2k90e4H2CsecTmqSkMFqagqnm91nca4H53IeMVukigVgUGQnm3a2HECxlPdULLAumOuB~qEh05LXSQIJeIKlSQPPB7-MRyOt2T~~60wjht3rF6Du8Fph~k671Vkw5P-15uny~IAm3U~WhTgNk5yNzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 6,
  },
  {
    name: "Havic HV G-94 Gamepad",
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    price: 192,
    colors: "red",
    rate: "5",
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1697414400&Signature=ef91Pc69nss8Zhl1BMvI15~I~RIP5n6e12JKGRrlliC7p5cf0QaVKJTKcAFqvrq1PgyklL--VDSpOlkZ0KVoTdvdjgDMmNMPyV0VYFn4ikKNb9dbfn4Hn2XhiZkkWaVA-k0z-ckgjizvldmMeoLIjyulk8fUPSY88lVNcS9GIHrWttXHej6zmG7y8haKwCe01OBIJPyGDer0~fJYC0BVneVw6HBhf3E7hecTe4l79yyomMrTXc1S44DQfD94zDsUJjvobvbv0eVt1P1uCnYZ8Gv4hQNbO1sL72WPtIHoa8yXfDutfr1CIPgPUbyJQ6fA96q1RzPdiQou3aw5QoBXYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1697414400&Signature=JBxBifpeM5SIWycvrbvjApBE5oyO2NfF1gm0Q6HWMoKX-CZ9a6MWHoHPe2S92iZlWIMX2nF2eFAcTDMSuzJbbvxWHbudvRQvwP2htLL0unZ9ncz6i0ZO9hgk9RfqfwIm9LTZwARakSVCB1APY~04aIj1g45zieYmXAlYx9v3aEgsLgtDy70EZQ4zaUDveZgImFBgpMzxMAhOWGFZ1wZtj2T4-PbKtfS5NJ2Qyq9MBMmFKwu3vJSKZ06hbPuIMIrRvIjNkhBQn3juJ6JpDgDxpyHGLdGAz9k2CjC-3jdfXqiGDHGaaSVuHqNPSWUSu9rQYJJnRJ8DJfZ9q~CKgNlQGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/ca92/325b/4d31381f7fe4841786f4511bd4849d87?Expires=1697414400&Signature=beJ1Gm2XTK~bSJHhyMuzURBZxJuis~EaA5k6tghDS3izcFf~NBixgHURRJn~kCSqVr0BN0U8LMi8AcUNFbHYLMtw8cB2tfWeg8qx7IoZ1BmZMsq8YsEyvoVkbAtnWpd~mPWtFqK5LF6Mx9NAXlTJukbd8MC67Fi6XLut5qKS3wemW3owciiWbDKA8fq3J6~vUnzpGrjYuFOE80dMZ9q7gHQ8oNZacjStAaTzjX9A-PDooA3YLwm0cMFzYuFMm-9t4bFwton2Nx6rw7GuhUqC~6O41xkZ7NQ2u0cIrP9gmXNVHXrMlJr6ySHEduMN3~LNOpArtJHk6xpnykybZGKB8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1697414400&Signature=VpbVQRRUDvD6HMh689CIR2MCHilrBuwPJ1C2I9o2KYAfPzQ3upJWmwYlsdknZdDNPVGFaeZE56otTTo6KRH5WoTEvY8xNoaCVKwp~Y3J4p~Q9bwzCpVCV-AVQHOaXCP8vMqJNG6BbBz3RNy9jjMF26I8NouSLPOSmhfLF45J~hfTr7CqtP9USpqKMInUgaROV2P~KYuQklKeCrVjEFrj7pajtwMhFaNaPnddE9-i7iqVMwNYpdPlWqZmvwOs~mdCnWzz9FHAsS3HHZ8a~PekmPRrZNeN99sD3ctG6GzptHKXtTWbnB7fzvAm4ecG~KdBv1g3xRT7ENdqrILCmlu~nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      "https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1697414400&Signature=VLGhqLOiYQXjxVAiMTpa~rDzlwxB-z896C26bewiOqMadkrTUM5k1V8NVB9gfxkPlDjxdevSA8-gPNPuJf-31ygiRMv1latcQ8jeBDphlf~89pkLGg92zwRrZ~0iq7nEcHUoU9~Sttos~tVMWH38nIsBIpeg0MgOJEb7hTQkQ9Zq9BCf0CXjpkXPwZuzfQWLHoS229cxiytw-8EHtxj4GVuhBAWfdHsvbEGB9UcKro1n5lL63YS8Xc2LWqd42C9V8~8Lrr~q1e8Td62qrLcNLOMwFpCUKA~V4T1SH-LzNTb5y3BiHS9lA~AQuGKsNSG2C5ZB7MoSrZCodPbm7OEXeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 5,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    description:
      " Reliable 3D ergonomic design with built-in motors for dual vibration. Unique and delicate design.",
    price: 120,
    colors: "red",
    rate: "5",
    status: "sale",
    promo: 40,
    images: [
      "https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1697414400&Signature=bKoUEZrjmE-~2sQVCcT64lI5xatFdSjoO8iK2g8y48bwKCZkKf05G3qty9MI18Z7yHgyd98yAHUqOTSaHMa21qrAyUNAp-YTylKMSfdkx0FPZsqBui~Ee5GNfCcyoSz4obYCRV9r0isf42LF2kiZeP06fm9XmKgHayp58jJwoVF8FOAQHWwFJ10qVp-pStTdxxD7zFj7L7PVrEkx64bdATwRUPC~U27LfNIGGiYFQQ5NIUeJJ4hnU0jHNOi96OLpgFMgMrxBGP3tAHV7t0lxfFhls1btkl3~jLSUzP3RmGFHZbxyiZVeAd~nOW0rDzhkZR~MVZNfPbUpC6YztqKNRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 5,
  },

  {
    name: "AK-900 Wired Keyboard",
    description:
      "This iMICE AK-900 has 104 keys, 100mA with DC 5V voltage. It is one of the perfect choices for gaming at a reasonable price. This gaming keyboard featured with RGB luminous lighting effect one click to turn on/ off.",
    price: 960,
    colors: "blue",
    rate: "4",
    status: "sale",
    promo: 35,
    images: [
      "https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1697414400&Signature=dmWzqNVTSj1KCjwA2Cpqmea5HBDAbmsTk1pfg3TVqOOAif-m-L1KAkIuRnczKLZUBa2VkDPufgxjNIG8wgSRqJIyVOKXxgChZ44A0NDv6X-6~1sh1Ms~0jqHM0N1VvNwVzRgYzjnosesMywLpMHml3QSJaXf9b5i2Ww6Npbw9utayyvghHrP~H9EqE3zv088QhtpmMW1tDJwn6VHDmQYqENDhGSqG3PNVboiYNxx9R1QbEYJfukqQxS-kZzzSGL5B76rELkvg40NZOY9xpmq2sNT2trUKsqo8hBpa1qfferDRQUtF6Ua-Zv0D4Bb7-rjcHHQrXZ1quFgkzlGvZh6dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 2,
  },
  {
    name: "IPS LCD Gaming Monitor",
    description:
      "If you want to enjoy your games in the liveliest color possible, choose IPS. Viewing angles! That's another area where IPS stands head and shoulders above all competitors.",
    price: 370,
    colors: "blue",
    rate: "5",
    status: "sale",
    promo: 30,
    images: [
      "https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1697414400&Signature=ikoWbQYYxhSD9TkJno4xKub6vvOQvEPkvcoZ8A5oOcdqE6-~VgdEXAjPp-NUBZqgSUbPK4KaD45GPoR3kvrY6R24cvkmwnOo85R4PH9BSGl~ii0JsvxsUpGJiCLNL0fw~5a7eY65ByFn44zAiA6WnlPdaHDOUZ~fDpITtt5fzpdOdVw2a8sKrRPwdAWfyVrypdt36ja7jLHfdVIonR6yNVZ6HX6PFB95~YfknXjn9bN5TFv3blnseyJZleTr9lpzMlsVjqzHbH2mJ6W--KyGTTJ6iV-Fhm8nKwBd7Qgogu92DLajykQVCBtUUrIrPBT-YRRxAW9jyqDFG2UQ-C3OUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 5,
  },
  {
    name: "S-Series Comfort Chair ",
    description:
      "The S Series chair combines ergonomic adjustments with a sleek design from Denmark.",
    price: 375,
    colors: "blue",
    rate: "5",
    status: "sale",
    promo: 25,
    images: [
      "https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1697414400&Signature=chdA8rW71HGt34ipIh0dRS0KqEvGCRB5I9Q-S1p5ebsmcyLTPjkXwlpQQ3TJ3hwRqZj26NeZEaljo~A0wFuWZJIw9WhdcUKyoSTnN0dSB1cQgLam0ca7h02GDaCYycu5Y2-pt5qNuBT5YMftrw3r~qk0vw1ogbm8IwLRhbtclaDWSBA6eXu4gMNxWgJAAroBSJT0ae8ErHymd6E7nrtFf9ezV3mO47XwWrTbdyNCIQA2D7H5oCZtXE9DpSX1XYMmQeuf-~cXiEuBqdEK8X7KHnU0nf98ChAkCOJ9TPQpC7qiPW9EvqQiQ5FojVNLPsdvI8jLzkfBfsbc2auqozQYuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 6,
  },

  {
    name: "Breed Dry Dog Food",
    description:
      "Nourish your furry friend with specially formulated dry dog food for optimal health and vitality.",
    price: 100,
    colors: "red",
    rate: "3",
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/78e7/2711/8c99fe72271cf43f5e3566b39ca7c8f4?Expires=1697414400&Signature=RHpbRJCqzB~HeA-N5lRBrWmU6lzKFRE1ChmD1JI-BZUDtLZWFD3wu6Yy9Ljn4BbbylYrA2f~xc-FbnJBhu~8uZLUioKit2aNY6kk3G8v6X~LlsPAEfxgqprH6DZDXY~wzatb1kaVXCRASsA~d~B9n5wTB0vCYxR~QYM2DIxjrZwZAK-qnxkVOmDAydGUFniWnNw9NHZ6FIfTNz3MhKpucWmpNOCX5XQCSH03JKyOFRjvZKRETQagyKgo8hdclZpcqpttA3dBp0xCt1xqzTMSYKoWS9vO-FOxkp5BM7vNFqmDoGt04mwg9BySoZ5fsZsBsUVIOotaHkosK9H2bGVRsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 7,
  },
  {
    name: "CANON EOS DSLR Camera",
    description:
      "Capture life's moments in breathtaking detail with this professional-grade DSLR camera.",
    price: 360,
    colors: "red",
    rate: "4",
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/e608/92a4/f0a3d5d144dce622c7338ec5be12908f?Expires=1697414400&Signature=YxjmaSlLZvFdrSmB-vYJwEfel2VPVGuAni685AidPoSnlgaAF~B48MwsL4AB-xZkZB91AHQYqp4fhJap1ZioYKLvbzM5txYur3hX8ZfcTLCmI2xX2IHbePcCOK9S-vfmlAFPHf2m9gRXHYxd~7GJkJ~XWyWsDP~lvb6ioLQF1fJek-S-hmZ3SZlw5VrmZZKF0QwPe9YcQVV1xq7rnHfm4Li2lTdno5m19dJB7XFkzP1E-BUGz2dbAprWqVEmHIAzoVyKfRLYhCV4i4NR5cNJdJb~wOQ1Du6TSrhjlEvedt6nRXo6WKArNZIgv57dsWbPiA8akXj61CqO4cxDsKkpUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 4,
  },
  {
    name: "ASUS FHD Gaming Laptop",
    description:
      "Immerse yourself in gaming with a powerful processor and stunning Full HD display.",
    price: 700,
    colors: "red",
    rate: "5",
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/203b/e522/b7b02d10672f6f6147762cf52bfcfc54?Expires=1697414400&Signature=ij68v5JTTemimLrl8yqGAsMtFX7YbnbHpBDcujRo-wIlcztq2T9R2Y2Ccm9QtZnR0HnLHmXsRv5CanUYEH1kFNIdAI5B7Wz9gxyU8UQeneAhOm5RilymD54oxK2-h-SpM1H8PyW3SEMVZG3LLzSISMr1ed0O2AwaRUzCfkUgWmzhiTzWSU55mi2BfqutRP-Zp79VjJRj~JY54RiEE3aQWFUZUT-2FFRF26J4B8-ZRLfnjJ9vMAWzLtCU3JwXi3CdJt9gBtNwuUKR9TnZSn83q-vzHQbgpAEkZKLgh4JM7~qwEb4c1m0mBmqd4d~R2H-WQc1Kz1RM-WGjema5maqxyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 2,
  },
  {
    name: "Kids Electric Car",
    description:
      "Give your child the thrill of a safe and fun battery-powered car adventure.",
    price: 960,
    colors: "red",
    rate: "5",
    status: "new",
    images: [
      "https://s3-alpha-sig.figma.com/img/5f4e/a9ac/f805319ddf3897fc9daaf58559542260?Expires=1697414400&Signature=TyDkAq6qc6Nd4uRpG~LdBh9TRBdYXv2yOtZfX-Ukhz8yv1YQ-PkQU6tN9ZIVAVohXb0NpRmW8jO57CrVUqMDESSPzHKuUA9XsbaswyAuB-Y9cz-Vth2MzhQ5iWOhC0Jlf6ZA2jKxe3AgeAFy-5jmvCaexBuZ3yI0hLeshLpjJWx9S1ZrwIcCffY0JCkg~Q0Tw9Hg3IxsByX7r7yyCHjwLL9v0IkzCMSlBJ-LKFLi-su5haKMaz0xeLhCqb5hsDDTaY3MmfXV7er4jtrMwrtjxfn9JdNQxKca9yl8AklmX5ZfrTev6M6x9zgHaiUJj-TXTXTfhMh9AePsT4Ttgs4-kg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 5,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    description:
      "Provide comfort and performance for young soccer players with excellent traction and support.",
    price: 1160,
    colors: "red",
    size: "XL",
    rate: "5",
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/d0b7/bb25/884f6fdfc1357634d7d7b09e05755c2f?Expires=1697414400&Signature=fz6wep4n08Ug7jZW4~iJFna6w0R1cHjDEzgbUS5lLxNpj9q2ExShcXGhuRYZt8-IwUavY6wNbTxkOWHLxOjndFqSXw1nJl0o97bL2Iy6ugHHHgnp~gT1iuUj~SyBm1nsWX3umXLpJ-MYU8ENrWQxO5i7z27jZTyJJpc~I-W~MBGoklhaztCmCCnoHO-NFqJcdASXfKUeK1vGc99kDAh8S4pkuGusuNzvVBCmJrJSuX238~5NJ75d~XGhs0c2bV5k6qlhCERYFeTgEEGqfh7DQrpIrbBhQ~nFztSRQ8QD59m1lN~c2CAwB8srfDV8EwSADzQMaoIFrgBLK1iWpJWjGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 3,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    description:
      "Elevate your gaming experience with precision control, an ergonomic design, and customizable buttons for gamers of all levels.",
    price: 660,
    colors: "red",
    size: "M",
    rate: "4",
    status: "new",
    images: [
      "https://s3-alpha-sig.figma.com/img/288e/0133/65fe639fccc1fe4168fca740ef1f85e7?Expires=1697414400&Signature=IzPgp6FuwblpDWW~Yniaa8JERMgE1GXGtAWtkYnqSvWs4EvzHR-NatpSAaCcesyBo7387BLEqwcG2Gjsl~9QK0aPXrk62-5OI8dQoY0CQQCXW9jCZuzKY1gl9dvGrO44uhhd2fSVV-jJe5f1xxUEqSFTVbboZIEO0Hgo3mjVDTNis4hJeG~7ezgljbw4TebIfy1wTndIucl5jIveuGkkS8ijZH62duXh07Uw5dqsL3CSuYI605jxzNzLdh0SAN0eXXBkn-UwBtTxOoUsmBP6cRM51~gEoyv1tVkca5~n2XwYJOFlczFnjK1wH1hBrYJSHfFG6EkTlH-vUpELXtaJeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 5,
  },
  {
    name: "Curology Product Set ",
    description:
      "Achieve healthier, clearer skin with this dermatologist-curated skincare set, tailored to your specific needs for a radiant complexion.",
    price: 500,
    colors: "red",
    rate: "4",
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/e7bd/d116/62ea1dfc2d615a5bb054e139a764f306?Expires=1697414400&Signature=mPTGzb-xK~3UNgi79ZjQP9Cmwyzx8nB3bNuddv29nsUpLKo6CV4i87rlraR5T5c3a1~D5ZagwoXKH1nqzPcVvOQLUZeztWSNOTuToaj-y92CcIdmb9H3W726V5MrHnJDxteLCXntiQMdJiwbuwKmSstmYqZ2dwv2oYFoOm3Uf85aQ~yYpObGtQlyE6LMmaPG3a-6Zjg~lzzS7ckA5zLrIEDLYDXTYl5gizXsduZLNaAiVwTScbQwyTEngavk8JJ6hEje5J9s-7SV65ug-MHV4cMVXZvC0KLHLLzKwpbkQ5U1LJRr07BolNSIoB~nGcCDYOsjFFquI1W1wGAchV0RfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 3,
  },
  {
    name: "Quilted Satin Jacket",
    description:
      "Elevate your style with our premium Quilted Satin Jacket, combining fashion and comfort with an elegant quilted design.",
    price: 660,
    colors: "red",
    size: "XL",
    rate: "4",
    status: "in stock",
    images: [
      "https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1697414400&Signature=cHgvjZ3w5dwEDTk38l11QBqMYrD5eYG1K3AXU5vbSTV0LqDOLHeL5bahveT61CDmnZ-VBpmN7IS2VdFBvwn0hbptVK3BTI6vj6LOe~gY20MpdrxwixYcCMEzGOsWLzwFdLgTSiDwar-ZNepiQPbPE0nE8zwkVSvhSoCPwZ-Rl8g10t~9e8GmABRGLENyfBMpdN~2YeaOsfw4o2xfkHBx8Wnnoib2IVCzHmHBQiTqCBLjj8OQ5gZ~EVAOzem7BuxVyCqCufKrdDAV~ZbPRwCiemNA74xz7u2OqyBfaBgiydWgCU0QXhSkclnJjXunrB4IP~9C9P39ST2kre5WkJWwVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    ],
    categoryId: 3,
  },
];
// Category.bulkCreate(categories, { ignoreDuplicates: true });
// Product.bulkCreate(products, { ignoreDuplicates: true });


module.exports = db;
