import React from 'react';
import '../custom.css'; // Assuming you will add CSS styles here

function IconsAnimation() {
    const icons = [
        'https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png',
        'https://cdn-icons-png.flaticon.com/512/4138/4138124.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s',
        'https://static.vecteezy.com/system/resources/previews/018/930/564/original/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s',
        'https://cdn-icons-png.flaticon.com/512/4138/4138124.png',
    ];

    return (
        <div className="overflow-hidden w-full">
            <p className='p-6 rounded-lg border-grey-600 m-2 shadow-lg'>Our Clients</p>
            <div className="icons-container flex animate-marquee">
                {icons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon}
                        alt={`Icon ${index + 1}`}
                        className="w-16 h-16 m-4"
                    />
                ))}
            </div>
        </div>
    );
}

export default IconsAnimation;
