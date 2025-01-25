type FeatureCArdProps = {
    id: string;
    title: string;
    description: string;
    className?: string;
    onClick: (id: string) => void;
};

const FeatureCard: React.FC<FeatureCArdProps> = ({ id, title, description, className, onClick }) => {
    return (
        <div className={`flex flex-col cursor-pointer ${className}`} onClick={() =>onClick(id)}>
            <h3 className="text-lg font-medium mb-3">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
}

export default FeatureCard;