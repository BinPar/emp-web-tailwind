interface ButtonProductProps {
title: string;
bg: string;
color: string;
}

const ButtonProduct: React.FC<ButtonProductProps> = ( {title, bg, color}) => (
<button type='button' className={`uppercase py-5 px-4 tracking-[1px] ${bg} ${color}`}>
    {title}
</button>
)
export default ButtonProduct