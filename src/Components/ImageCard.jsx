export default function ImageCard({ title, cssClass, link = "#" }) {
  return (
    <div className="card-image">
      <a href={link} className="img-link">
        <p className={`card-text ${cssClass}`}>{title}</p>
      </a>
    </div>
  );
}
