const sampleListings = [
    {
        title: "Plot in Basavangudi",
        city: "Bengaluru",
        address: "#XXX Xth Cross Localilty Bangalore - 560XXX",
        size: "30X40",
        facing: "North",
        katha: "A",
        image: "https://www.rohanantara.ind.in/images/rohan/residential-plots-in-north-bangalore.webp",
    },
    {
        title: "Plot in J.P.Nagar",
        city: "Bengaluru",
        address: "#XXX Xth Cross Localilty Bangalore - 560XXX",
        size: "30X40",
        facing: "east",
        katha: "A",
        image: "https://imagecdn.99acres.com/media1/20727/2/414542048M-1710227624435.webp",

    },
    {
        title: "Plot in Marathalli",
        city: "Bengaluru",
        address: "#XXX Xth Cross Localilty Bangalore - 560XXX",
        size: "60X40",
        facing: "east",
        katha: "A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NxBSKefC0vmZTSslrFFeLBUXxU9fW2Vy9Q&usqp=CAU",

    },
    {
        title: "Plot in K.R.Pura",
        city: "Bengaluru",
        address: "#XXX Xth Cross Localilty Bangalore - 560XXX",
        size: "40X40",
        facing: "east",
        katha: "B",
        image: "https://www.tatacarnatica.ind.in/project/plot-vs-villa-investment-in-bangalore.webp",

    },
    {
        title: "Plot in T. Dasarahalli",
        city: "Bengaluru",
        address: "#XXX Xth Cross Localilty Bangalore - 560XXX",
        size: "30X30",
        facing: "east",
        katha: "B",
        image: "https://superadmin.homes247.in/images/uploadPropertyImgs/1612766257-1.jpg",

    },
    // -- 
    {
        title: "Plot in Anna Nagar",
        city: "Chennai",
        address: "#XXX Xth Cross Localilty Chennai - 600XXX",
        size: "30X40",
        facing: "North",
        katha: "A",
        image: "https://www.rohanantara.ind.in/images/rohan/residential-plots-in-north-bangalore.webp",
    },
    {
        title: "Plot in Velachery",
        city: "Chennai",
        address: "#XXX Xth Cross Localilty Chennai - 600XXX",
        size: "30X40",
        facing: "east",
        katha: "A",
        image: "https://imagecdn.99acres.com/media1/20727/2/414542048M-1710227624435.webp",

    },
    {
        title: "Plot in Gopalapuram",
        city: "Chennai",
        address: "#XXX Xth Cross Localilty Chennai - 600XXX",
        size: "60X40",
        facing: "east",
        katha: "A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NxBSKefC0vmZTSslrFFeLBUXxU9fW2Vy9Q&usqp=CAU",

    },
    {
        title: "Plot in Nungampakkam",
        city: "Chennai",
        address: "#XXX Xth Cross Localilty Chennai - 600XXX",
        size: "40X40",
        facing: "east",
        katha: "B",
        image: "https://www.tatacarnatica.ind.in/project/plot-vs-villa-investment-in-bangalore.webp",

    },
    {
        title: "Plot in Siruseri",
        city: "Chennai",
        address: "#XXX Xth Cross Localilty Chennai - 600XXX",
        size: "30X30",
        facing: "east",
        katha: "B",
        image: "https://superadmin.homes247.in/images/uploadPropertyImgs/1612766257-1.jpg",

    },

    {
        title: "Plot in Juhu",
        city: "Mumbai",
        address: "#XXX Xth Cross Localilty Mumbai - 560XXX",
        size: "30X40",
        facing: "North",
        katha: "A",
        image: "https://superadmin.homes247.in/images/uploadPropertyImgs/1612766257-1.jpg",

    },
    {
        title: "Plot in Worli",
        city: "Mumbai",
        address: "#XXX Xth Cross Localilty Mumbai - 560XXX",
        size: "30X40",
        facing: "east",
        katha: "A",
        image: "https://www.tatacarnatica.ind.in/project/plot-vs-villa-investment-in-bangalore.webp",

    },
    {
        title: "Plot in Malabar Hill",
        city: "Mumbai",
        address: "#XXX Xth Cross Localilty Mumbai - 560XXX",
        size: "60X40",
        facing: "east",
        katha: "A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NxBSKefC0vmZTSslrFFeLBUXxU9fW2Vy9Q&usqp=CAU",

    },
    {
        title: "Plot in Breach Candy",
        city: "Mumbai",
        address: "#XXX Xth Cross Localilty Mumbai - 560XXX",
        size: "40X40",
        facing: "east",
        katha: "B",
        image: "https://www.rohanantara.ind.in/images/rohan/residential-plots-in-north-bangalore.webp",

    },
    {
        title: "Plot in Tardeo",
        city: "Mumbai",
        address: "#XXX Xth Cross Localilty Mumbai - 560XXX",
        size: "30X30",
        facing: "east",
        katha: "B",
        image: "https://imagecdn.99acres.com/media1/20727/2/414542048M-1710227624435.webp",

    },

    {
        title: "Plot in Defence Colony",
        city: "Delhi",
        address: "#XXX Xth Cross Localilty Delhi - 560XXX",
        size: "30X40",
        facing: "North",
        katha: "A",
        image: "https://imagecdn.99acres.com/media1/20727/2/414542048M-1710227624435.webp",

    },
    {
        title: "Plot in Model Town",
        city: "Delhi",
        address: "#XXX Xth Cross Localilty Delhi - 560XXX",
        size: "30X40",
        facing: "east",
        katha: "A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NxBSKefC0vmZTSslrFFeLBUXxU9fW2Vy9Q&usqp=CA",

    },
    {
        title: "Plot in Vasanth Vihar",
        city: "Delhi",
        address: "#XXX Xth Cross Localilty Delhi - 560XXX",
        size: "60X40",
        facing: "east",
        katha: "A",
        image: "https://www.rohanantara.ind.in/images/rohan/residential-plots-in-north-bangalore.webp",

    },
    {
        title: "Plot in Shantiniketan",
        city: "Delhi",
        address: "#XXX Xth Cross Localilty Delhi - 560XXX",
        size: "40X40",
        facing: "east",
        katha: "B",
        image: "https://www.tatacarnatica.ind.in/project/plot-vs-villa-investment-in-bangalore.webp",

    },
    {
        title: "Plot in Panchsheel Park",
        city: "Delhi",
        address: "#XXX Xth Cross Localilty Delhi - 560XXX",
        size: "30X30",
        facing: "east",
        katha: "B",
        image: "https://superadmin.homes247.in/images/uploadPropertyImgs/1612766257-1.jpg",

    },
];


module.exports = { data: sampleListings };