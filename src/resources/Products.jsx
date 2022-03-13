const Products = [
    {
        "id": 0,
        "title": "Stella Artois",
        "description": "Pack de 6 latas de 473 ml de cerveza rubia marca Stella Artois",
        "origin": "Argentina",
        "price": 1140,
        "category": "rubia",
        "imageUrl": "/assets/images/product_images/rubia/stella_artois.jpg",
        "stock": 5
    }, {
        "id": 1,
        "title": "Heineken",
        "description": "Pack de 6 latas de 473 ml de cerveza rubia marca Heineken",
        "origin": "Argentina",
        "price": 1050,
        "category": "rubia",
        "imageUrl": "/assets/images/product_images/rubia/heineken.jpg",
        "stock": 5
    }, {
        "id": 2,
        "title": "Paulaner",
        "description": "Pack de 6 latas de 500 ml de cerveza rubia marca Paulaner",
        "origin": "Alemania",
        "price": 2000,
        "category": "rubia",
        "imageUrl": "/assets/images/product_images/rubia/paulaner.jpg",
        "stock": 5
    }, {
        "id": 3,
        "title": "Miller",
        "description": "Pack de 6 latas de 473 ml de cerveza rubia marca Miller",
        "origin": "Argentina",
        "price": 1300,
        "category": "rubia",
        "imageUrl": "/assets/images/product_images/rubia/miller.jpg",
        "stock": 5
    }, {
        "id": 4,
        "title": "Imperial",
        "description": "Pack de 6 latas de 473 ml de cerveza rubia marca Imperial",
        "origin": "Argentina",
        "price": 1250,
        "category": "rubia",
        "imageUrl": "/assets/images/product_images/rubia/imperial.jpg",
        "stock": 5
    }, {
        "id": 5,
        "title": "Andes Origen",
        "description": "Pack de 6 latas de 473 ml de cerveza negra marca Andes Origen",
        "origin": "Argentina",
        "price": 1300,
        "category": "negra",
        "imageUrl": "/assets/images/product_images/negra/andes_origen.jpg",
        "stock": 5
    }, {
        "id": 6,
        "title": "Imperial",
        "description": "Pack de 6 latas de 473 ml de cerveza negra marca Imperial",
        "origin": "Argentina",
        "price": 1290,
        "category": "negra",
        "imageUrl": "/assets/images/product_images/negra/imperial.jpg",
        "stock": 5
    }, {
        "id": 7,
        "title": "Quilmes",
        "description": "Pack de 6 latas de 473 ml de cerveza negra marca Quilmes",
        "origin": "Argentina",
        "price": 980,
        "category": "negra",
        "imageUrl": "/assets/images/product_images/negra/quilmes.jpg",
        "stock": 5
    }, {
        "id": 8,
        "title": "Stella Artois",
        "description": "Pack de 6 latas de 473 ml de cerveza negra marca Stella Artois",
        "origin": "Argentina",
        "price": 1460,
        "category": "negra",
        "imageUrl": "/assets/images/product_images/negra/stella_artois.jpg",
        "stock": 5
    }, {
        "id": 9,
        "title": "Schneider",
        "description": "Pack de 6 latas de 473 ml de cerveza negra marca Schneider",
        "origin": "Argentina",
        "price": 1340,
        "category": "negra",
        "imageUrl": "/assets/images/product_images/negra/schneider.jpg",
        "stock": 5
    }, {
        "id": 10,
        "title": "Andes Origen",
        "description": "Pack de 6 latas de 473 ml de cerveza roja marca Andes Origen",
        "origin": "Argentina",
        "price": 1100,
        "category": "roja",
        "imageUrl": "/assets/images/product_images/roja/andes_origen.jpg",
        "stock": 5
    }, {
        "id": 11,
        "title": "Imperial",
        "description": "Pack de 6 latas de 473 ml de cerveza roja marca Imperial",
        "origin": "Argentina",
        "price": 1250,
        "category": "roja",
        "imageUrl": "/assets/images/product_images/roja/imperial.jpg",
        "stock": 5
    }, {
        "id": 12,
        "title": "Patagonia",
        "description": "Pack de 6 latas de 473 ml de cerveza roja marca Patagonia",
        "origin": "Argentina",
        "price": 1550,
        "category": "roja",
        "imageUrl": "/assets/images/product_images/roja/patagonia.jpg",
        "stock": 5
    }, {
        "id": 13,
        "title": "Quilmes",
        "description": "Pack de 6 latas de 473 ml de cerveza roja marca Quilmes",
        "origin": "Argentina",
        "price": 1000,
        "category": "roja",
        "imageUrl": "/assets/images/product_images/roja/quilmes.jpg",
        "stock": 5
    }, {
        "id": 14,
        "title": "Schneider",
        "description": "Pack de 6 latas de 473 ml de cerveza roja marca Schneider",
        "origin": "Argentina",
        "price": 1230,
        "category": "roja",
        "imageUrl": "/assets/images/product_images/roja/schneider.jpg",
        "stock": 5
    }, {
        "id": 15,
        "title": "Andes Origen",
        "description": "Pack de 6 latas de 473 ml de cerveza de trigo marca Andes Origen",
        "origin": "Argentina",
        "price": 1090,
        "category": "trigo",
        "imageUrl": "/assets/images/product_images/trigo/andes_origen.jpg",
        "stock": 5
    }, {
        "id": 16,
        "title": "Patagonia",
        "description": "Pack de 6 latas de 473 ml de cerveza de trigo marca Patagonia",
        "origin": "Argentina",
        "price": 1400,
        "category": "trigo",
        "imageUrl": "/assets/images/product_images/trigo/patagonia.jpg",
        "stock": 5
    }, {
        "id": 17,
        "title": "Peñón del Águila",
        "description": "Pack de 6 latas de 473 ml de cerveza de trigo marca Peñón del Águila",
        "origin": "Argentina",
        "price": 1220,
        "category": "trigo",
        "imageUrl": "/assets/images/product_images/trigo/peñon.jpg",
        "stock": 5
    }, {
        "id": 18,
        "title": "Schofferhofer",
        "description": "Pack de 6 latas de 500 ml de cerveza de trigo marca Schofferhofer",
        "origin": "Alemania",
        "price": 1900,
        "category": "trigo",
        "imageUrl": "/assets/images/product_images/trigo/schofferhofer.jpg",
        "stock": 5
    }, {
        "id": 19,
        "title": "Weidmann",
        "description": "Pack de 6 latas de 500 ml de cerveza de trigo marca Weidmann",
        "origin": "Alemania",
        "price": 2100,
        "category": "trigo",
        "imageUrl": "/assets/images/product_images/trigo/widmann.jpg",
        "stock": 5
    }
]


export default Products