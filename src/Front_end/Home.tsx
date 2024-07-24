import React, { useState } from "react";
import Header from "./Header"
import './Header.css'
import './Home.css'
import banner from '../assets/image/banner2.jpg'
import item1 from '../assets/foods/burger.avif'
import item2 from '../assets/foods/khichdi.avif'
import item3 from '../assets/foods/bonda.avif'
import item4 from '../assets/foods/briyani.avif'
import item5 from '../assets/foods/coffee.avif'
import item6 from '../assets/foods/tea.avif'
import item7 from '../assets/foods/icecream.avif'
import item8 from '../assets/foods/chinese.avif'
import item9 from '../assets/foods/rolls.avif'
import item10 from '../assets/foods/south indian.avif'
import item11 from '../assets/foods/veg.avif'
import item12 from '../assets/foods/pongal.avif'
import item13 from '../assets/foods/poori.avif'
import item14 from '../assets/foods/parotta.avif'
import food from './menu.json'
import food1 from './food1.json'
import star from '../assets/icon/star.png'
import add from '../assets/icon/add.png'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton1 from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function Home() {

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -4,
            top: 0,
            border: `1px solid ${theme.palette.background.paper}`,
            padding: '1px 1px',

        },
    }));

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                OPEN
            </Button>
            <IconButton1
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton1>
        </React.Fragment>
    );

    const [Count, setCount] = useState(0)

    const [Products, setProducts] = useState(food)
    const filterItems = (item: any) => {

        const updateItem = Products.filter((e: any) => {
            return e.category === item

        })
        setProducts(updateItem)
    }

    return (
        <div>
            <Header></Header>
            <div className="cart_icon">
                <div className="count_icon">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={Count} color="secondary">
                            <LocalMallIcon color="warning" fontSize="medium" />
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>
            <div className="homepage">
                <div className="banner">
                    <img src={banner}></img>
                </div>
                <div className="hide">
                </div>
                <div className="hide2">
                </div>
                <div className="dish">
                    <h4 className="tit1">Explore Our Menu :</h4>
                    <p className="menu_para">"The food on this site is absolutely delicious and always arrives fresh and hot. The user-friendly interface makes ordering a breeze, ensuring a delightful dining experience every time."</p>
                    <div className="items">
                        <div className="item1">
                            <img src={item1}></img>
                        </div>
                        <div className="item2">
                            <img src={item2}></img>
                        </div>
                        {/* <div className="item3">
                            <img src={item3}></img>
                        </div> */}
                        <div className="item4">
                            <img src={item4}></img>
                        </div>
                        <div className="item5">
                            <img src={item5}></img>
                        </div>
                        <div className="item6">
                            <img src={item6}></img>
                        </div>
                        <div className="item7">
                            <img src={item7}></img>
                        </div>
                        <div className="item8">
                            <img src={item8}></img>
                        </div>
                        <div className="item9">
                            <img src={item9}></img>
                        </div>
                        <div className="item10">
                            <img src={item10}></img>
                        </div>
                        <div className="item11">
                            <img src={item11}></img>
                        </div>
                        <div className="item12">
                            <img src={item12}></img>
                        </div>
                        <div className="item13">
                            <img src={item13}></img>
                        </div>
                        <div className="item14">
                            <img src={item14}></img>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <h1 className="tit2">Top dishes near you</h1>
                <div className="all_foods">
                    {Products.map((element: any) => {
                        const { image, title, description, category, price, id } = element
                        return <div className="card" key={id}>
                            <img src={image}></img>
                            <span className="category">{category}</span>
                            <div className="add_icon">
                                <img src={add} className="add" onClick={() => setCount(Count + 1)} onClickCapture={handleClick}></img>
                                <Snackbar
                                    open={open}
                                    autoHideDuration={6000}
                                    onClose={handleClose}
                                    message="Your Item Added To Cart"
                                    action={action}
                                />
                            </div>
                            <div className="food_info">
                                <div className="rating_star">
                                    <p>{title}</p>
                                    <img src={star} className="star"></img>
                                </div>
                                <p className="description">{description}</p>
                                <p className="price">{price}</p>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Home