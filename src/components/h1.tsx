const Heading = ({heading}:{heading: string}) => {
    return ( 
        <h1  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[620]">{heading}</h1>
     );
}
 
export default Heading;