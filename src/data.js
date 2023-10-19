import styled from "styled-components";


const ImageCell = styled.div`
display : flex;
align-items : center;
`
const Image = styled.img`
width : 32px;
height : 32px;
border-radius : 50%;
object-fit : cover;
margin-right : 20px;
`
const StatusCell = styled.div`
padding : 5px;
border-radius : 5px;
&.active{
  color : green;
  background-color : rgba(0,128,0,0.151);
}
&.pending{
    background-color : #FFFFCC;
    color : goldenrod;
}
&.passive{
  color : red;
  background-color :  #fcc1bb   ;
}
`

export const rows = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Praveen Choudhary",
        date: "1 March",
        amount: 63000,
        method: "Cash on Delivery",
        status: "Approved",
    },
    {
        id: 2235235,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Piyush Choudhary",
        date: "1 March",
        amount: 6000,
        method: "Online Payment",
        status: "Pending",
    },
    {
        id: 2342353,
        product: "Redragon S101",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Jaurav Gangir",
        date: "1 March",
        amount: 2000,
        method: "Cash on Delivery",
        status: "Pending",
    },
    {
        id: 2357741,
        product: "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Kuldeep Saini",
        date: "1 March",
        amount: 92000,
        method: "Online",
        status: "Approved",
    },
    {
        id: 2342355,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Pulkit Saini",
        date: "1 March",
        amount: 83000,
        method: "Online",
        status: "Pending",
    },
];



export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <ImageCell>
                    <Image src={params.row.img} alt="avatar" />
                    {params.row.username}
                </ImageCell>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <StatusCell className={`${params.row.status}`}>
                    {params.row.status}
                </StatusCell>
            );
        },
    },
];



export const userRows = [
    {
        id: 1,
        username: "Praveen",
        img: "Praveen.jpg",
        status: "active",
        email: "prvnjanu02@gmail.com",
        phone : "+91 6377163096",
        age: 22,
        dob : "24-11-2000",
        address : "Hamiri Khurd, Jhunjhunu, Rajasthan",
        country : "India",
    },
    {
        id: 2,
        username: "Poonam",
        img: "Poonam.jpg",
        email: "31poonam@gmail.com",
        phone : "+91 987654320",
        status: "passive",
        dob : "30-12-1998",
        age: 24,
        address : "Hamiri Khurd, Jhunjhunu, Rajasthan",
        country : "India",
    },
    {
        id: 3,
        username: "Piyush",
        img: "Piyush.jpg",
        email: "piyush10@gmail.com",
        phone : "+91 6005122961",
        status: "pending",
        age: 20,
        dob : "10-01-2003",
        address : "Hamiri Khurd, Jhunjhunu, Rajasthan",
        country : "India",
    },
    {
        id: 4,
        username: "Manvi",
        img: "Parcel.jpg",
        email: "manvi1102@gmail.com",
        phone : "+91 8967452301",
        status: "active",
        age: 20,
        dob : "11-02-2003",
        address : "Mahendragarh, Haryana",
        country : "India",
    },
    {
        id: 5,
        username: "Parshant",
        img: "Parshant.jpg",
        email: "k.parshant@gmail.com",
        phone : "+91 9518460280",
        status: "passive",
        age: 21,
        dob : "18-12-2000",
        address : "Bhiwani, Haryana",
        country : "India",
    },
    {
        id: 6,
        username: "Pulkit Saini",
        img: "Pulkit.jpg",
        email: "sainipulkit31@gmail.com",
        phone : "+91 9057276452",
        status: "active",
        age: 23,
        dob : "31-03-1999",
        address : "Nawalgarh, Jhunjhunu, Rajasthan",
        country : "India",
    },
    {
        id: 7,
        username: "Prince",
        img: "prince.jpg",
        email: "princekumar@gmail.com",
        phone : "+91 8709323107",
        status: "passive",
        age: 22,
        dob : "13-11-2000",
        address : "Gaya, Bihar",
        country : "India",
    },
    {
        id: 8,
        username: "Akif",
        img: "akif.jpg",
        email: "javedakif10@gmail.com",
        phone : "+91 7903769642",
        status: "active",
        age: 23,
        dob : "10-02-1999",
        address : "Aara, Bihar",
        country : "India",
    },
    {
        id: 9,
        username: "Komal",
        img: "komal.jpg",
        email: "komaljangir@gmail.com",
        phone : "+91 9874563201",
        status: "pending",
        age: 21,
        dob : "12-09-2001",
        address : "Basant Vihar, Jhunjhunu, Rajasthan",
        country : "India",
    },
    {
        id: 10,
        username: "Vishal",
        img: "Vishal.jpg",
        email: "sharmaji22@gmail.com",
        phone : "+91 7737456296",
        status: "active",
        age: 22,
        dob :"23-03-2000",
        address : "Churu, Churu, Rajasthan",
        country : "India",
    },
    {
        id: 11,
        username: "Jeevika",
        img: "Gudiya.jpg",
        email: "jivikajanu24@gmail.com",
        phone : "+91 9660091803",
        status: "active",
        age: 15,
        address : "Hamiri Khurd, Jhunjhunu, Rajasthan",
        country : "India",
    },
    {
        id: 12,
        username: "Hitesh",
        img: "hitesh.jpg",
        email: "hiteshsh@gmail.com",
        phone :"+91 6378485151",
        status: "active",
        age: 21,
        dob : "25-04-2001",
        address : "Chirawa, Jhunjhunu, Rajasthan",
        country : "India",
    },
    {
        id: 13,
        username: "Subham",
        img: "shubham.jpg",
        email: "sainisubham@gmail.com",
        phone : "+91 8619581410",
        status: "active",
        age: 22,
        dob : "22-08-2000",
        address : "Singhana, Jhunjhunu, Rajasthan",
        country : "India",
    },
    {
        id: 14,
        username: "Tammana",
        img: "Tammana.jpg",
        email: "tammana23@gmail.com",
        phone : "+91 8795462130",
        status: "active",
        age: 20,
        dob : "19-06-2002",
        address : "Gudha, Jhunjhunu, Rajasthan",
        country : "India",
    },
];

