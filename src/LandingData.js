import { v4 as uuidv4 } from "uuid"
import shirtSlide from './images/slider/shirtSlide.jpg'
import pantSlide from './images/slider/pantSlide.jpg'
import hatSlide from './images/slider/hatSlide.jpg'
import shoeSlide from './images/slider/shoeSlide.jpg'
import hoodieSlide from './images/slider/hoodeSlide.png'

export const categories = [
    {
        id: 1,
        img: shirtSlide,
        title: "Shirts",
        category: "shirts"
    },
    {
        id: 2,
        img: pantSlide,
        title: "Pants",
        category: "pants"
    },
    {
        id: 3,
        img: hatSlide,
        title: "Hats",
        category: "hats"
    },
    {
        id: 4,
        img: hoodieSlide,
        title: "Hoodies",
        category: "hoodies"
    },
    {
        id: 5,
        img: shoeSlide,
        title: "Shoes",
        category: "shoes"
    },
]

export const dataSlider = [
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: shirtSlide
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: pantSlide
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: hoodieSlide
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: hatSlide
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: shoeSlide
    },
]