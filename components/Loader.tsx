interface LoaderProps {
    size?: number;
    weight?: number;
    color?: string;
    duration?: number;
    className?: string;
}

export default function Loader({
    size = 40,
    weight = 4,
    color = '#e96900',
    duration = 1
}: LoaderProps) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderWidth: weight,
                borderStyle: 'solid',
                borderColor: color,
                borderTopColor: 'transparent',
                borderRadius: '100%'
            }}
        />
    );
}
