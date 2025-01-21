let chartData=[
    {
        name: "Jan",
        sale: 58_000
    },
    {
        name: "Feb",
        sale: 70_000
    },
    {
        name: "Mar",
        sale: 50_000
    },
    {
        name: "Apr",
        sale: 19_000
    },
    {
        name: "May",
        sale: 12_000
    },
    {
        name: "Jun",
        sale: 10_000
    },
    {
        name: "Jul",
        sale: 45_000
    },
    {
        name: "Aug",
        sale: 34_000
    },
    {
        name: "Sep",
        sale: 27_000
    },
    {
        name: "Oct",
        sale: 11_000
    },
    {
        name: "Nov",
        sale: 17_000
    },
    {
        name: "Des",
        sale: 15_000
    },
]
const newMembers = [
    {
        id: 1,
        username: 'Mohammad Amin',
        title: 'Web Developer',
        img:'images/avatar.png'
    },
    {
        id: 2,
        username: 'Sasas Moq',
        title: 'Seo Eng',
        img:'images/avatar.png'
    },
    {
        id: 3,
        username: 'Zahra Agayi',
        title: 'Weblog',
        img:'images/avatar.png'
    },
    {
        id: 4,
        username: 'Qadir Yolme',
        title: 'Hacker',
        img:'images/avatar.png'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'Qadir Yolme',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/avatar.png'
    },
    {
        id: 2,
        customer: 'Amin Saeedi',
        date: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: 'images/avatar.png'
    },
    {
        id: 3,
        customer: 'Mohammad Qol',
        date: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: 'images/avatar.png'
    },
    {
        id: 4,
        customer: 'Sasan Moq',
        date: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/avatar.png'
    },
]

let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: 'images/avatar.png',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'images/avatar.png',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: 'images/avatar.png',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'images/avatar.png',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'images/avatar.png',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/1.jfif',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/2.jfif',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/3.jfif',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/4.jfif',
        price: 890
    },
]

const productsData = [
    {
        name: 'Jan',
        sale: 4000,
    },
    {
        name: 'Feb',
        sale: 3000,
    },
    {
        name: 'Mar',
        sale: 5000,
    },
]

export {chartData, newMembers, transactions, userRows, products, productsData}