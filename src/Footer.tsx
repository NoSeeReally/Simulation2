interface FooterProps{
    title:string;
}

export default function Footer({title}:FooterProps){
    return(
        <>
            <p>{title}</p>
        </>
    );
}