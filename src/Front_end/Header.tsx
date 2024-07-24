import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import brand from '../assets/brand/brand2.png'
import './Header.css'
// import Badge, { BadgeProps } from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import LocalMallIcon from '@mui/icons-material/LocalMall';

// const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
//     '& .MuiBadge-badge': {
//         right: -4,
//         top: 0,
//         border: `1px solid ${theme.palette.background.paper}`,
//         padding: '1px 1px',
        
//     },
// }));


function Header() {
    return (
        <div>
            <div className="Navigation">
                <div className="top">
                    <div className="nav1">
                        <img src={brand}></img>
                    </div>
                    <div className="nav2">
                        <button className="n1">Search</button>
                        <button className="n2">Offers</button>
                        <button className="n3">Help</button>
                        {/* <button className="n4">Orders</button> */}

                    </div>
                    <div className="nav3">
                        {/* <IconButton aria-label="cart">
                            <StyledBadge badgeContent={1} color="secondary">
                                <LocalMallIcon  color="warning" fontSize="medium"/>
                            </StyledBadge>
                        </IconButton> */}
                        <button className="n5">Sign in</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Header