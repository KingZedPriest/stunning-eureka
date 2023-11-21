import SecondHeader from "@/components/SecondHeader";

export default function About() {

    const headerProps = { heading: "About", coloredPart: "Us", route: "About Us" };

    return(
        <main>
            <SecondHeader {...headerProps} />
        </main>
    )
}