import { v4 as uuidv4 } from "uuid"
import shirtSlide from './images/slider/shirtSlide.jpg'
import pantSlide from './images/slider/pantSlide.jpg'
import hatSlide from './images/slider/hatSlide.jpg'
import shoeSlide from './images/slider/shoeSlide.jpg'
import hoodieSlide from './images/slider/hoodeSlide.png'

export const dataSlider = [
    {
        id: uuidv4(),
        title: "Shirts",
        category: "shirts",
        img: shirtSlide
    },
    {
        id: uuidv4(),
        title: "Pants",
        category: "pants",
        img: pantSlide
    },
    {
        id: uuidv4(),
        title: "Hats",
        category: "hats",
        img: hoodieSlide
    },
    {
        id: uuidv4(),
        title: "Hoodies",
        category: "hoodies",
        img: hatSlide
    },
    {
        id: uuidv4(),
        title: "Shoes",
        category: "shoes",
        img: shoeSlide
    },
]