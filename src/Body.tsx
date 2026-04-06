interface BodyProps{
    title:string;
}

export default function Body({title}:BodyProps){

    return(
        <>
            <p>{title}</p>
        </>
    );
}