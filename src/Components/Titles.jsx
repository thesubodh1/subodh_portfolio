import Icons from "./Icon";
export default function Titles({heading,children,iconName, ...props}) {
    return (
        <section className="about-title">
            <Icons name={iconName} {...props}/>
            <h2 className="title-heading">{heading}</h2>
            <p className="about-desc">{children}</p>
        </section>
    );
}