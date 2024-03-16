export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
        >
            {/* Outer Circle */}
            <circle
                cx="50"
                cy="50"
                r="45"
                stroke="white"
                strokeWidth="2.5"
                fill="transparent"
            />
            {/* Letter E with enhanced design */}
            <path
                d="M 30,30 H 70 V 35 H 40 V 48 H 65 V 53 H 40 V 65 H 70 V 70 H 30 Z"
                fill="white"
            />
            {/* Additional Decorative Detail - Symbolizing growth and progress */}
            <path
                d="M 50,80 Q 60,70 70,80"
                stroke="white"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M 50,80 Q 40,70 30,80"
                stroke="white"
                strokeWidth="2"
                fill="none"
            />
            {/* Little dots to represent students or digital aspect */}
            <circle cx="50" cy="75" r="1.5" />
            <circle cx="40" cy="85" r="1.5" />
            <circle cx="60" cy="85" r="1.5" />
        </svg>
    );
}
