import React from "react";
import { Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },

}));

export default function AsideChat() {
    const users = [
        {
            user_id: 1,
            Name: "John Wick",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4J4JSUxIKEUZwc_0KQUcrJvbwGgvb9VUPpA&usqp=CAU"
        },
        {
            user_id: 2,
            Name: "The GodFather",
            src: "https://media.vanityfair.com/photos/615dcfaf3aae1b3c1f41b920/9:16/w_746,h_1327,c_limit/the-godfather-site-story.jpg"
        },
        {
            user_id: 3,
            Name: "Thanos",
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Josh_Brolin_as_Thanos.jpeg/220px-Josh_Brolin_as_Thanos.jpeg"
        },
        {
            user_id: 4,
            Name: "Deadpool",
            src: "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg"
        },
        {
            user_id: 5,
            Name: "Kang the Conqueror",
            src: "https://www.looper.com/img/gallery/the-history-of-kang-the-conqueror-explained/l-intro-1603378027.jpg"
        }
        ,
        {
            user_id: 6,
            Name: "DareDevil",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWuVf3IePc1IHSSF1zhgSBe7AURDwCJ8lwyzs1FaQl4mniGEntRi8PYfZCZycegdjhSIY&usqp=CAU"
        },
        {
            user_id: 7,
            Name: "Iron Man",
            src: "https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png"
        },

        {
            user_id: 8,
            Name: "stan lee",
            src: "https://www.indiewire.com/wp-content/uploads/2022/05/Stan-Lee.jpg"
        }
    ]

    const mapUser = users.map(user => {
        return <div className="Recent-header" key={user.user_id} >
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot">
                <Avatar src={user.src} />
            </StyledBadge>

            <div className="user-name">{user.Name} </div>
        </div>
    })

    return (
        <div className="Aside-head"  >
            <div className="logo" >Chat 

            </div>
            {/* // search bar */}
            <div className="search-Bar" >
                <input   type="text" placeholder="search" />
            </div>
            {/* recent users */}
            <div className="Recent-hover" >
                <div   className="Recent-user">Recent</div>
                {mapUser}
            </div>
        </div>
    );
}







// git config --global user.email "you@example.com"
// git config --global user.name "Your Name" 
