import { v4 as uuidv4 } from "uuid"
import iPad from './images/slider/ipad.jpg'
import iPhone from './images/slider/iphone.png'
import Macbook from './images/slider/macbook.jpg'
import Airpods from './images/slider/airpods.jpg'

export const categories = [
    {
        id: 1,
        img: null,
        title: "Clothing",
        category: "clothing"
    },
    {
        id: 2,
        img: null,
        title: "Tools",
        category: "tools"
    },
    {
        id: 3,
        img: "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1612051686/vendor/5294/catalog/product/f/u/full_heart_-_16_premium_red_roses_by_teleflora_65_1_77.jpg",
        title: "Electronics",
        category: "electronics"
    },
    {
        id: 4,
        img: null,
        title: "Vehicles",
        category: "vehicles"
    },
]

export const dataSlider = [
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: iPad
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: iPhone
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: Macbook
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: Airpods
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: iPhone
    },
]