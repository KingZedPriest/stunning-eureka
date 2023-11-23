interface Props {
    heading: string,
    coloredHeading?: string,
}
const Heading = ({heading, coloredHeading }: Props) => {
    return ( 
        <h1  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[620]">{heading} <span className="text-orange">{coloredHeading}</span></h1>
     );
}
 
export default Heading;