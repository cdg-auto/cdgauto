// cars.js - Database delle vetture nello Showroom
const carDatabase = [
    {
        id: 1,
        name: "BMW M4 Competition",
        badge: "Import Germania",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        year: "2023",
        km: "12.000 km",
        fuel: "Benzina",
        fuelIcon: "fa-gas-pump",
        price: "€ 89.900",
        provenance: "Rete Ufficiale Monaco di Baviera",
        specs: [
            "Cambio: Automatico Steptronic 8 rapporti",
            "Garanzia: Ufficiale Casa Madre residua",
            "Consegna stimata: 10-15 giorni lavorativi"
        ]
    },
    {
        id: 2,
        name: "Mercedes-AMG GT Coupé",
        badge: "Import Germania",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
        year: "2022",
        km: "18.500 km",
        fuel: "Benzina",
        fuelIcon: "fa-gas-pump",
        price: "€ 114.500",
        provenance: "Mercedes-Benz Stoccarda",
        specs: [
            "Pacchetto AMG Performance integrato",
            "Tagliandi eseguiti esclusivamente in officina autorizzata",
            "Immatricolazione italiana inclusa nel prezzo"
        ]
    },
    {
        id: 3,
        name: "BMW i4 M50",
        badge: "Import Germania",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        year: "2024",
        km: "5.000 km",
        fuel: "Elettrica",
        fuelIcon: "fa-bolt",
        price: "€ 72.000",
        provenance: "Batteria con certificato di efficienza al 100%",
        specs: [
            "Trazione integrale xDrive",
            "Cerchi in lega da 20\" M aerodinamici",
            "Sdoganamento e collaudo inclusi"
        ]
    },
    {
        id: 4,
        name: "Mercedes Classe A 200",
        badge: "Import Germania",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
        year: "2023",
        km: "24.000 km",
        fuel: "Ibrida",
        fuelIcon: "fa-gas-pump",
        price: "€ 36.900",
        provenance: "Allestimento Premium AMG Line",
        specs: [
            "Display widescreen e pacchetto luci ambient",
            "Unico proprietario, non fumatore",
            "Pronta consegna in sede"
        ]
    }
];
